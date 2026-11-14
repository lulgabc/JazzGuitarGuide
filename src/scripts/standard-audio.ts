import { buildBars, QUALITIES, type ChordBar, type ProgressionId } from "../lib/standard-patterns";

export type StandardAudioConfig = {
  keyPc: number;
  tempo: number;
  meter: 3 | 4;
  feel: "swing" | "bossa" | "ballad" | "modal";
  progression: ProgressionId;
  preferFlats?: boolean;
};

type VisualItem = { time: number; index: number };

export class StandardAudio {
  private config: StandardAudioConfig;
  private onBar: ((index: number) => void) | null;
  private onEnd: (() => void) | null;
  private audioCtx: AudioContext | null = null;
  private master: GainNode | null = null;
  private noiseBuffer: AudioBuffer | null = null;
  private bars: ChordBar[] = [];
  private running = false;
  private schedulerTimer: number | null = null;
  private visualTimer: number | null = null;
  private nextBarTime = 0;
  private barIndex = 0;
  private barsPlayed = 0;
  private limitBars: number | null = null;
  private finishAt: number | null = null;
  private visualQueue: VisualItem[] = [];

  constructor(config: StandardAudioConfig, onBar?: (index: number) => void, onEnd?: () => void) {
    this.config = { ...config };
    this.onBar = onBar ?? null;
    this.onEnd = onEnd ?? null;
    this.rebuild();
  }

  get isRunning(): boolean {
    return this.running;
  }

  get chordBars(): ChordBar[] {
    return this.bars;
  }

  private rebuild() {
    this.bars = buildBars(this.config.keyPc, this.config.progression, this.config.preferFlats);
  }

  private ensureAudio(): AudioContext {
    if (!this.audioCtx) {
      const Ctx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.audioCtx = new Ctx();

      const length = Math.floor(this.audioCtx.sampleRate * 1);
      this.noiseBuffer = this.audioCtx.createBuffer(1, length, this.audioCtx.sampleRate);
      const data = this.noiseBuffer.getChannelData(0);
      for (let i = 0; i < length; i++) data[i] = Math.random() * 2 - 1;
    }
    if (!this.master) {
      this.master = this.audioCtx.createGain();
      this.master.gain.value = 0.16;
      this.master.connect(this.audioCtx.destination);
    }
    if (this.audioCtx.state === "suspended") void this.audioCtx.resume();
    return this.audioCtx;
  }

  setTempo(tempo: number) {
    this.config.tempo = Math.max(50, Math.min(220, tempo));
  }

  start(limitBars?: number) {
    if (this.running) this.stop();
    const ctx = this.ensureAudio();
    this.running = true;
    this.barIndex = 0;
    this.barsPlayed = 0;
    this.limitBars = limitBars ?? null;
    this.finishAt = null;
    this.visualQueue = [];
    this.nextBarTime = ctx.currentTime + 0.1;
    if (this.master) {
      this.master.gain.cancelScheduledValues(ctx.currentTime);
      this.master.gain.setValueAtTime(0.16, ctx.currentTime);
    }
    this.rebuild();
    this.scheduler();
    this.schedulerTimer = window.setInterval(() => this.scheduler(), 50);
    this.visualTimer = window.setInterval(() => this.visual(), 40);
  }

  stop() {
    if (!this.running) return;
    this.running = false;
    if (this.schedulerTimer !== null) window.clearInterval(this.schedulerTimer);
    if (this.visualTimer !== null) window.clearInterval(this.visualTimer);
    this.schedulerTimer = null;
    this.visualTimer = null;
    this.visualQueue = [];
    this.finishAt = null;
    const master = this.master;
    this.master = null;
    if (this.audioCtx && master) {
      const now = this.audioCtx.currentTime;
      master.gain.cancelScheduledValues(now);
      master.gain.setValueAtTime(master.gain.value, now);
      master.gain.linearRampToValueAtTime(0.0001, now + 0.08);
      window.setTimeout(() => master.disconnect(), 120);
    }
    this.onBar?.(-1);
    this.onEnd?.();
  }

  toggle(limitBars?: number) {
    if (this.running) this.stop();
    else this.start(limitBars);
  }

  private scheduler() {
    if (!this.running || !this.audioCtx) return;
    const horizon = this.audioCtx.currentTime + 0.3;
    while (this.nextBarTime < horizon) {
      if (this.limitBars !== null && this.barsPlayed >= this.limitBars) {
        if (this.finishAt === null) this.finishAt = this.nextBarTime;
        return;
      }
      const beat = 60 / this.config.tempo;
      this.scheduleBar(this.nextBarTime, beat);
      this.barsPlayed++;
      this.nextBarTime += beat * this.config.meter;
      if (this.limitBars !== null && this.barsPlayed >= this.limitBars) {
        this.finishAt = this.nextBarTime;
      }
    }
  }

  private visual() {
    if (!this.audioCtx) return;
    if (this.finishAt !== null && this.audioCtx.currentTime >= this.finishAt) {
      this.stop();
      return;
    }
    while (this.visualQueue.length && this.visualQueue[0].time <= this.audioCtx.currentTime) {
      const item = this.visualQueue.shift();
      if (item) this.onBar?.(item.index);
    }
  }

  private scheduleBar(time: number, beat: number) {
    const meter = this.config.meter;
    const chord = this.bars[this.barIndex % this.bars.length];
    const nextChord = this.bars[(this.barIndex + 1) % this.bars.length];
    if (!chord) return;
    const feel = this.config.feel;
    const bassRoot = 36 + chord.rootPc;
    const nextRoot = 36 + (nextChord?.rootPc ?? chord.rootPc);

    // Bass line
    if (meter === 3) {
      this.playBass(time, bassRoot);
      this.playBass(time + beat, bassRoot + 7);
      this.playBass(time + beat * 2, nextRoot - 1 >= 36 ? nextRoot - 1 : nextRoot + 11);
    } else if (feel === "ballad") {
      this.playBass(time, bassRoot, beat * 1.6);
      this.playBass(time + beat * 2, bassRoot + 7, beat * 1.4);
    } else if (feel === "modal") {
      this.playBass(time, bassRoot, beat * 0.9);
      this.playBass(time + beat * 2, bassRoot + 7, beat * 0.9);
    } else {
      this.playBass(time, bassRoot);
      this.playBass(time + beat, bassRoot + 7);
      this.playBass(time + beat * 2, bassRoot + 12);
      const approach = nextRoot - 1 >= 36 ? nextRoot - 1 : nextRoot + 11;
      this.playBass(time + beat * 3, approach);
    }

    // Comping
    let stabs: number[];
    if (feel === "bossa") stabs = meter === 3 ? [0, 1.5] : [0, 1.5, 2.5, 3.5];
    else if (feel === "ballad") stabs = [0];
    else if (feel === "modal") stabs = meter === 3 ? [0, 1.5] : [0, 2.5];
    else stabs = meter === 3 ? [0, 1.5] : [0, 1.5, 2.5];
    stabs.forEach((offset, index) => {
      const duration = feel === "ballad" ? beat * 2.4 : index === 0 ? beat * 0.55 : beat * 0.32;
      this.playChord(time + offset * beat, chord.rootPc, chord.quality, duration);
    });

    // Drums
    for (let b = 0; b < meter; b++) {
      this.playNoise(time + b * beat, "ride");
      if (feel === "swing") {
        this.playNoise(time + b * beat + beat * 0.66, "ride");
      } else if (feel === "bossa") {
        this.playNoise(time + b * beat + beat * 0.5, "hat");
      }
    }
    const beatTwo = Math.min(1, meter - 1);
    const beatThree = Math.min(2, meter - 1);
    this.playNoise(time + beatTwo * beat, feel === "bossa" ? "rim" : "snare");
    if (meter === 4) this.playNoise(time + beatThree * beat, feel === "bossa" ? "rim" : "snare");
    this.playKick(time);
    if (meter === 4) this.playKick(time + beat * 2);

    this.visualQueue.push({ time, index: this.barIndex % this.bars.length });
    this.barIndex++;
  }

  private playChord(time: number, rootPc: number, quality: keyof typeof QUALITIES, duration: number) {
    if (!this.audioCtx || !this.master) return;
    const intervals = QUALITIES[quality].intervals;
    intervals.forEach((interval, index) => {
      const osc = this.audioCtx!.createOscillator();
      const gain = this.audioCtx!.createGain();
      osc.type = index === 0 ? "triangle" : "sine";
      osc.frequency.value = 440 * Math.pow(2, (60 + rootPc + interval - 69) / 12);
      osc.detune.value = index % 2 === 0 ? -3 : 3;
      const peak = index === 0 ? 0.07 : 0.045;
      gain.gain.setValueAtTime(0.0001, time);
      gain.gain.exponentialRampToValueAtTime(peak, time + 0.012);
      gain.gain.exponentialRampToValueAtTime(0.0001, time + duration);
      osc.connect(gain).connect(this.master!);
      osc.start(time);
      osc.stop(time + duration + 0.02);
    });
  }

  private playBass(time: number, midi: number, duration = 0.42) {
    if (!this.audioCtx || !this.master) return;
    const osc = this.audioCtx.createOscillator();
    const gain = this.audioCtx.createGain();
    osc.type = "sine";
    osc.frequency.value = 440 * Math.pow(2, (midi - 69) / 12);
    gain.gain.setValueAtTime(0.0001, time);
    gain.gain.exponentialRampToValueAtTime(0.2, time + 0.01);
    gain.gain.exponentialRampToValueAtTime(0.0001, time + duration);
    osc.connect(gain).connect(this.master);
    osc.start(time);
    osc.stop(time + duration + 0.02);
  }

  private playNoise(time: number, type: "ride" | "hat" | "snare" | "rim") {
    if (!this.audioCtx || !this.master || !this.noiseBuffer) return;
    const source = this.audioCtx.createBufferSource();
    source.buffer = this.noiseBuffer;
    const filter = this.audioCtx.createBiquadFilter();
    const gain = this.audioCtx.createGain();
    let freq = 7000;
    let q = 0.7;
    let peak = 0.014;
    let dur = 0.08;
    if (type === "ride") { freq = 6200; peak = 0.012; dur = 0.14; }
    if (type === "hat") { freq = 8500; peak = 0.009; dur = 0.06; }
    if (type === "snare") { freq = 1900; q = 0.9; peak = 0.038; dur = 0.11; }
    if (type === "rim") { freq = 2400; q = 1.2; peak = 0.024; dur = 0.05; }
    filter.type = "highpass";
    filter.frequency.value = freq;
    filter.Q.value = q;
    gain.gain.setValueAtTime(0.0001, time);
    gain.gain.exponentialRampToValueAtTime(peak, time + 0.004);
    gain.gain.exponentialRampToValueAtTime(0.0001, time + dur);
    source.connect(filter).connect(gain).connect(this.master);
    source.start(time);
    source.stop(time + dur + 0.02);
  }

  private playKick(time: number) {
    if (!this.audioCtx || !this.master) return;
    const osc = this.audioCtx.createOscillator();
    const gain = this.audioCtx.createGain();
    osc.type = "sine";
    osc.frequency.setValueAtTime(120, time);
    osc.frequency.exponentialRampToValueAtTime(48, time + 0.11);
    gain.gain.setValueAtTime(0.0001, time);
    gain.gain.exponentialRampToValueAtTime(0.1, time + 0.008);
    gain.gain.exponentialRampToValueAtTime(0.0001, time + 0.16);
    osc.connect(gain).connect(this.master);
    osc.start(time);
    osc.stop(time + 0.18);
  }
}

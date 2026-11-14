/**
 * Generic practice-loop patterns for the standards pages.
 *
 * These are deliberately simplified, original accompaniment patterns. They are
 * not the complete chord changes of any tune, and they contain no melody.
 */

export type QualityId = "maj7" | "m7" | "7" | "m7b5" | "sus7";

export type ProgressionId =
  | "ii-v-i"
  | "i-vi-ii-v"
  | "blues"
  | "minor-blues"
  | "rhythm"
  | "bossa"
  | "minor"
  | "modal-dorian"
  | "modal-sus"
  | "bebop";

export type QualityDef = {
  label: string;
  intervals: number[];
};

export const QUALITIES: Record<QualityId, QualityDef> = {
  maj7: { label: "maj7", intervals: [0, 4, 7, 11] },
  m7: { label: "m7", intervals: [0, 3, 7, 10] },
  "7": { label: "7", intervals: [0, 4, 7, 10] },
  m7b5: { label: "m7♭5", intervals: [0, 3, 6, 10] },
  sus7: { label: "7sus", intervals: [0, 5, 7, 10] },
};

export type PatternBar = {
  degree: number;
  quality: QualityId;
  roman: string;
};

export type ProgressionDef = {
  label: string;
  description: string;
  bars: PatternBar[];
};

export const PROGRESSIONS: Record<ProgressionId, ProgressionDef> = {
  "ii-v-i": {
    label: "ii–V–I",
    description: "四小节 ii–V–I，练 3/7 音与目标音。",
    bars: [
      { degree: 2, quality: "m7", roman: "ii" },
      { degree: 7, quality: "7", roman: "V" },
      { degree: 0, quality: "maj7", roman: "I" },
      { degree: 0, quality: "maj7", roman: "I" },
    ],
  },
  "i-vi-ii-v": {
    label: "I–vi–ii–V",
    description: "四小节 turnaround，练声部连接与 comping。",
    bars: [
      { degree: 0, quality: "maj7", roman: "I" },
      { degree: 9, quality: "m7", roman: "vi" },
      { degree: 2, quality: "m7", roman: "ii" },
      { degree: 7, quality: "7", roman: "V" },
    ],
  },
  blues: {
    label: "12-bar Blues",
    description: "12 小节 I–IV–V blues，练曲式与 turnaround。",
    bars: [
      { degree: 0, quality: "7", roman: "I" },
      { degree: 5, quality: "7", roman: "IV" },
      { degree: 0, quality: "7", roman: "I" },
      { degree: 0, quality: "7", roman: "I" },
      { degree: 5, quality: "7", roman: "IV" },
      { degree: 5, quality: "7", roman: "IV" },
      { degree: 0, quality: "7", roman: "I" },
      { degree: 0, quality: "7", roman: "I" },
      { degree: 7, quality: "7", roman: "V" },
      { degree: 5, quality: "7", roman: "IV" },
      { degree: 0, quality: "7", roman: "I" },
      { degree: 7, quality: "7", roman: "V" },
    ],
  },
  "minor-blues": {
    label: "Minor Blues",
    description: "12 小节小调 blues，练 i–iv–V 与 minor 语言。",
    bars: [
      { degree: 0, quality: "m7", roman: "i" },
      { degree: 5, quality: "m7", roman: "iv" },
      { degree: 0, quality: "m7", roman: "i" },
      { degree: 0, quality: "m7", roman: "i" },
      { degree: 5, quality: "m7", roman: "iv" },
      { degree: 5, quality: "m7", roman: "iv" },
      { degree: 0, quality: "m7", roman: "i" },
      { degree: 0, quality: "m7", roman: "i" },
      { degree: 7, quality: "7", roman: "V" },
      { degree: 5, quality: "m7", roman: "iv" },
      { degree: 0, quality: "m7", roman: "i" },
      { degree: 7, quality: "7", roman: "V" },
    ],
  },
  rhythm: {
    label: "Rhythm Changes A",
    description: "八小节 I–vi–ii–V 循环，练 A 段曲式。",
    bars: [
      { degree: 0, quality: "maj7", roman: "I" },
      { degree: 9, quality: "m7", roman: "vi" },
      { degree: 2, quality: "m7", roman: "ii" },
      { degree: 7, quality: "7", roman: "V" },
      { degree: 0, quality: "maj7", roman: "I" },
      { degree: 9, quality: "m7", roman: "vi" },
      { degree: 2, quality: "m7", roman: "ii" },
      { degree: 7, quality: "7", roman: "V" },
    ],
  },
  bossa: {
    label: "Bossa I–vi–ii–V",
    description: "四小节 bossa 循环，练轻触与切分。",
    bars: [
      { degree: 0, quality: "maj7", roman: "I" },
      { degree: 9, quality: "m7", roman: "vi" },
      { degree: 2, quality: "m7", roman: "ii" },
      { degree: 7, quality: "7", roman: "V" },
    ],
  },
  minor: {
    label: "i–iv–V–i",
    description: "四小节小调循环，练小调和声与长线条。",
    bars: [
      { degree: 0, quality: "m7", roman: "i" },
      { degree: 5, quality: "m7", roman: "iv" },
      { degree: 7, quality: "7", roman: "V" },
      { degree: 0, quality: "m7", roman: "i" },
    ],
  },
  "modal-dorian": {
    label: "Dorian Vamp",
    description: "四小节 Dorian 循环，i7 与 ♭IImaj7 的调式色彩。",
    bars: [
      { degree: 0, quality: "m7", roman: "i" },
      { degree: 0, quality: "m7", roman: "i" },
      { degree: 1, quality: "maj7", roman: "♭II" },
      { degree: 1, quality: "maj7", roman: "♭II" },
    ],
  },
  "modal-sus": {
    label: "Sus Vamp",
    description: "四小节 sus 循环，练四度/挂留声音与空间。",
    bars: [
      { degree: 0, quality: "sus7", roman: "Isus" },
      { degree: 0, quality: "sus7", roman: "Isus" },
      { degree: 5, quality: "sus7", roman: "IVsus" },
      { degree: 5, quality: "sus7", roman: "IVsus" },
    ],
  },
  bebop: {
    label: "Bebop ii–V–I",
    description: "八小节 ii–V–I 循环，练 guide tone 与 bebop 线条。",
    bars: [
      { degree: 2, quality: "m7", roman: "ii" },
      { degree: 7, quality: "7", roman: "V" },
      { degree: 0, quality: "maj7", roman: "I" },
      { degree: 0, quality: "maj7", roman: "I" },
      { degree: 2, quality: "m7", roman: "ii" },
      { degree: 7, quality: "7", roman: "V" },
      { degree: 0, quality: "maj7", roman: "I" },
      { degree: 0, quality: "maj7", roman: "I" },
    ],
  },
};

const SHARP_NAMES = ["C", "C♯", "D", "D♯", "E", "F", "F♯", "G", "G♯", "A", "A♯", "B"];
const FLAT_NAMES = ["C", "D♭", "D", "E♭", "E", "F", "G♭", "G", "A♭", "A", "B♭", "B"];

export type ChordBar = {
  name: string;
  roman: string;
  rootPc: number;
  quality: QualityId;
};

export function buildBars(keyPc: number, progression: ProgressionId, preferFlats = false): ChordBar[] {
  const names = preferFlats ? FLAT_NAMES : SHARP_NAMES;
  return PROGRESSIONS[progression].bars.map((bar) => {
    const rootPc = (keyPc + bar.degree + 12) % 12;
    return {
      name: `${names[rootPc]}${QUALITIES[bar.quality].label}`,
      roman: bar.roman,
      rootPc,
      quality: bar.quality,
    };
  });
}

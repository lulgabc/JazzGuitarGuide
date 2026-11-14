/**
 * Practice library data.
 *
 * All notation in this library is original practice material generated for
 * JazzGuitarGuide (scales, arpeggios, voicings, comping patterns, etudes).
 * It does not contain lead sheets or transcriptions of copyrighted standards.
 */

export type ExerciseLevel = "入门" | "进阶" | "高级";
export type ExerciseCategory = "热身" | "音阶" | "琶音" | "和弦" | "伴奏" | "即兴" | "和弦旋律" | "视奏" | "曲式";

export type Exercise = {
  id: string;
  title: string;
  level: ExerciseLevel;
  category: ExerciseCategory;
  key: string;
  meter: string;
  bpm: number;
  bars: number;
  focus: string[];
  description: string;
  steps: string[];
  mistakes: string[];
  abc: string;
  tab: boolean;
  related: { label: string; href: string };
};

type ModeId = "major" | "dorian" | "phrygian" | "lydian" | "mixolydian" | "aeolian" | "locrian" | "melodic-minor" | "harmonic-minor";

type ModeDef = {
  id: ModeId;
  label: string;
  offset: number;
  intervals: number[];
};

type Key = {
  root: number;
  mode: ModeId;
  display: string;
  rootName: string;
  scaleNames: string[];
  scalePcs: number[];
  intervals: number[];
  preferFlats: boolean;
  abcKey: string;
  signature: Record<string, string>;
};

const SHARP = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];
const FLAT = ["C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab", "A", "Bb", "B"];

// Standard spellings of the twelve major scales. Flats/sharps are chosen as
// a musician would expect to see them, not by a simple sharp-only lookup.
const MAJOR_SPELLINGS: Record<number, string[]> = {
  0: ["C", "D", "E", "F", "G", "A", "B"],
  1: ["Db", "Eb", "F", "Gb", "Ab", "Bb", "C"],
  2: ["D", "E", "F#", "G", "A", "B", "C#"],
  3: ["Eb", "F", "G", "Ab", "Bb", "C", "D"],
  4: ["E", "F#", "G#", "A", "B", "C#", "D#"],
  5: ["F", "G", "A", "Bb", "C", "D", "E"],
  6: ["Gb", "Ab", "Bb", "Cb", "Db", "Eb", "F"],
  7: ["G", "A", "B", "C", "D", "E", "F#"],
  8: ["Ab", "Bb", "C", "Db", "Eb", "F", "G"],
  9: ["A", "B", "C#", "D", "E", "F#", "G#"],
  10: ["Bb", "C", "D", "Eb", "F", "G", "A"],
  11: ["B", "C#", "D#", "E", "F#", "G#", "A#"],
};

const MODES: Record<ModeId, ModeDef> = {
  major: { id: "major", label: "大调", offset: 0, intervals: [0, 2, 4, 5, 7, 9, 11] },
  dorian: { id: "dorian", label: "Dorian", offset: 2, intervals: [0, 2, 3, 5, 7, 9, 10] },
  phrygian: { id: "phrygian", label: "Phrygian", offset: 4, intervals: [0, 1, 3, 5, 7, 8, 10] },
  lydian: { id: "lydian", label: "Lydian", offset: 5, intervals: [0, 2, 4, 6, 7, 9, 11] },
  mixolydian: { id: "mixolydian", label: "Mixolydian", offset: 7, intervals: [0, 2, 4, 5, 7, 9, 10] },
  aeolian: { id: "aeolian", label: "Aeolian / 自然小调", offset: 9, intervals: [0, 2, 3, 5, 7, 8, 10] },
  locrian: { id: "locrian", label: "Locrian", offset: 11, intervals: [0, 1, 3, 5, 6, 8, 10] },
  "melodic-minor": { id: "melodic-minor", label: "旋律小调", offset: 0, intervals: [0, 2, 3, 5, 7, 9, 11] },
  "harmonic-minor": { id: "harmonic-minor", label: "和声小调", offset: 0, intervals: [0, 2, 3, 5, 7, 8, 11] },
};

const LETTERS = ["C", "D", "E", "F", "G", "A", "B"];
const LETTER_PCS = [0, 2, 4, 5, 7, 9, 11];

// Spell each scale degree with successive letters, then choose the accidental
// that reaches the required pitch class. This keeps melodic/harmonic minor and
// the modes theoretically correct instead of borrowing the parallel major.
function spellDegree(letterIndex: number, targetPc: number, preferFlats: boolean): string {
  const letter = LETTERS[letterIndex % 7];
  const natural = LETTER_PCS[letterIndex % 7];
  let diff = (targetPc - natural + 12) % 12;
  if (diff > 6) diff -= 12;
  if (diff === 0) return letter;
  if (diff === 1) return `${letter}#`;
  if (diff === 2) return `${letter}##`;
  if (diff === -1) return `${letter}b`;
  if (diff === -2) return `${letter}bb`;
  // Extremely distant enharmonic spellings: fall back to a chromatic name.
  return preferFlats ? FLAT[targetPc] : SHARP[targetPc];
}

function spellScale(root: number, intervals: number[], rootName: string): string[] {
  const rootLetter = LETTERS.indexOf(rootName[0]);
  const preferFlats = rootName.includes("b");
  return intervals.map((interval, index) => spellDegree(rootLetter + index, (root + interval) % 12, preferFlats));
}

function chordRootName(rootPc: number, key: Key): string {
  const index = key.scalePcs.indexOf(rootPc);
  if (index >= 0) return key.scaleNames[index];
  return key.preferFlats ? FLAT[rootPc] : SHARP[rootPc];
}

// Spell chord tones by degree (1-3-5-7 for tertian chords, 1-4-7-3 for
// quartal stacks), so a C7 is always C E G Bb rather than C E G A#.
function spellTones(rootPc: number, intervals: number[], key: Key, quartal = false): string[] {
  const rootName = chordRootName(rootPc, key);
  const rootLetter = LETTERS.indexOf(rootName[0]);
  const preferFlats = rootName.includes("b") || key.preferFlats;
  return intervals.map((interval, index) => {
    const simple = ((interval % 12) + 12) % 12;
    let degreeOffset: number;
    if (quartal) {
      degreeOffset = (index * 3) % 7;
    } else if (simple === 0) {
      degreeOffset = 0;
    } else if (simple === 3 || simple === 4) {
      degreeOffset = 2;
    } else if (simple === 6 || simple === 7 || simple === 8) {
      degreeOffset = 4;
    } else if (simple === 9 || simple === 10 || simple === 11) {
      degreeOffset = 6;
    } else if (simple === 1 || simple === 2) {
      degreeOffset = 1;
    } else if (simple === 5) {
      degreeOffset = 3;
    } else {
      degreeOffset = 5;
    }
    return spellDegree(rootLetter + degreeOffset, (rootPc + interval) % 12, preferFlats);
  });
}

const MINOR_ROOT_NAMES: Record<number, string> = {
  0: "C", 1: "C#", 2: "D", 3: "Eb", 4: "E", 5: "F",
  6: "F#", 7: "G", 8: "G#", 9: "A", 10: "Bb", 11: "B",
};

const MODE_SUFFIX: Record<ModeId, string> = {
  major: "",
  dorian: "dor",
  phrygian: "phr",
  lydian: "lyd",
  mixolydian: "mix",
  aeolian: "m",
  locrian: "loc",
  "melodic-minor": "m",
  "harmonic-minor": "m",
};

function signatureFromMajor(parent: number): Record<string, string> {
  const signature: Record<string, string> = {};
  for (const name of MAJOR_SPELLINGS[parent]) {
    const match = /^([A-G])([#b]+)$/.exec(name);
    if (match) signature[match[1]] = match[2];
  }
  return signature;
}

function makeKey(root: number, mode: ModeId = "major"): Key {
  const def = MODES[mode];
  const minorMode = mode === "melodic-minor" || mode === "harmonic-minor" || mode === "aeolian";
  const rootName = minorMode ? MINOR_ROOT_NAMES[root] : MAJOR_SPELLINGS[root][0];
  const scaleNames = spellScale(root, def.intervals, rootName);
  const scalePcs = def.intervals.map((interval) => (root + interval) % 12);
  const signatureParent = minorMode ? (root + 3) % 12 : (root - def.offset + 12) % 12;
  const signature = signatureFromMajor(signatureParent);
  const preferFlats = scaleNames.some((name) => name.includes("b"));
  return {
    root,
    mode,
    rootName: scaleNames[0],
    display: `${scaleNames[0]} ${def.label}`,
    scaleNames,
    scalePcs,
    intervals: def.intervals,
    preferFlats,
    abcKey: `${scaleNames[0]}${MODE_SUFFIX[mode]}`,
    signature,
  };
}

function nameForPc(pc: number, key: Key): string {
  const index = key.scalePcs.indexOf(pc);
  if (index >= 0) return key.scaleNames[index];
  return key.preferFlats ? FLAT[pc] : SHARP[pc];
}

function abcPitch(midi: number, name: string): string {
  const letter = name[0].toUpperCase();
  const accidental = name.includes("##")
    ? "^^"
    : name.includes("bb")
      ? "__"
      : name.includes("#")
        ? "^"
        : name.includes("b")
          ? "_"
          : "";
  const octave = Math.floor(midi / 12) - 1;
  if (octave >= 5) return `${accidental}${letter.toLowerCase()}${"'".repeat(octave - 5)}`;
  return `${accidental}${letter}${",".repeat(Math.max(0, 4 - octave))}`;
}

// Convert the explicit accidentals in a token to accidentals relative to the
// exercise's key signature. In-key sharps/flats are omitted; naturals that
// cancel a key signature get an explicit "=".
function applyKeySignature(token: Token, signature: Record<string, string>): Token {
  const a = token.a.replace(/([_^=]{0,2})([A-Ga-g])([,']*)/g, (_full, accidental: string, letter: string, octave: string) => {
    const keyAccidental = signature[letter.toUpperCase()] ?? "";
    let next = accidental;
    if (accidental === "^" && keyAccidental === "#") next = "";
    else if (accidental === "_" && keyAccidental === "b") next = "";
    else if (accidental === "" && keyAccidental) next = "=";
    else if (accidental === "=" && !keyAccidental) next = "";
    return `${next}${letter}${octave}`;
  });
  return { ...token, a };
}

// ABC accidentals are absolute and persist to the end of the bar. After the
// key-signature pass above, walk each bar and add the accidentals needed to
// cancel a previous accidental on the same letter (e.g. ^C ... =C).
function fixBarAccidentals(bar: string, signature: Record<string, string>): string {
  const state: Record<string, string> = { ...signature };
  return bar.replace(/"([^"]*)"|([_^=]{0,2})([A-Ga-g])([,']*)/g, (full, label, accidental, letter, octave) => {
    if (label !== undefined) return full;
    const upper = letter.toUpperCase();
    const intended =
      accidental === "^" ? "#" :
      accidental === "^^" ? "##" :
      accidental === "_" ? "b" :
      accidental === "__" ? "bb" :
      accidental === "=" ? "" :
      (signature[upper] ?? "");
    const current = state[upper] ?? "";
    let next = "";
    if (intended !== current) {
      next =
        intended === "" ? "=" :
        intended === "#" ? "^" :
        intended === "##" ? "^^" :
        intended === "b" ? "_" :
        intended === "bb" ? "__" : "";
    }
    state[upper] = intended;
    return `${next}${letter}${octave}`;
  });
}

type Token = { a: string; d: number; label?: string };

function noteToken(midi: number, name: string, duration = 1): Token {
  return { a: `${abcPitch(midi, name)}${duration === 1 ? "" : duration}`, d: duration };
}

function rest(duration = 1): Token {
  return { a: `z${duration === 1 ? "" : duration}`, d: duration };
}

function chordToken(midis: number[], names: string[], duration = 2, label?: string): Token {
  const notes = midis.map((midi, i) => abcPitch(midi, names[i])).join("");
  return { a: `[${notes}]${duration === 1 ? "" : duration}`, d: duration, label };
}

function tokenBars(tokens: Token[], unitsPerBar = 8): string[] {
  const bars: string[] = [];
  let current: string[] = [];
  let units = 0;
  for (const token of tokens) {
    let remaining = token.d;
    let firstSegment = true;
    while (remaining > 0) {
      const space = unitsPerBar - units;
      const take = Math.min(remaining, space);
      current.push(`${firstSegment && token.label ? `"${token.label}"` : ""}${token.a}`);
      firstSegment = false;
      units += take;
      remaining -= take;
      if (units === unitsPerBar) {
        bars.push(current.join(" "));
        current = [];
        units = 0;
      }
    }
  }
  if (current.length) {
    while (units < unitsPerBar) {
      current.push("z");
      units++;
    }
    bars.push(current.join(" "));
  }
  return bars;
}

function abcDoc(title: string, meter: string, tokens: Token[], key: Key, unitsPerBar = 8): string {
  const tuned = tokens.map((token) => applyKeySignature(token, key.signature));
  const bars = tokenBars(tuned, unitsPerBar).map((bar) => fixBarAccidentals(bar, key.signature));
  const systems: string[] = [];
  for (let i = 0; i < bars.length; i += 4) {
    systems.push(bars.slice(i, i + 4).join(" | "));
  }
  return `X:1\nT:${title}\nM:${meter}\nL:1/8\nK:${key.abcKey}\n${systems.join(" |\n")} |]`;
}

function scalePool(key: Key, octaves = 2) {
  const notes: { midi: number; name: string; pc: number; degree: number }[] = [];
  for (let octave = 0; octave < octaves; octave++) {
    for (let i = 0; i < 7; i++) {
      const midi = 60 + key.root + 12 * octave + key.intervals[i];
      notes.push({ midi, name: key.scaleNames[i], pc: (key.root + key.intervals[i]) % 12, degree: i });
    }
  }
  notes.push({ midi: 60 + key.root + 12 * octaves, name: key.scaleNames[0], pc: key.root, degree: 0 });
  return notes;
}

function scaleRunTokens(key: Key): Token[] {
  const pool = scalePool(key, 2);
  const up = pool.map((note) => noteToken(note.midi, note.name));
  const down = [...pool].reverse().slice(1).map((note) => noteToken(note.midi, note.name));
  const tokens = [...up, ...down];
  while (tokens.length < 32) tokens.push(rest(1));
  return tokens;
}

function scaleThirdsTokens(key: Key): Token[] {
  const pool = scalePool(key, 2);
  const tokens: Token[] = [];
  for (let i = 0; i < 14; i++) {
    const first = pool[i];
    const third = pool[Math.min(i + 2, pool.length - 1)];
    tokens.push(noteToken(first.midi, first.name), noteToken(third.midi, third.name));
  }
  while (tokens.length < 32) tokens.push(rest(1));
  return tokens.slice(0, 32);
}

function arpeggioTokens(key: Key, intervals: number[]): Token[] {
  const rootMidi = 60 + key.root;
  const names = spellTones(key.root, intervals, key);
  const up: Token[] = [];
  for (let octave = 0; octave < 2; octave++) {
    for (let i = 0; i < intervals.length; i++) {
      up.push(noteToken(rootMidi + octave * 12 + intervals[i], names[i]));
    }
  }
  const down = [...up].reverse().slice(1);
  const tokens = [...up, ...down];
  while (tokens.length < 16) tokens.push(rest(1));
  return tokens;
}

const CHORD_SUFFIX = {
  maj7: "maj7",
  m7: "m7",
  "7": "7",
  m7b5: "m7♭5",
  dim7: "dim7",
  mMaj7: "mMaj7",
} as const;

function shellChord(rootPc: number, quality: keyof typeof CHORD_SUFFIX, key: Key) {
  const intervals = {
    maj7: [0, 4, 11],
    m7: [0, 3, 10],
    "7": [0, 4, 10],
    m7b5: [0, 3, 9],
    dim7: [0, 3, 9],
    mMaj7: [0, 3, 11],
  }[quality];
  const midis = intervals.map((interval) => 60 + rootPc + interval);
  const names = spellTones(rootPc, intervals, key);
  const label = `${chordRootName(rootPc, key)}${CHORD_SUFFIX[quality]}`;
  return { midis, names, label };
}

function closeVoicing(rootPc: number, intervals: number[], inversion: number, key: Key) {
  const rotated = [...intervals.slice(inversion), ...intervals.slice(0, inversion)];
  const spelled = spellTones(rootPc, intervals, key);
  const rotatedNames = [...spelled.slice(inversion), ...spelled.slice(0, inversion)];
  const midis: number[] = [];
  const names: string[] = [];
  let last = 0;
  rotated.forEach((interval, index) => {
    let midi = 60 + rootPc + interval;
    while (midi <= last) midi += 12;
    midis.push(midi);
    names.push(rotatedNames[index]);
    last = midi;
  });
  return { midis, names };
}

function drop2Voicing(rootPc: number, intervals: number[], inversion: number, key: Key) {
  const voicing = closeVoicing(rootPc, intervals, inversion, key);
  const pairs = voicing.midis.map((midi, index) => ({ midi, name: voicing.names[index] }));
  pairs.sort((a, b) => a.midi - b.midi);
  pairs[2].midi -= 12;
  pairs.sort((a, b) => a.midi - b.midi);
  return {
    midis: pairs.map((pair) => pair.midi),
    names: pairs.map((pair) => pair.name),
  };
}

const DEFAULT_STEPS = [
  "60–70 BPM 慢速开始，连续 3 次干净再 +5 BPM。",
  "用节拍器 2 & 4；录 30 秒回听音头、音准与时间。",
  "移到 2–3 个调或把位；不要只背形状。",
  "最后把其中一个动机放进正在练的标准曲。",
];

const DEFAULT_MISTAKES = [
  "只求快，音头、音准和时值不清楚。",
  "没有目标音，像机械跑音阶；先唱再弹。",
  "手腕/肩膀紧，练几分钟就酸；先减力度。",
  "只看 TAB，不看节奏与和弦关系。",
];

const RELATED = {
  warmup: { label: "基础：姿势与热身", href: "/basics/foundations/" },
  scale: { label: "音阶、琶音与即兴语言", href: "/basics/scales/" },
  arpeggio: { label: "音阶、琶音与即兴语言", href: "/basics/scales/" },
  voicing: { label: "和声、Voicing 与声部连接", href: "/basics/harmony/" },
  comping: { label: "伴奏 Comping", href: "/basics/comping/" },
  improv: { label: "即兴、乐句与转录", href: "/basics/improvisation/" },
  chordMelody: { label: "和弦旋律与独奏吉他", href: "/basics/chord-melody/" },
  reading: { label: "指板与读谱", href: "/basics/fretboard/" },
  form: { label: "标准曲与曲式", href: "/standards/" },
};

const exercises: Exercise[] = [];
const counters: Record<string, number> = {};

function add(draft: Omit<Exercise, "id" | "steps" | "mistakes" | "related"> & { prefix: string; steps?: string[]; mistakes?: string[]; related?: { label: string; href: string } }) {
  const next = (counters[draft.prefix] ?? 0) + 1;
  counters[draft.prefix] = next;
  const id = `${draft.prefix}-${String(next).padStart(3, "0")}`;
  exercises.push({
    id,
    title: draft.title,
    level: draft.level,
    category: draft.category,
    key: draft.key,
    meter: draft.meter,
    bpm: draft.bpm,
    bars: draft.bars,
    focus: draft.focus,
    description: draft.description,
    steps: draft.steps ?? DEFAULT_STEPS,
    mistakes: draft.mistakes ?? DEFAULT_MISTAKES,
    abc: draft.abc.replace("\nK:", `\nQ:1/4=${draft.bpm}\nK:`),
    tab: draft.tab,
    related: draft.related ?? RELATED.scale,
  });
}

// ---------------------------------------------------------------------------
// 1. Warm-ups: 24
// ---------------------------------------------------------------------------

const warmKeys = [makeKey(0), makeKey(5), makeKey(10), makeKey(3), makeKey(7), makeKey(2)];
const warmPatterns = [
  { name: "1-2-3-4", offsets: [0, 1, 2, 3, 2, 1, 0, 1] },
  { name: "1-3-2-4", offsets: [0, 2, 1, 3, 2, 0, 1, 3] },
  { name: "1-4-2-3", offsets: [0, 3, 1, 2, 3, 0, 2, 1] },
  { name: "跨弦 1-2-3-4", offsets: [0, 1, 2, 3, 4, 3, 2, 1] },
];

for (const key of warmKeys) {
  for (const pattern of warmPatterns) {
    const root = 60 + key.root;
    const tokens: Token[] = [];
    for (let repeat = 0; repeat < 4; repeat++) {
      for (const offset of pattern.offsets) {
        tokens.push(noteToken(root + offset, nameForPc((key.root + offset) % 12, key)));
      }
    }
    add({
      prefix: "warmup",
      title: `半音阶 ${pattern.name} · ${key.display}`,
      level: "入门",
      category: "热身",
      key: key.display,
      meter: "4/4",
      bpm: 60,
      bars: 4,
      focus: ["左手独立性", "左右手同步", "放松"],
      description: `从 ${key.display} 的根音附近开始，用 ${pattern.name} 做四组半音型。它是每天 5 分钟的热身，不是速度测试；目标是让每个音都清楚、放松、可重复。`,
      abc: abcDoc(`半音阶 ${pattern.name} · ${key.display}`, "4/4", tokens, key),
      tab: true,
      related: RELATED.warmup,
      steps: ["用很轻的力度，先听每个音是否清楚。", "节拍器 60 BPM，四组连续弹，不抢拍。", "录 20 秒；如果手腕紧，减力度再弹。", "移到 2 个把位，保持同样的音头。"],
    });
  }
}

// ---------------------------------------------------------------------------
// 2. Scales & modes: 40
// ---------------------------------------------------------------------------

const scaleKeys = [0, 5, 10, 3, 7, 2, 9, 4].map((root) => makeKey(root));

for (const key of scaleKeys) {
  add({
    prefix: "scale",
    title: `大调音阶 · ${key.display}`,
    level: "入门",
    category: "音阶",
    key: key.display,
    meter: "4/4",
    bpm: 70,
    bars: 4,
    focus: ["两个八度", "音准", "音头"],
    description: `${key.display} 的两个八度上下行。先把每个音弹干净，再谈速度；注意根音位置与换把时的连贯。`,
    abc: abcDoc(`大调音阶 · ${key.display}`, "4/4", scaleRunTokens(key), key),
    tab: true,
  });
  add({
    prefix: "scale",
    title: `大调三度模进 · ${key.display}`,
    level: "入门",
    category: "音阶",
    key: key.display,
    meter: "4/4",
    bpm: 60,
    bars: 4,
    focus: ["三度模进", "音程", "换弦"],
    description: `${key.display} 的 1-3、2-4、3-5 三度模进。它比单纯上下行更像音乐，也能训练你对音程的听觉。`,
    abc: abcDoc(`大调三度模进 · ${key.display}`, "4/4", scaleThirdsTokens(key), key),
    tab: true,
  });
}

const modeKeys: [number, ModeId][] = [
  [2, "dorian"], [7, "dorian"], [0, "dorian"], [5, "dorian"],
  [7, "mixolydian"], [0, "mixolydian"], [5, "mixolydian"], [10, "mixolydian"],
  [0, "lydian"], [5, "lydian"], [10, "lydian"], [3, "lydian"],
  [9, "aeolian"], [2, "aeolian"], [7, "aeolian"], [0, "aeolian"],
];

for (const [root, mode] of modeKeys) {
  const key = makeKey(root, mode);
  add({
    prefix: "scale",
    title: `${key.display} · 调式音阶`,
    level: "进阶",
    category: "音阶",
    key: key.display,
    meter: "4/4",
    bpm: 64,
    bars: 4,
    focus: ["调式色彩", "根音", "特征音"],
    description: `${key.display} 的两个八度。先唱根音与特征音（例如 Dorian 的大六度、Mixolydian 的小七度），再上琴；不要把它弹成“另一个大调音阶”。`,
    abc: abcDoc(`${key.display} · 调式音阶`, "4/4", scaleRunTokens(key), key),
    tab: true,
    related: RELATED.scale,
    steps: ["先弹根音，再唱整个音阶。", "找出这个调式最特别的音，停在它上面听。", "用 60 BPM 弹两遍，录下来。", "在 2 个不同把位重复。"],
  });
}

for (const [root, mode] of [[0, "melodic-minor"], [7, "melodic-minor"], [2, "melodic-minor"], [5, "melodic-minor"]] as [number, ModeId][]) {
  const key = makeKey(root, mode);
  add({
    prefix: "scale",
    title: `${key.display} · 两个八度`,
    level: "高级",
    category: "音阶",
    key: key.display,
    meter: "4/4",
    bpm: 60,
    bars: 4,
    focus: ["旋律小调", "大七度", "小调色彩"],
    description: `${key.display} 的旋律小调上下行。它是 altered、Lydian dominant 与 Locrian ♯2 的母音阶；先把母音阶听熟。`,
    abc: abcDoc(`${key.display} · 两个八度`, "4/4", scaleRunTokens(key), key),
    tab: true,
    related: RELATED.scale,
  });
}

for (const [root, mode] of [[9, "harmonic-minor"], [2, "harmonic-minor"], [4, "harmonic-minor"], [7, "harmonic-minor"]] as [number, ModeId][]) {
  const key = makeKey(root, mode);
  add({
    prefix: "scale",
    title: `${key.display} · 两个八度`,
    level: "高级",
    category: "音阶",
    key: key.display,
    meter: "4/4",
    bpm: 56,
    bars: 4,
    focus: ["和声小调", "增二度", "V7♭9"],
    description: `${key.display} 的和声小调。注意增二度带来的异域色彩；它常用来解释小调 V7♭9。`,
    abc: abcDoc(`${key.display} · 两个八度`, "4/4", scaleRunTokens(key), key),
    tab: true,
    related: RELATED.scale,
  });
}

// ---------------------------------------------------------------------------
// 3. Arpeggios: 36
// ---------------------------------------------------------------------------

const arpeggioTypes: { id: string; label: string; intervals: number[]; level: ExerciseLevel }[] = [
  { id: "maj7", label: "maj7", intervals: [0, 4, 7, 11], level: "入门" },
  { id: "m7", label: "m7", intervals: [0, 3, 7, 10], level: "入门" },
  { id: "7", label: "7", intervals: [0, 4, 7, 10], level: "入门" },
  { id: "m7b5", label: "m7♭5", intervals: [0, 3, 6, 10], level: "进阶" },
  { id: "dim7", label: "dim7", intervals: [0, 3, 6, 9], level: "进阶" },
  { id: "mMaj7", label: "mMaj7", intervals: [0, 3, 7, 11], level: "高级" },
];

const arpeggioKeysA = [makeKey(0), makeKey(5), makeKey(10), makeKey(3)];
for (const type of arpeggioTypes) {
  for (const key of arpeggioKeysA) {
    add({
      prefix: "arpeggio",
      title: `${type.label} 琶音 · ${key.display}`,
      level: type.level,
      category: "琶音",
      key: key.display,
      meter: "4/4",
      bpm: 60,
      bars: 2,
      focus: ["和弦音", "两个八度", "换把"],
      description: `${key.display} 的 ${type.label} 琶音，两个八度上下行。琶音比音阶更直接地表达和声；注意 3 音与 7 音不要被平均主义淹没。`,
      abc: abcDoc(`${type.label} 琶音 · ${key.display}`, "4/4", arpeggioTokens(key, type.intervals), key),
      tab: true,
      related: RELATED.arpeggio,
    });
  }
}

for (const type of arpeggioTypes.slice(0, 3)) {
  for (const key of [makeKey(7), makeKey(2), makeKey(9), makeKey(4)]) {
    add({
      prefix: "arpeggio",
      title: `${type.label} 琶音 · ${key.display}`,
      level: type.level,
      category: "琶音",
      key: key.display,
      meter: "4/4",
      bpm: 60,
      bars: 2,
      focus: ["和弦音", "两个八度", "移调"],
      description: `${key.display} 的 ${type.label} 琶音。和同类型的 C/F/B♭/E♭ 版本对比，确认你是在理解和弦，而不是只记一个形状。`,
      abc: abcDoc(`${type.label} 琶音 · ${key.display}`, "4/4", arpeggioTokens(key, type.intervals), key),
      tab: true,
      related: RELATED.arpeggio,
    });
  }
}

// ---------------------------------------------------------------------------
// 4. Voicings: 24
// ---------------------------------------------------------------------------

for (const key of scaleKeys) {
  const iiRoot = (key.root + key.intervals[1]) % 12;
  const vRoot = (key.root + key.intervals[4]) % 12;
  const chords = [
    shellChord(iiRoot, "m7", key),
    shellChord(vRoot, "7", key),
    shellChord(key.root, "maj7", key),
    shellChord(key.root, "maj7", key),
  ];
  const tokens = chords.flatMap((chord) => [chordToken(chord.midis, chord.names, 8, chord.label)]);
  add({
    prefix: "voicing",
    title: `Shell Voicing · ii–V–I · ${key.display}`,
    level: "入门",
    category: "和弦",
    key: key.display,
    meter: "4/4",
    bpm: 50,
    bars: 4,
    focus: ["Shell Voicing", "ii–V–I", "声部连接"],
    description: `${key.display} 的 ii–V–I，每个和弦只弹根音、3 音、7 音。目标是让 3/7 音的移动清楚，而不是把和弦弹厚。`,
    abc: abcDoc(`Shell Voicing · ii–V–I · ${key.display}`, "4/4", tokens, key),
    tab: false,
    related: RELATED.voicing,
    steps: ["先只听 3/7 两个音，确认半音解决。", "再加根音，保持 4 拍。", "用 50 BPM 连续 3 遍。", "移到 2 个新调。"],
    mistakes: ["每个和弦都从根音重新开始，声部大跳。", "5 音/扩展音太多，听不清 3/7。", "时值不完整，和弦互相盖住。"],
  });
}

for (const key of [makeKey(0), makeKey(5), makeKey(10), makeKey(3)]) {
  for (const type of [
    { label: "maj7", intervals: [0, 4, 7, 11] },
    { label: "m7", intervals: [0, 3, 7, 10] },
    { label: "7", intervals: [0, 4, 7, 10] },
  ]) {
    const tokens = [0, 1, 2, 3].map((inversion) => {
      const voicing = drop2Voicing(key.root, type.intervals, inversion, key);
      return chordToken(voicing.midis, voicing.names, 8, `${key.rootName}${type.label}`);
    });
    add({
      prefix: "voicing",
      title: `Drop 2 · ${type.label} 转位 · ${key.display}`,
      level: "进阶",
      category: "和弦",
      key: key.display,
      meter: "4/4",
      bpm: 48,
      bars: 4,
      focus: ["Drop 2", "转位", "四音和弦"],
      description: `${key.display} 的 ${type.label} Drop 2 四个转位。每个转位一小节；先听低音与最高音，再听中间声部。`,
      abc: abcDoc(`Drop 2 · ${type.label} 转位 · ${key.display}`, "4/4", tokens, key),
      tab: false,
      related: RELATED.voicing,
      steps: ["先只弹最高音与最低音，确认转位。", "加入内声部，保持手型放松。", "用 48 BPM，每个和弦 4 拍。", "把四个转位连到 ii–V–I。"],
    });
  }
}

for (const key of [makeKey(0), makeKey(5), makeKey(7), makeKey(2)]) {
  const tokens = [0, 2, 5, 7].map((offset) => {
    const root = (key.root + offset) % 12;
    const intervals = [0, 5, 10, 15];
    return chordToken(intervals.map((i) => 60 + root + i), spellTones(root, intervals, key, true), 8);
  });
  add({
    prefix: "voicing",
    title: `四度叠置 · ${key.display}`,
    level: "进阶",
    category: "和弦",
    key: key.display,
    meter: "4/4",
    bpm: 50,
    bars: 4,
    focus: ["Quartal", "Modal", "现代和声"],
    description: `${key.display} 的四度叠置和弦，四个小节分别在根音、2、5、7 级上。它听起来开放、模糊，适合 modal 与现代 comping。`,
    abc: abcDoc(`四度叠置 · ${key.display}`, "4/4", tokens, key),
    tab: false,
    related: RELATED.voicing,
  });
}

// ---------------------------------------------------------------------------
// 5. Comping: 24
// ---------------------------------------------------------------------------

const compKeys = [makeKey(0), makeKey(5), makeKey(10), makeKey(3), makeKey(7), makeKey(2)];

function progressionChords(key: Key) {
  const roots = [
    key.root,
    (key.root + key.intervals[5]) % 12,
    (key.root + key.intervals[1]) % 12,
    (key.root + key.intervals[4]) % 12,
  ];
  const quals: ("maj7" | "m7" | "7")[] = ["maj7", "m7", "m7", "7"];
  return roots.map((root, i) => shellChord(root, quals[i], key));
}

const compPatterns: { id: string; title: string; meter: string; level: ExerciseLevel; units: number; make: (chord: { midis: number[]; names: string[]; label: string }) => Token[] }[] = [
  {
    id: "freddie",
    title: "Freddie Green 四拍",
    meter: "4/4",
    level: "入门",
    units: 8,
    make: (chord) => [chordToken(chord.midis, chord.names, 2, chord.label), chordToken(chord.midis, chord.names, 2), chordToken(chord.midis, chord.names, 2), chordToken(chord.midis, chord.names, 2)],
  },
  {
    id: "charleston",
    title: "Charleston 节奏",
    meter: "4/4",
    level: "入门",
    units: 8,
    make: (chord) => [chordToken(chord.midis, chord.names, 2, chord.label), rest(2), chordToken(chord.midis, chord.names, 2), rest(2)],
  },
  {
    id: "bossa",
    title: "Bossa 切分",
    meter: "4/4",
    level: "进阶",
    units: 8,
    make: (chord) => [chordToken(chord.midis, chord.names, 2, chord.label), rest(1), chordToken(chord.midis, chord.names, 1), rest(1), chordToken(chord.midis, chord.names, 2), rest(1)],
  },
  {
    id: "waltz",
    title: "Jazz Waltz",
    meter: "3/4",
    level: "进阶",
    units: 6,
    make: (chord) => [chordToken(chord.midis, chord.names, 2, chord.label), chordToken(chord.midis, chord.names, 2), chordToken(chord.midis, chord.names, 2)],
  },
];

for (const key of compKeys) {
  for (const pattern of compPatterns) {
    const chords = progressionChords(key);
    const tokens = chords.flatMap((chord) => pattern.make(chord));
    add({
      prefix: "comping",
      title: `${pattern.title} · I–vi–ii–V · ${key.display}`,
      level: pattern.level,
      category: "伴奏",
      key: key.display,
      meter: pattern.meter,
      bpm: 80,
      bars: 4,
      focus: ["Comping", "节奏型", "留白"],
      description: `${key.display} 的 I–vi–ii–V，用 ${pattern.title} 伴奏。先只弹 3/7，再加入节奏；目标是支撑，不是表演。`,
      abc: abcDoc(`${pattern.title} · I–vi–ii–V · ${key.display}`, pattern.meter, tokens, key, pattern.units),
      tab: false,
      related: RELATED.comping,
      steps: ["先只听鼓/节拍器，拍手打出节奏型。", "只弹 3/7，确认和声。", "加入根音或 shell voicing。", "跟一首标准曲的录音，尝试同样的节奏。"],
      mistakes: ["每拍都弹满，没有留白。", "音量太大，盖住旋律。", "节奏型从头到尾不变，没有呼应。"],
    });
  }
}

// ---------------------------------------------------------------------------
// 6. Improvisation: 36
// ---------------------------------------------------------------------------

const allKeys = Array.from({ length: 12 }, (_, i) => makeKey(i));

function chordRoot(key: Key, degree: number) {
  return (key.root + key.intervals[degree]) % 12;
}

function lineTokens(rootPc: number, intervals: number[], key: Key): Token[] {
  return intervals.map((interval) => {
    const midi = 60 + rootPc + interval;
    return noteToken(midi, nameForPc(midi % 12, key));
  });
}

for (const key of allKeys) {
  const iiRoot = chordRoot(key, 1);
  const vRoot = chordRoot(key, 4);
  const guide = [
    ...lineTokens(iiRoot, [3, 7, 12, 7, 3, 7, 12, 7], key),
    ...lineTokens(vRoot, [4, 10, 12, 10, 4, 10, 12, 10], key),
    ...lineTokens(key.root, [4, 11, 12, 11, 4, 11, 12, 11], key),
    ...lineTokens(key.root, [7, 4, 12, 11, 7, 4, 12, 7], key),
  ];
  add({
    prefix: "improv",
    title: `Guide Tone Line · ii–V–I · ${key.display}`,
    level: "进阶",
    category: "即兴",
    key: key.display,
    meter: "4/4",
    bpm: 72,
    bars: 4,
    focus: ["Guide Tone", "目标音", "ii–V–I"],
    description: `${key.display} 的 ii–V–I，用 3/7 音构建四小节线条。每个和弦的第一拍尽量落在 3 或 7；先慢速，把和声听清楚。`,
    abc: abcDoc(`Guide Tone Line · ii–V–I · ${key.display}`, "4/4", guide, key),
    tab: true,
    related: RELATED.improv,
    steps: ["先只弹每小节第 1 拍的 3/7。", "加入经过音，保持句子有方向。", "用 72 BPM，录 4 小节。", "移到 3 个新调。"],
    mistakes: ["每个和弦都从根音开始。", "音太多，听不出 3/7。", "节奏全是平均八分，没有呼吸。"],
  });

  const approach = [
    ...lineTokens(iiRoot, [3, 2, 3, 7, 6, 7, 3, 7], key),
    ...lineTokens(vRoot, [4, 3, 4, 10, 9, 10, 4, 10], key),
    ...lineTokens(key.root, [4, 3, 4, 11, 10, 11, 4, 11], key),
    ...lineTokens(key.root, [11, 10, 11, 7, 6, 7, 4, 7], key),
  ];
  add({
    prefix: "improv",
    title: `半音接近 · ii–V–I · ${key.display}`,
    level: "进阶",
    category: "即兴",
    key: key.display,
    meter: "4/4",
    bpm: 66,
    bars: 4,
    focus: ["Approach Note", "半音", "解决"],
    description: `${key.display} 的 ii–V–I，用半音接近 3/7 音。注意接近音只是“方向”，不要把它当成新的和弦音长时间停留。`,
    abc: abcDoc(`半音接近 · ii–V–I · ${key.display}`, "4/4", approach, key),
    tab: true,
    related: RELATED.improv,
  });
}

const bluesPatterns = [
  [0, 3, 5, 6, 7, 10, 7, 5, 3, 0, 3, 5, 6, 7, 10, 7],
  [0, 3, 5, 6, 7, 10, 12, 10, 7, 6, 5, 3, 0, 3, 5, 6],
];

for (const key of [makeKey(0), makeKey(5), makeKey(10), makeKey(3), makeKey(7), makeKey(2)]) {
  bluesPatterns.forEach((pattern, index) => {
    const root = 60 + key.root;
    const names = spellTones(key.root, pattern, key);
    const tokens = pattern.map((interval, i) => noteToken(root + interval, names[i]));
    add({
      prefix: "improv",
      title: `Blues 句型 ${index + 1} · ${key.display}`,
      level: index === 0 ? "进阶" : "高级",
      category: "即兴",
      key: key.display,
      meter: "4/4",
      bpm: 76,
      bars: 2,
      focus: ["Blues", "Motif", "Swing"],
      description: `${key.display} 的两小节 blues 句型。先唱，再弹；然后只保留节奏、换掉几个音，变成自己的句子。`,
      abc: abcDoc(`Blues 句型 ${index + 1} · ${key.display}`, "4/4", tokens, key),
      tab: true,
      related: RELATED.improv,
    });
  });
}

// ---------------------------------------------------------------------------
// 7. Chord melody: 16
// ---------------------------------------------------------------------------

const chordMelodyKeys: { key: Key; quality: "maj7" | "m7" }[] = [
  { key: makeKey(0), quality: "maj7" },
  { key: makeKey(5), quality: "maj7" },
  { key: makeKey(7), quality: "maj7" },
  { key: makeKey(2), quality: "maj7" },
  { key: makeKey(9, "aeolian"), quality: "m7" },
  { key: makeKey(2, "aeolian"), quality: "m7" },
  { key: makeKey(4, "aeolian"), quality: "m7" },
  { key: makeKey(7, "aeolian"), quality: "m7" },
];

for (const { key, quality } of chordMelodyKeys) {
  const shell = shellChord(key.root, quality, key);
  const pool = scalePool(key, 2);
  const patternA: Token[] = [];
  const patternB: Token[] = [];
  for (let bar = 0; bar < 4; bar++) {
    patternA.push(chordToken(shell.midis, shell.names, 2, shell.label));
    for (let i = 0; i < 6; i++) {
      const note = pool[(bar * 3 + i) % pool.length];
      patternA.push(noteToken(note.midi, note.name));
    }
    patternB.push(chordToken(shell.midis, shell.names, 2, shell.label), rest(2));
    for (let i = 0; i < 4; i++) {
      const note = pool[(bar * 4 + i + 2) % pool.length];
      patternB.push(noteToken(note.midi, note.name));
    }
  }
  add({
    prefix: "chord-melody",
    title: `和弦旋律素材 · ${key.display} · 分解`,
    level: "进阶",
    category: "和弦旋律",
    key: key.display,
    meter: "4/4",
    bpm: 56,
    bars: 4,
    focus: ["Chord Melody", "旋律优先", "Shell Voicing"],
    description: `${key.display} 的四小节和弦旋律素材：每小节先放 shell voicing，再让最高声部移动。旋律必须在最上面，和弦只是支撑。`,
    abc: abcDoc(`和弦旋律素材 · ${key.display} · 分解`, "4/4", patternA, key),
    tab: false,
    related: RELATED.chordMelody,
    steps: ["先只弹旋律，能唱。", "加入每小节第 1 拍的和弦。", "保持旋律音清晰，不要被和弦盖住。", "把 4 小节扩展成 8 小节。"],
    mistakes: ["和弦太多，旋律消失。", "低音太厚，声音糊。", "没有节奏，全部 rubato。"],
  });
  add({
    prefix: "chord-melody",
    title: `和弦旋律素材 · ${key.display} · 留白`,
    level: "高级",
    category: "和弦旋律",
    key: key.display,
    meter: "4/4",
    bpm: 50,
    bars: 4,
    focus: ["Chord Melody", "留白", "低音"],
    description: `${key.display} 的四小节留白版：和弦在 1 拍，后面留出空间给旋律。练习“少弹”，让听众听到旋律的呼吸。`,
    abc: abcDoc(`和弦旋律素材 · ${key.display} · 留白`, "4/4", patternB, key),
    tab: false,
    related: RELATED.chordMelody,
  });
}

// ---------------------------------------------------------------------------
// 8. Reading: 16
// ---------------------------------------------------------------------------

const readingPatterns = [
  { name: "四分/八分", durations: [2, 1, 1, 2, 1, 1] },
  { name: "切分", durations: [1, 1, 2, 1, 1, 2] },
];

for (const key of scaleKeys) {
  for (const pattern of readingPatterns) {
    const pool = scalePool(key, 2);
    const tokens: Token[] = [];
    let noteIndex = 0;
    for (let bar = 0; bar < 4; bar++) {
      for (const duration of pattern.durations) {
        const note = pool[noteIndex % 14];
        noteIndex++;
        tokens.push(noteToken(note.midi, note.name, duration));
      }
    }
    add({
      prefix: "reading",
      title: `视奏 · ${key.display} · ${pattern.name}`,
      level: "入门",
      category: "视奏",
      key: key.display,
      meter: "4/4",
      bpm: 60,
      bars: 4,
      focus: ["读谱", "节奏", "音高"],
      description: `${key.display} 的四小节视奏练习，节奏型为 ${pattern.name}。先拍手读节奏，再在琴上找音；不要先看指法。`,
      abc: abcDoc(`视奏 · ${key.display} · ${pattern.name}`, "4/4", tokens, key),
      tab: true,
      related: RELATED.reading,
      steps: ["先拍手读两遍节奏。", "说出调号/临时记号，再找第一个音。", "60 BPM 慢速视奏，不回头改错。", "录下来，检查拍点与音准。"],
      mistakes: ["只看 TAB，不读节奏。", "遇到错音就停，破坏时间。", "不看调号，漏掉升降号。"],
    });
  }
}

// ---------------------------------------------------------------------------
// 9. Forms & etudes: 12
// ---------------------------------------------------------------------------

const bluesKeys = [makeKey(0), makeKey(5), makeKey(10), makeKey(3)];
const bluesDegrees = [0, 3, 0, 0, 3, 3, 0, 0, 4, 3, 0, 4];

for (const key of bluesKeys) {
  const tokens: Token[] = [];
  for (const degree of bluesDegrees) {
    const root = (key.root + key.intervals[degree]) % 12;
    const chord = shellChord(root, "7", key);
    tokens.push(chordToken(chord.midis, chord.names, 2, chord.label), chordToken(chord.midis, chord.names, 2), chordToken(chord.midis, chord.names, 2), chordToken(chord.midis, chord.names, 2));
  }
  add({
    prefix: "form",
    title: `12-bar Jazz Blues comping · ${key.display}`,
    level: "进阶",
    category: "曲式",
    key: key.display,
    meter: "4/4",
    bpm: 80,
    bars: 12,
    focus: ["12-bar Blues", "Comping", "曲式"],
    description: `${key.display} 的 12 小节 jazz blues 和声骨架，用 shell voicing 每拍一下。先慢速走完整曲式，再尝试 Charleston 与留白。`,
    abc: abcDoc(`12-bar Jazz Blues comping · ${key.display}`, "4/4", tokens, key),
    tab: false,
    related: RELATED.form,
    steps: ["先只弹每小节第 1 拍，数 12 小节。", "加入第 3 拍/切分。", "跟 blues backing track 走 3 遍。", "录一遍，检查第 9–10 小节。"],
    mistakes: ["只记和弦，不数小节。", "第 9 小节 V7 忘记。", "每拍都重音，没有 groove。"],
  });
}

const rhythmKeys = [makeKey(0), makeKey(5), makeKey(10), makeKey(3)];
for (const key of rhythmKeys) {
  const chords = progressionChords(key);
  const tokens = [...chords, ...chords].flatMap((chord) => [
    chordToken(chord.midis, chord.names, 2, chord.label),
    rest(2),
    chordToken(chord.midis, chord.names, 2),
    rest(2),
  ]);
  add({
    prefix: "form",
    title: `Rhythm Changes A 段和声 · ${key.display}`,
    level: "高级",
    category: "曲式",
    key: key.display,
    meter: "4/4",
    bpm: 88,
    bars: 8,
    focus: ["Rhythm Changes", "I–vi–ii–V", "曲式"],
    description: `${key.display} 的 Rhythm Changes A 段和声循环（I–vi–ii–V 两遍）。这是和声/节奏练习，不是原曲旋律；先能连续走 8 小节，再谈 solo。`,
    abc: abcDoc(`Rhythm Changes A 段和声 · ${key.display}`, "4/4", tokens, key),
    tab: false,
    related: RELATED.form,
  });
}

for (const key of [makeKey(0), makeKey(5)]) {
  const chords = progressionChords(key);
  const tokens = chords.flatMap((chord) => [
    chordToken(chord.midis, chord.names, 2, chord.label),
    rest(1),
    chordToken(chord.midis, chord.names, 1),
    rest(1),
    chordToken(chord.midis, chord.names, 2),
    rest(1),
  ]);
  add({
    prefix: "form",
    title: `Bossa comping · ${key.display}`,
    level: "进阶",
    category: "曲式",
    key: key.display,
    meter: "4/4",
    bpm: 76,
    bars: 4,
    focus: ["Bossa", "切分", "轻触"],
    description: `${key.display} 的 I–vi–ii–V bossa comping。右手保持轻，低音与和弦分离；不要把 bossa 弹成 swing。`,
    abc: abcDoc(`Bossa comping · ${key.display}`, "4/4", tokens, key),
    tab: false,
    related: RELATED.comping,
  });
}

for (const key of [makeKey(2, "dorian"), makeKey(7, "dorian")]) {
  const chord = shellChord(key.root, "m7", key);
  const tokens = [0, 1, 2, 3].map((bar) => chordToken(chord.midis, chord.names, 8, bar === 0 ? chord.label : undefined));
  add({
    prefix: "form",
    title: `Modal Vamp · ${key.display}`,
    level: "高级",
    category: "曲式",
    key: key.display,
    meter: "4/4",
    bpm: 70,
    bars: 4,
    focus: ["Modal", "Vamp", "空间"],
    description: `${key.display} 的 modal vamp，用 m7 shell 四小节循环。Modal 的重点不是换和弦，而是在同一和声上做节奏、音区与密度变化。`,
    abc: abcDoc(`Modal Vamp · ${key.display}`, "4/4", tokens, key),
    tab: false,
    related: RELATED.form,
  });
}

// ---------------------------------------------------------------------------
// 10. Export
// ---------------------------------------------------------------------------

export const LIBRARY = exercises;

export const LIBRARY_LEVELS: ExerciseLevel[] = ["入门", "进阶", "高级"];

export const LIBRARY_CATEGORIES: ExerciseCategory[] = ["热身", "音阶", "琶音", "和弦", "伴奏", "即兴", "和弦旋律", "视奏", "曲式"];

export const LIBRARY_STATS = {
  total: exercises.length,
  byLevel: Object.fromEntries(LIBRARY_LEVELS.map((level) => [level, exercises.filter((e) => e.level === level).length])),
  byCategory: Object.fromEntries(LIBRARY_CATEGORIES.map((category) => [category, exercises.filter((e) => e.category === category).length])),
};

export function getExercise(slug: string): Exercise | undefined {
  return exercises.find((exercise) => exercise.id === slug);
}

export function exerciseNeighbors(slug: string) {
  const index = exercises.findIndex((exercise) => exercise.id === slug);
  return {
    prev: index > 0 ? exercises[index - 1] : null,
    next: index >= 0 && index < exercises.length - 1 ? exercises[index + 1] : null,
  };
}

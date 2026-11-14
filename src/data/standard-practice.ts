import type { Standard } from "./standards";
import { PROGRESSIONS, type ProgressionId } from "../lib/standard-patterns";

export type PracticeFeel = "swing" | "bossa" | "ballad" | "modal";

export type StandardPractice = {
  keyPc: number;
  keyLabel: string;
  isMinor: boolean;
  preferFlats: boolean;
  tempo: number;
  meter: 3 | 4;
  feel: PracticeFeel;
  progression: ProgressionId;
  progressionLabel: string;
  progressionDescription: string;
  bars: number;
};

const NOTE_PCS: Record<string, number> = { C: 0, D: 2, E: 4, F: 5, G: 7, A: 9, B: 11 };
const FLAT_MAJOR = new Set([1, 3, 5, 6, 8, 10]);
const FLAT_MINOR = new Set([0, 2, 3, 5, 7, 8, 10]);

function parseKey(tune: Standard): { keyPc: number; isMinor: boolean } {
  if (tune.id === "maiden-voyage") return { keyPc: 2, isMinor: false };
  const match = tune.key.match(/([A-G])([♭b♯#]?)/);
  if (!match) return { keyPc: 0, isMinor: false };
  const letter = match[1];
  const accidental = match[2] === "♭" || match[2] === "b" ? -1 : match[2] === "♯" || match[2] === "#" ? 1 : 0;
  return {
    keyPc: (NOTE_PCS[letter] + accidental + 12) % 12,
    isMinor: /minor|小调/i.test(tune.key),
  };
}

const TEMPO_OVERRIDES: Record<string, number> = {
  "autumn-leaves": 120,
  "blue-bossa": 130,
  summertime: 72,
  "all-of-me": 116,
  "fly-me-to-the-moon": 116,
  "satin-doll": 120,
  "take-the-a-train": 124,
  "blue-monk": 100,
  "bags-groove": 104,
  "c-jam-blues": 108,
  "straight-no-chaser": 120,
  "mr-pc": 112,
  "all-the-things": 120,
  stella: 76,
  "there-will-never": 132,
  "green-dolphin": 130,
  "miss-jones": 132,
  "just-friends": 132,
  yesterdays: 76,
  softly: 126,
  solar: 132,
  four: 148,
  "tune-up": 140,
  misty: 72,
  ipanema: 128,
  wave: 124,
  corcovado: 108,
  "black-orpheus": 112,
  "body-and-soul": 66,
  "round-midnight": 62,
  oleo: 168,
  confirmation: 156,
  "donna-lee": 148,
  cherokee: 160,
  "giant-steps": 140,
  nardis: 112,
  "maiden-voyage": 112,
  "so-what": 120,
  moanin: 120,
  footprints: 120,
};

function baseTempo(tune: Standard): number {
  if (tune.category === "Ballad") return 68;
  if (tune.category === "Bossa / Latin") return 108;
  if (tune.category === "Blues") return 104;
  if (tune.category === "Bebop") return tune.level === "高级" ? 148 : 132;
  if (tune.category === "Rhythm Changes") return 160;
  if (tune.category === "Modal / Modern") return 112;
  return 116;
}

function progressionFor(tune: Standard, isMinor: boolean): ProgressionId {
  if (tune.id === "oleo") return "rhythm";
  if (tune.id === "giant-steps") return "bebop";
  if (tune.category === "Blues") return isMinor ? "minor-blues" : "blues";
  if (tune.category === "Rhythm Changes") return "rhythm";
  if (isMinor) {
    if (tune.id === "so-what") return "modal-dorian";
    if (tune.category === "Modal / Modern" && tune.id === "maiden-voyage") return "modal-sus";
    return "minor";
  }
  if (tune.category === "Bossa / Latin") return "bossa";
  if (tune.category === "Ballad") return "i-vi-ii-v";
  if (tune.category === "Modal / Modern") {
    if (tune.id === "maiden-voyage") return "modal-sus";
    return "modal-dorian";
  }
  if (tune.category === "Bebop") return "bebop";
  return "i-vi-ii-v";
}

function feelFor(tune: Standard): PracticeFeel {
  if (tune.id === "giant-steps") return "swing";
  if (tune.category === "Bossa / Latin") return "bossa";
  if (tune.category === "Ballad") return "ballad";
  if (tune.category === "Modal / Modern") return "modal";
  return "swing";
}

export function standardPractice(tune: Standard): StandardPractice {
  const { keyPc, isMinor } = parseKey(tune);
  const progression = progressionFor(tune, isMinor);
  const meta = PROGRESSIONS[progression];
  const preferFlats = isMinor ? FLAT_MINOR.has(keyPc) : FLAT_MAJOR.has(keyPc);
  return {
    keyPc,
    keyLabel: tune.key.replace(/（常见）/g, "").trim(),
    isMinor,
    preferFlats,
    tempo: TEMPO_OVERRIDES[tune.id] ?? baseTempo(tune),
    meter: tune.form.includes("3/4") ? 3 : 4,
    feel: feelFor(tune),
    progression,
    progressionLabel: meta.label,
    progressionDescription: meta.description,
    bars: meta.bars.length,
  };
}

export function feelLabel(feel: PracticeFeel): string {
  switch (feel) {
    case "bossa":
      return "Bossa";
    case "ballad":
      return "Ballad";
    case "modal":
      return "Modal";
    default:
      return "Swing";
  }
}

export function standardSteps(tune: Standard, practice: StandardPractice): string[] {
  const practiceTempo = Math.round(practice.tempo * 0.6);
  const comping =
    practice.feel === "bossa"
      ? "右手保持轻，低音与和弦分开，先把 2 & 4 的感觉弹出来。"
      : practice.feel === "ballad"
        ? "用长音与留白，不要每个和弦都弹满；先听旋律的空间。"
        : practice.feel === "modal"
          ? "同一和声上做密度、音区与节奏变化，不要靠换和弦制造变化。"
          : "2 & 4 为重音，先用 shell voicing，每小节只弹 2–3 下。";
  return [
    `先听 2–3 个版本，唱熟主题；不要先看谱或 TAB。`,
    `把练习循环设到 ${practiceTempo} BPM，只弹根音与 3/7，走 ${practice.bars} 小节两遍，确认不迷路。`,
    `回到 ${practice.tempo} BPM，用 ${feelLabel(practice.feel)} 弹 comping：${comping}`,
    `Solo 两个 chorus：第一个只用一个动机，第二个再加入 ${tune.focus[0]}；每个乐句后留 1–2 拍。`,
    `录音回听：只改一个最明显的问题（时间、音准、句子方向或音量）。`,
    `把循环移到 2 个新调；确认你能说出每个 4 小节的目标和弦，而不是背形状。`,
  ];
}

export function standardMistakes(tune: Standard, practice: StandardPractice): string[] {
  const mistakes = [
    "一上来就按原曲速度；先用 60% 速度把曲式与声部连接弹清楚。",
    "只背 chord symbol，不知道功能；先把每个 4 小节标成 ii–V–I、转调或 pedal。",
    "comping 每拍都弹满，没有留白；伴奏首先要让别人听得舒服。",
    "solo 没有目标音，句子没有方向；先唱一个动机，再上琴。",
    "只练 A 段，不练 bridge / 转调；jam 时最容易在这里迷路。",
  ];
  if (tune.level === "高级") {
    mistakes.push("只追求速度；慢速下听不清和声与节奏，快起来只会更乱。");
  }
  if (practice.feel === "bossa") {
    mistakes.push("把 bossa 弹成 swing；低音与和弦要分离，右手不要过重。");
  }
  if (practice.meter === 3) {
    mistakes.push("3/4 里按 4/4 的句子呼吸；先数 1-2-3，再谈乐句。");
  }
  return mistakes;
}

export function harmonicMap(tune: Standard, practice: StandardPractice): string[] {
  const common = [
    `曲式：${tune.form}；调性：${tune.key}。先按 4 或 8 小节切块，每块只记一个目标。`,
    `练习循环：${practice.progressionLabel}（${practice.bars} 小节）——${practice.progressionDescription}`,
  ];
  const byCategory: Record<Standard["category"], string[]> = {
    "入门标准": [
      "先找 I–vi–ii–V 与 ii–V–I；把根音移动与 3/7 音的解决弹清楚。",
      "A 段通常可以先用一个 4 小节 loop 练熟，再把同样逻辑带到全曲。",
    ],
    Blues: [
      "12 小节里先数清 I–IV–V；第 9 小节回到 V，turnaround 决定下一 chorus。",
      "先弹根音/3/7，再加 Charleston 或 shuffle；不要一开始就弹满。",
    ],
    "Bossa / Latin": [
      "以 I–vi–ii–V 为核心，低音与和弦分离；右手保持轻，切分要稳定。",
      "先把 bass line 唱出来，再让和弦落在正确的拍子上。",
    ],
    Ballad: [
      "慢速下先听旋律的长音与呼吸；和弦是支撑，不是主角。",
      "先只弹每小节第 1 拍，再加入经过和弦与 reharmonization。",
    ],
    Bebop: [
      "先标出每个 ii–V–I 的目标音；用 guide tone 连接，不要每个和弦都从根音开始。",
      "句子要有上行/下行方向；半音接近与包围音只是装饰，不要停留。",
    ],
    "Modal / Modern": [
      "和声变化少，重点在 pedal、音区、密度与动机发展；不要靠堆和弦。",
      "先在一个把位弹 2 个 chorus，再用四度叠置、三全音或 upper structure 做色彩。",
    ],
    "Rhythm Changes": [
      "A 段是 I–vi–ii–V 循环；先练 8 小节，再把同样逻辑接成 32 小节。",
      "B 段是属和弦循环；先只弹根音与 3/7，确认每个目标和弦。",
    ],
  };
  return [...common, ...byCategory[tune.category], `本曲重点：${tune.focus.join("、")}。`];
}

const RELATED: Record<Standard["category"], { label: string; href: string }[]> = {
  "入门标准": [
    { label: "Shell Voicing · ii–V–I", href: "/library/voicing-001/" },
    { label: "Freddie Green 四拍 comping", href: "/library/comping-001/" },
    { label: "Guide Tone Line · ii–V–I", href: "/library/improv-001/" },
  ],
  Blues: [
    { label: "12-bar Jazz Blues comping", href: "/library/form-001/" },
    { label: "Blues 句型 1", href: "/library/improv-025/" },
    { label: "Freddie Green 四拍 comping", href: "/library/comping-001/" },
  ],
  "Bossa / Latin": [
    { label: "Bossa 切分 comping", href: "/library/comping-003/" },
    { label: "Bossa comping 曲式", href: "/library/form-009/" },
    { label: "和弦旋律素材 · 分解", href: "/library/chord-melody-001/" },
  ],
  Ballad: [
    { label: "和弦旋律素材 · 留白", href: "/library/chord-melody-002/" },
    { label: "Shell Voicing · ii–V–I", href: "/library/voicing-001/" },
    { label: "大调音阶与三度模进", href: "/library/scale-001/" },
  ],
  Bebop: [
    { label: "Guide Tone Line · ii–V–I", href: "/library/improv-001/" },
    { label: "maj7 琶音", href: "/library/arpeggio-001/" },
    { label: "半音接近 · ii–V–I", href: "/library/improv-002/" },
  ],
  "Modal / Modern": [
    { label: "Modal Vamp · D Dorian", href: "/library/form-011/" },
    { label: "Dorian 调式音阶", href: "/library/scale-017/" },
    { label: "m7 琶音", href: "/library/arpeggio-005/" },
  ],
  "Rhythm Changes": [
    { label: "Rhythm Changes A 段和声", href: "/library/form-005/" },
    { label: "Guide Tone Line · ii–V–I", href: "/library/improv-001/" },
    { label: "Freddie Green 四拍 comping", href: "/library/comping-001/" },
  ],
};

export function standardRelated(tune: Standard): { label: string; href: string }[] {
  return RELATED[tune.category];
}

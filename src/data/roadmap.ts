export type Task = {
  id: string;
  label: string;
  note?: string;
};

export type Phase = {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  duration: string;
  goal: string;
  description: string;
  focus: string[];
  tunes: string[];
  checkpoint: string[];
  resourceIds: string[];
  tasks: Task[];
};

export const PHASES: Phase[] = [
  {
    id: "phase-1",
    number: "01",
    title: "建立语法",
    subtitle: "先把“能发声、能跟拍、能弹完一首”做出来",
    duration: "第 1–3 个月 / Week 1–12",
    goal: "能用一个稳定的 swing 感觉弹完 3 首标准曲，并做简单 solo。",
    description:
      "这个阶段不追求速度、复杂和声或大量曲目。你只需要建立三件事：正确且放松的发声、稳定的时间感、以及一套能用的三音和弦。所有练习都要落到曲子里。",
    focus: ["姿势与拨弦", "Swing 八分音符", "Shell Voicing", "12-bar Blues", "3 首标准曲", "录音复盘"],
    tunes: ["Autumn Leaves", "Blue Bossa", "Summertime", "C Jam Blues"],
    resourceIds: ["v-order", "v-basic-chords", "v-swing", "v-autumn-full"],
    checkpoint: [
      "节拍器 2 & 4 上，能稳定弹 8 小节 quarter-note comping",
      "能不看谱弹 Autumn Leaves 的旋律与和弦",
      "能在 F blues 上 comp 并 solo 两个 chorus",
      "能说出 guide tone、tension、avoid note 的基本区别",
    ],
    tasks: [
      { id: "p1-1", label: "每天 5 分钟节拍器：只踩 2 & 4，弹单音或简单 comping", note: "目标 60–100 BPM 稳定，不追速度。" },
      { id: "p1-2", label: "掌握 5 类七和弦的 Shell Voicing：maj7 / m7 / 7 / m7♭5 / dim7", note: "根音在 6 弦与 5 弦各一套。" },
      { id: "p1-3", label: "C 大调五个把位，能说出每个把位的根音位置", note: "先 C，再 F、B♭、E♭。" },
      { id: "p1-4", label: "在 12 个调上找到 ii–V–I 的根音与 guide tone", note: "慢速、用说的，不一定要弹快。" },
      { id: "p1-5", label: "Autumn Leaves：旋律 + 和弦，能不看谱完整弹一遍", note: "先 G minor，再试 E minor。" },
      { id: "p1-6", label: "Blue Bossa：旋律 + 和弦 + 基本 bossa comping", note: "重点是 16 小节曲式与转调。" },
      { id: "p1-7", label: "Summertime：旋律 + 简单 chord melody", note: "只用一个把位也可以，旋律必须清楚。" },
      { id: "p1-8", label: "F jazz blues：能 comp，并用 chord tones / blues scale solo 两个 chorus", note: "先慢速，句子之间要呼吸。" },
      { id: "p1-9", label: "用三音 Shell Voicing 给一首标准曲伴奏，不用根音也可以", note: "与贝斯手合作时的关键技能。" },
      { id: "p1-10", label: "每周录一次 1 分钟演奏，回听并写一句具体改进", note: "录音比“感觉”诚实。" },
      { id: "p1-11", label: "能解释什么是 guide tone、tension、avoid note", note: "用自己的话写下来。" },
      { id: "p1-12", label: "完成一次 30 分钟完整练习，并记录时间分配", note: "建立可持续的日常节奏。" },
    ],
  },
  {
    id: "phase-2",
    number: "02",
    title: "扩展词汇",
    subtitle: "从“能弹”到“有话说”",
    duration: "第 4–6 个月 / Week 13–26",
    goal: "能在 5 首标准曲上，用和弦音、琶音与简单 approach notes 构建有方向的 solo。",
    description:
      "你已经有基本的曲目与和弦。现在开始把“音”组织成“句子”：和弦音、琶音、guide tone、approach note、motif。这个阶段的重点是质量，不是数量。",
    focus: ["Chord Tones", "Arpeggios", "Approach Notes", "Drop 2", "Comping 节奏", "Transcription"],
    tunes: ["There Will Never Be Another You", "All the Things You Are", "Stella by Starlight", "Softly, as in a Morning Sunrise", "Tune Up"],
    resourceIds: ["v-ii-v-i", "v-chord-tones", "v-drop2", "v-ear-training"],
    checkpoint: [
      "能在 ii–V–I 上只用和弦音 solo，不依赖音阶",
      "Drop 2 能在四组弦上连接 ii–V–I",
      "能听辨并唱出简单的 ii–V–I 进行",
      "完成 8–16 小节 solo 的转录，并能唱再弹",
    ],
    tasks: [
      { id: "p2-1", label: "大七 / 小七 / 属七 / 半减 / 减七琶音，每个至少 3 个把位", note: "从根音在 6 弦与 5 弦开始。" },
      { id: "p2-2", label: "用 chord tones 在 ii–V–I 上 solo，目标音落在 3 音或 7 音", note: "不要跑音阶填充。" },
      { id: "p2-3", label: "掌握 3 种 approach note：半音接近、音阶接近、包围音", note: "每种在 3 个调上练。" },
      { id: "p2-4", label: "Drop 2 四组弦，能在 ii–V–I 上做声部连接", note: "先只有 3 音或 7 音移动。" },
      { id: "p2-5", label: "5 种 swing comping 节奏型，能在标准曲上切换", note: "Charleston、push、anticipation 等。" },
      { id: "p2-6", label: "Bossa Nova 基本 pattern，能弹 2 首 bossa", note: "Blue Bossa + Girl from Ipanema 或 Corcovado。" },
      { id: "p2-7", label: "学 5 首新标准曲：能背旋律 + 和弦", note: "每首至少能跟 backing track 完整走两遍。" },
      { id: "p2-8", label: "转录 8–16 小节 solo：先唱，再在琴上找，再写下来", note: "不要一上来就看谱。" },
      { id: "p2-9", label: "Rhythm Changes A 段：能 comp + 简单 solo", note: "先 B♭，再 F。" },
      { id: "p2-10", label: "每周一次 10 分钟“只发展一个动机”的练习", note: "重复、移位、倒影、节奏变形。" },
      { id: "p2-11", label: "对比第 1 个月与现在的录音，写下 3 个进步与 1 个问题", note: "客观评估。" },
      { id: "p2-12", label: "建立“错误本”：记录每次卡住的具体位置", note: "具体到小节和和弦。" },
    ],
  },
  {
    id: "phase-3",
    number: "03",
    title: "标准曲与语言",
    subtitle: "把词汇放进真实曲目，开始和别人玩",
    duration: "第 7–9 个月 / Week 27–39",
    goal: "拥有 10 首能 jam 的曲目，能听懂常见曲式，并完成 2 首 chord melody。",
    description:
      "从“练习模式”切换到“音乐模式”。你会开始积累 bebop 语言、旋律小调与减音阶，但更重要的是：在标准曲里把它们用出来，并开始与人合奏。",
    focus: ["Bebop 语言", "Melodic Minor", "Diminished", "Chord Melody", "10 首曲目", "Jam"],
    tunes: ["All the Things You Are", "Stella by Starlight", "Body and Soul", "Oleo", "Misty", "Wave", "Solar", "Four"],
    resourceIds: ["v-learn-standard", "v-jazz-blues", "v-autumn-chord-melody", "v-joe-pass"],
    checkpoint: [
      "10 首标准曲能背旋律与和弦，并跟别人合奏",
      "能在 5 个调上弹 ii–V–I 句子",
      "能完成 2 首 chord melody 的完整编配",
      "至少参加一次 jam 或合奏",
    ],
    tasks: [
      { id: "p3-1", label: "10 首标准曲：旋律 + 和弦 + 简单 solo，能不看谱", note: "从第一阶段与第二阶段曲目里选。" },
      { id: "p3-2", label: "在 5 个调上弹 ii–V–I 句子，每个调至少 3 条", note: "不要只在一个把位。" },
      { id: "p3-3", label: "旋律小调 3 个常用模式：Altered、Lydian Dominant、Locrian ♯2", note: "先用在属七与半减和弦上。" },
      { id: "p3-4", label: "减音阶：whole-half 在 dim7，half-whole 在 7♭9", note: "用一个形状开始，不要贪多。" },
      { id: "p3-5", label: "10 条 bebop 句型，能在 3 首不同曲子上使用", note: "每条至少移 3 个调。" },
      { id: "p3-6", label: "2 首 chord melody 完整编配：Autumn Leaves + Misty 或 Body and Soul", note: "旋律必须在最上面。" },
      { id: "p3-7", label: "参加一次 jam、开放麦或与朋友合奏", note: "哪怕只弹一首。" },
      { id: "p3-8", label: "转录一个完整 12-bar blues solo", note: "选你能唱下来的，不要选最快的。" },
      { id: "p3-9", label: "能听辨 ii–V–I、Blues、Rhythm Changes 三种曲式", note: "用真实录音练。" },
      { id: "p3-10", label: "建立 20 首曲目清单：能 jam / 正在学 / 想学", note: "每季度更新。" },
      { id: "p3-11", label: "设计一套 20 分钟 warm-up，能每天独立完成", note: "包含技术、音阶、和弦、听力。" },
      { id: "p3-12", label: "录一首完整标准曲（旋律 + 2 chorus solo + 结尾）", note: "作为阶段性成果。" },
    ],
  },
  {
    id: "phase-4",
    number: "04",
    title: "上台与个人风格",
    subtitle: "从“会弹”到“有自己的声音”",
    duration: "第 10–12 个月 / Week 40–52",
    goal: "完成一套 30 分钟曲目、录制 3–5 首 demo，并明确下一步方向。",
    description:
      "最后一个阶段不是“学更多”，而是“整合”。你要把曲目、音色、即兴、编配与舞台经验整合成一个可演出的状态，并开始有意识地选择自己的语言。",
    focus: ["Repertoire", "Performance", "Recording", "Personal Voice", "Teaching", "Next Plan"],
    tunes: ["自选 15–20 首", "3 首 chord melody", "1 套 30 分钟 set"],
    resourceIds: ["v-practice-daily", "v-bossa", "v-walking-bass", "v-wes-licks"],
    checkpoint: [
      "15–20 首曲目能随时 jam",
      "3 首 chord melody 能完整演奏",
      "完成 3–5 首 demo 录音",
      "参加 2 次 jam 或演出",
    ],
    tasks: [
      { id: "p4-1", label: "15–20 首曲目能随时 jam，不需要谱", note: "按“能演奏 / 正在维护 / 想学”分类。" },
      { id: "p4-2", label: "3 首 chord melody 能完整演奏并处理开头结尾", note: "至少一首 ballad、一首 swing、一首 bossa。" },
      { id: "p4-3", label: "设计一套 30 分钟 solo/duo 曲目", note: "注意调性、速度、情绪的起伏。" },
      { id: "p4-4", label: "录制 3–5 首 demo：至少一首完整标准曲", note: "手机录音也可以，重点是完整。" },
      { id: "p4-5", label: "参加 2 次 jam 或演出，每次录下来复盘", note: "记录观众/乐手反馈。" },
      { id: "p4-6", label: "分析 3 位最喜欢的吉他手：我具体借鉴什么", note: "音色、节奏、和声、句子、态度。" },
      { id: "p4-7", label: "设计自己的 warm-up 与 60 分钟练习菜单", note: "能长期坚持，不依赖外部课程。" },
      { id: "p4-8", label: "教别人一个概念：写成笔记、视频或给朋友讲", note: "教是最好的学。" },
      { id: "p4-9", label: "复盘 12 个月：保留什么、删掉什么、下一步学什么", note: "写一页纸。" },
      { id: "p4-10", label: "制定下一个 12 个月计划", note: "方向：传统、现代、fusion、独奏、作曲、教学……" },
    ],
  },
];

export const FIRST_12_WEEKS = [
  {
    week: "W01",
    focus: "设备、姿势、音色；节拍器 2 & 4；C 大调五个把位；七和弦类型",
    tune: "Autumn Leaves 旋律",
    checkpoint: "能放松地弹 8 小节 quarter-note comping，节拍器 60–80 BPM",
  },
  {
    week: "W02",
    focus: "Shell Voicings；C 大调 ii–V–I；Freddie Green 四拍",
    tune: "Autumn Leaves 和弦",
    checkpoint: "能只用 3 个音给 Autumn Leaves 伴奏",
  },
  {
    week: "W03",
    focus: "Guide tones；和弦音 solo；F jazz blues comping",
    tune: "Autumn Leaves + C Jam Blues",
    checkpoint: "能在 F blues 上 comp 一个 chorus",
  },
  {
    week: "W04",
    focus: "Blues scale；jazz blues 语言；录音复盘",
    tune: "C Jam Blues / Blue Monk",
    checkpoint: "录一首 1 分钟 blues，写下 1 个改进点",
  },
  {
    week: "W05",
    focus: "Bossa Nova 基本 pattern；小调 ii–V；16 小节曲式",
    tune: "Blue Bossa",
    checkpoint: "能跟 backing track 完整弹 Blue Bossa 两遍",
  },
  {
    week: "W06",
    focus: "Chord melody 基础：旋律在最高声部；动态与空间",
    tune: "Summertime",
    checkpoint: "能弹一段简单 chord melody，旋律清楚",
  },
  {
    week: "W07",
    focus: "Rhythm Changes A 段；I–vi–ii–V；8 小节转录",
    tune: "Oleo（只 A 段）",
    checkpoint: "能唱出并弹出一段 8 小节 solo",
  },
  {
    week: "W08",
    focus: "复习与整合：3 首曲子 + 录音；评估节奏、和声、句子",
    tune: "Autumn Leaves / Blue Bossa / Summertime",
    checkpoint: "完成 3 分钟录音，列出 3 个强项与 3 个问题",
  },
  {
    week: "W09",
    focus: "Key centers；Guide tone 连接；All the Things A 段",
    tune: "All the Things You Are",
    checkpoint: "能说出 A 段的调性中心",
  },
  {
    week: "W10",
    focus: "Medium swing；五个把位琶音；There Will Never Be Another You",
    tune: "There Will Never Be Another You",
    checkpoint: "能在两个把位弹主题 + 简单 solo",
  },
  {
    week: "W11",
    focus: "Minor / modal；Drop 2 入门；Stella 或 Softly",
    tune: "Softly, as in a Morning Sunrise",
    checkpoint: "能在一个把位连接小调 ii–V–i",
  },
  {
    week: "W12",
    focus: "阶段复盘；录 3 首曲子；制定下一个 3 个月计划",
    tune: "自选 3 首",
    checkpoint: "完成 5 分钟录音 + 一页复盘",
  },
];

export type Routine = {
  minutes: number;
  label: string;
  description: string;
  blocks: { name: string; minutes: number; detail: string }[];
};

export const ROUTINES: Routine[] = [
  {
    minutes: 30,
    label: "最低有效剂量",
    description: "上班族/学生党的日常保底。每天固定 30 分钟，比周末突击 3 小时更有效。",
    blocks: [
      { name: "热身 / 技术", minutes: 5, detail: "chromatic、音阶一个把位、右手放松" },
      { name: "和弦 / 伴奏", minutes: 10, detail: "shell voicing + 一首曲子的 comping" },
      { name: "曲目", minutes: 10, detail: "旋律、和弦、solo 各一遍" },
      { name: "耳朵 / 转录", minutes: 5, detail: "唱一段、找音、模唱" },
    ],
  },
  {
    minutes: 60,
    label: "标准练习日",
    description: "适合大多数进阶阶段。每个块都要有明确目标，不要“随便弹弹”。",
    blocks: [
      { name: "技术 / 音阶", minutes: 10, detail: "琶音、音阶、交替拨弦、节拍器" },
      { name: "和声 / Voicing", minutes: 15, detail: "drop 2、guide tone、ii–V–I 连接" },
      { name: "即兴", minutes: 15, detail: "一个动机、一个曲目、限制音数" },
      { name: "曲目", minutes: 15, detail: "完整走形式、录音、修正" },
      { name: "耳朵", minutes: 5, detail: "转录 2–4 小节或听辨和弦" },
    ],
  },
  {
    minutes: 90,
    label: "深度练习",
    description: "周末或休息日。注意分段休息，避免手指和注意力疲劳。",
    blocks: [
      { name: "热身", minutes: 10, detail: "慢速、放松、呼吸" },
      { name: "技术", minutes: 15, detail: "音阶/琶音/技巧专项" },
      { name: "和声", minutes: 20, detail: "voicing、声部连接、chord melody" },
      { name: "即兴", minutes: 20, detail: "限制练习、录音、对比" },
      { name: "曲目", minutes: 20, detail: "完整形式 + 演出模拟" },
      { name: "耳朵 / 转录", minutes: 5, detail: "短而专注" },
    ],
  },
];

export const PRINCIPLES = [
  {
    title: "每天一点，而不是偶尔很多",
    body: "15 分钟每天，比周末 3 小时更容易形成运动记忆。把琴放在看得见的地方，先弹 5 分钟再说。",
  },
  {
    title: "一次只解决一个问题",
    body: "“今天把 Autumn Leaves 的桥段弹顺”比“今天要练好即兴”有效得多。目标要具体到小节、和弦、速度。",
  },
  {
    title: "慢到能控制，再加速",
    body: "节拍器不是用来证明你有多快，而是用来暴露你在哪里不稳。能在 60 BPM 弹干净，才有资格谈 120。",
  },
  {
    title: "录音，然后只挑一个问题",
    body: "录音会告诉你真相，但不要一次改十个地方。每次只选一个最影响音乐性的点。",
  },
  {
    title: "80% 的时间在音乐里",
    body: "音阶和琶音是工具，不是目的。把今天练的东西立刻放进一首曲子里，否则它不会留下来。",
  },
  {
    title: "不要用收集资料代替练习",
    body: "收藏 100 个视频，不如把 1 个视频里的 1 个概念练 1 周。信息不是进步，行动才是。",
  },
];

export const SITE = {
  title: "Jazz Guitar Guide",
  titleZh: "爵士吉他学习手册",
  description:
    "一份写给自学者的爵士吉他中文指南：从零开始的基础知识、12 个月路线图、免费课程、必学曲目、大师与教材，以及可直接使用的练习工具箱。",
  url: "https://lulgabc.github.io/JazzGuitarGuide",
  repo: "https://github.com/lulgabc/JazzGuitarGuide",
  author: "lulgabc",
  lang: "zh-CN",
};

export type NavItem = {
  href: string;
  label: string;
  short?: string;
  description?: string;
};

export const NAV: NavItem[] = [
  { href: "/", label: "首页", short: "首页" },
  { href: "/basics/", label: "入门知识", short: "入门", description: "乐器、节奏、和声、音阶、指板、即兴、伴奏与练习方法" },
  { href: "/roadmap/", label: "学习路线图", short: "路线图", description: "从第 1 周到第 52 周，每个阶段练什么、练到什么程度" },
  { href: "/courses/", label: "免费课程", short: "免费课", description: "精选 YouTube 频道、单课、免费网站与中文资源" },
  { href: "/standards/", label: "必学曲目", short: "曲目", description: "40 首标准曲，按难度、曲式与练习重点整理" },
  { href: "/library/", label: "练习乐谱库", short: "乐谱", description: "228 首原创练习乐谱，含五线谱、TAB（单音）与练习说明" },
  { href: "/players/", label: "吉他大师", short: "大师", description: "从 Django 到 Julian Lage，按年代与风格认识爵士吉他" },
  { href: "/books/", label: "教材书单", short: "书单", description: "方法书、和声、即兴、转录、历史与传记" },
  { href: "/guitars/", label: "选琴指南", short: "选琴", description: "入门、进阶、演出三个等级的爵士吉他型号与法国市场参考价" },
  { href: "/tools/", label: "练习工具箱", short: "工具箱", description: "指板、节拍器、伴奏、计时器与听音测验" },
];

export type Chapter = {
  slug: string;
  number: string;
  title: string;
  short: string;
  description: string;
  minutes: number;
  level: string;
};

export const CHAPTERS: Chapter[] = [
  {
    slug: "foundations",
    number: "01",
    title: "乐器、声音与身体",
    short: "乐器与声音",
    description: "爵士吉他的角色、琴型、音色、姿势、拨弦与设备，先把“发声”这件事弄对。",
    minutes: 18,
    level: "入门",
  },
  {
    slug: "rhythm",
    number: "02",
    title: "节奏与 Swing",
    short: "节奏与 Swing",
    description: "爵士的第一语言不是音阶，而是时间感。学会 2 & 4、八分音符的摆荡与乐句呼吸。",
    minutes: 22,
    level: "入门",
  },
  {
    slug: "harmony",
    number: "03",
    title: "音程、和弦与和声",
    short: "和声基础",
    description: "从音程到七和弦、扩展音、ii–V–I、转位与替代，建立能听懂、能使用的和声地图。",
    minutes: 32,
    level: "入门 → 进阶",
  },
  {
    slug: "scales",
    number: "04",
    title: "音阶、琶音与即兴语言",
    short: "音阶与即兴",
    description: "大调调式、旋律小调、减音阶、五声音阶、和弦音、接近音与动机发展。",
    minutes: 30,
    level: "进阶",
  },
  {
    slug: "fretboard",
    number: "05",
    title: "指板、Voicing 与声部连接",
    short: "指板与 Voicing",
    description: "CAGED、五个把位、Shell Voicing、Drop 2/3、四度叠置与 guide tone 的连接。",
    minutes: 26,
    level: "入门 → 进阶",
  },
  {
    slug: "comping",
    number: "06",
    title: "伴奏 Comping",
    short: "伴奏 Comping",
    description: "Freddie Green、Swing、Bossa Nova、Ballad、Modal 与和贝斯手合作时的留白。",
    minutes: 24,
    level: "入门 → 进阶",
  },
  {
    slug: "improvisation",
    number: "07",
    title: "即兴、乐句与转录",
    short: "即兴与转录",
    description: "从和弦音到可记忆的乐句，从模仿到自己的声音；一套可执行的 transcription 流程。",
    minutes: 28,
    level: "进阶",
  },
  {
    slug: "chord-melody",
    number: "08",
    title: "和弦旋律与独奏吉他",
    short: "和弦旋律",
    description: "旋律优先，把贝斯、和弦与旋律装进一把琴；Joe Pass、Ted Greene 的思路拆解。",
    minutes: 20,
    level: "进阶",
  },
  {
    slug: "practice",
    number: "09",
    title: "听力、练习与进步",
    short: "练习方法",
    description: "刻意练习、录音复盘、30/60/90 分钟菜单、平台期与 jam session 礼仪。",
    minutes: 24,
    level: "全阶段",
  },
  {
    slug: "history",
    number: "10",
    title: "爵士吉他简史",
    short: "历史与风格",
    description: "从 Eddie Lang、Django、Charlie Christian 到当代，用 20 张唱片串起一条听觉时间线。",
    minutes: 26,
    level: "全阶段",
  },
  {
    slug: "glossary",
    number: "11",
    title: "术语表与常见问题",
    short: "术语 & FAQ",
    description: "100 个常用术语、和弦符号读法，以及自学者最常问的 20 个问题。",
    minutes: 16,
    level: "全阶段",
  },
];

export function chapterBySlug(slug: string): Chapter | undefined {
  return CHAPTERS.find((c) => c.slug === slug);
}

export function chapterNeighbors(slug: string) {
  const i = CHAPTERS.findIndex((c) => c.slug === slug);
  return {
    prev: i > 0 ? CHAPTERS[i - 1] : null,
    next: i >= 0 && i < CHAPTERS.length - 1 ? CHAPTERS[i + 1] : null,
  };
}

export const LEVELS = ["入门", "进阶", "高级", "全阶段"] as const;
export type Level = (typeof LEVELS)[number];

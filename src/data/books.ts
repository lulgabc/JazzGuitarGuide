export type BookCategory =
  | "方法与基础"
  | "和声与理论"
  | "即兴与语言"
  | "和弦、指板与编曲"
  | "曲集与转录"
  | "历史、传记与思维";

export type Book = {
  id: string;
  title: string;
  author: string;
  category: BookCategory;
  level: "入门" | "进阶" | "高级" | "全阶段" | "入门 → 进阶" | "入门 → 高级";
  publisher?: string;
  why: string;
  tags: string[];
  featured?: boolean;
};

export const BOOK_CATEGORY_ORDER: BookCategory[] = [
  "方法与基础",
  "和声与理论",
  "即兴与语言",
  "和弦、指板与编曲",
  "曲集与转录",
  "历史、传记与思维",
];

export function bookLink(book: Book): string {
  return `https://www.goodreads.com/search?q=${encodeURIComponent(`${book.title} ${book.author}`)}`;
}

export const BOOKS: Book[] = [
  {
    id: "modern-method",
    title: "A Modern Method for Guitar, Vol. 1–3",
    author: "William Leavitt",
    category: "方法与基础",
    level: "入门 → 高级",
    publisher: "Berklee Press",
    why:
      "Berklee 的经典吉他教程，训练读谱、音阶、和弦、节奏与指板。没有 TAB，进度扎实，适合想打正统基础的人。",
    tags: ["读谱", "基础", "Berklee", "经典"],
    featured: true,
  },
  {
    id: "jody-fisher",
    title: "Complete Jazz Guitar Method",
    author: "Jody Fisher",
    category: "方法与基础",
    level: "入门 → 高级",
    publisher: "Alfred",
    why:
      "从 Beginning 到 Mastering 的四册体系，覆盖和弦、音阶、即兴、伴奏与标准曲。讲解清楚，适合自学。",
    tags: ["体系", "四册", "标准曲", "自学"],
    featured: true,
  },
  {
    id: "jane-miller",
    title: "Introduction to Jazz Guitar",
    author: "Jane Miller",
    category: "方法与基础",
    level: "入门",
    publisher: "Berklee Press",
    why:
      "Berklee 吉他教授写的入门书，把爵士和声、音阶、和弦与即兴放进一个相对温和的进度里。",
    tags: ["入门", "Berklee", "和声", "基础"],
  },
  {
    id: "mickey-baker",
    title: "Mickey Baker's Complete Course in Jazz Guitar",
    author: "Mickey Baker",
    category: "方法与基础",
    level: "入门 → 进阶",
    why:
      "老派但有效的和弦与 lick 教程。和声语言偏传统，适合补充 shell voicing、turnaround 与 blues 句型。",
    tags: ["传统", "和弦", "Lick", "Blues"],
  },
  {
    id: "galbraith-series",
    title: "Barry Galbraith Jazz Guitar Study Series",
    author: "Barry Galbraith",
    category: "方法与基础",
    level: "进阶",
    publisher: "Alfred",
    why:
      "包含指板工作簿、每日练习、comping、Bach 改编与即兴。适合已经会基本操作、想补传统基本功的人。",
    tags: ["每日练习", "Comping", "指板", "传统"],
  },
  {
    id: "andrew-green-technique",
    title: "Jazz Guitar Technique",
    author: "Andrew Green",
    category: "方法与基础",
    level: "进阶",
    publisher: "Mel Bay",
    why:
      "系统讲拨弦、左手、音阶与琶音技术，适合想认真解决“手跟不上脑子”的人。",
    tags: ["技术", "拨弦", "左手", "琶音"],
  },
  {
    id: "andrew-green-comping",
    title: "Jazz Guitar Comping",
    author: "Andrew Green",
    category: "方法与基础",
    level: "进阶",
    publisher: "Mel Bay",
    why:
      "专门讲 comping 的书：voicing、节奏、与贝斯/鼓的配合。伴奏是吉他手最容易被低估的技能。",
    tags: ["Comping", "节奏", "Voicing"],
  },
  {
    id: "advancing-guitarist",
    title: "The Advancing Guitarist",
    author: "Mick Goodrick",
    category: "方法与基础",
    level: "高级",
    publisher: "Hal Leonard",
    why:
      "不是传统教程，而是一本“如何思考吉他”的问题集。Pat Metheny、John Scofield 都推荐过。适合卡在套路里的进阶者。",
    tags: ["思维", "指板", "实验", "经典"],
    featured: true,
  },
  {
    id: "schroedl",
    title: "Hal Leonard Guitar Method: Jazz Guitar",
    author: "Jeff Schroedl",
    category: "方法与基础",
    level: "入门",
    publisher: "Hal Leonard",
    why:
      "比大多数爵士教材更友好，覆盖基本和弦、音阶、伴奏与即兴，适合完全新手的第一本。",
    tags: ["入门", "友好", "基础"],
  },
  {
    id: "drop2-book",
    title: "Jazz Guitar Voicings, Vol. 1: The Drop 2 Book",
    author: "Randy Vincent",
    category: "和弦、指板与编曲",
    level: "进阶",
    publisher: "Sher Music",
    why:
      "把 drop 2 voicing 讲透：构造、转位、弦组、应用。学和弦旋律与四音和弦的必读书。",
    tags: ["Drop 2", "Voicing", "和弦", "必读"],
    featured: true,
  },
  {
    id: "three-note-voicings",
    title: "Three-Note Voicings and Beyond",
    author: "Randy Vincent",
    category: "和弦、指板与编曲",
    level: "进阶",
    publisher: "Sher Music",
    why:
      "三音和弦是爵士伴奏与 chord melody 的核心。这本书把“少音”如何弹出“多和声”讲得很清楚。",
    tags: ["三音和弦", "Comping", "Chord Melody"],
  },
  {
    id: "peckham-dictionary",
    title: "Jazz Guitar Chord Dictionary",
    author: "Rick Peckham",
    category: "和弦、指板与编曲",
    level: "全阶段",
    publisher: "Berklee Press",
    why:
      "Berklee 的和弦字典，查 voicing、扩展音与转位很方便。适合当工具书，而不是从头读到尾。",
    tags: ["和弦字典", "Voicing", "工具书"],
  },
  {
    id: "chord-chemistry",
    title: "Chord Chemistry",
    author: "Ted Greene",
    category: "和弦、指板与编曲",
    level: "高级",
    publisher: "Dale Zdenek",
    why:
      "和弦百科全书，信息量巨大。不要试图一次读完；把它当成灵感库，每次拿一个 voicing 去用。",
    tags: ["和弦", "百科", "Voicing", "经典"],
  },
  {
    id: "modern-chord-progressions",
    title: "Modern Chord Progressions",
    author: "Ted Greene",
    category: "和弦、指板与编曲",
    level: "高级",
    publisher: "Dale Zdenek",
    why:
      "比 Chord Chemistry 更聚焦和声进行与声部连接。适合学和弦旋律、reharmonization 的人。",
    tags: ["和声进行", "Voice Leading", "Reharm"],
  },
  {
    id: "ted-greene-soloing",
    title: "Jazz Guitar Single Note Soloing, Vol. 1–2",
    author: "Ted Greene",
    category: "即兴与语言",
    level: "高级",
    publisher: "Dale Zdenek",
    why:
      "Ted Greene 的单音独奏教材，线条与和声思维都很深。适合已经能读谱、想认真研究 solo 构造的人。",
    tags: ["单音", "Solo", "线条", "进阶"],
  },
  {
    id: "joe-pass-style",
    title: "Joe Pass Guitar Style",
    author: "Joe Pass",
    category: "和弦、指板与编曲",
    level: "进阶",
    publisher: "Alfred",
    why:
      "Joe Pass 的 method，覆盖和弦、音阶、blues、chord melody 与即兴。能直接听到大师如何组织材料。",
    tags: ["Joe Pass", "Chord Melody", "Bebop", "经典"],
    featured: true,
  },
  {
    id: "joe-pass-chord-solos",
    title: "Joe Pass Chord Solos",
    author: "Joe Pass",
    category: "曲集与转录",
    level: "进阶",
    publisher: "Alfred",
    why:
      "Joe Pass 的和弦独奏编配。学和弦旋律最直接的方式之一，但需要一定的读谱与和弦基础。",
    tags: ["Chord Solo", "编配", "Joe Pass"],
  },
  {
    id: "garrison-fewell",
    title: "Jazz Improvisation for Guitar: A Melodic Approach",
    author: "Garrison Fewell",
    category: "即兴与语言",
    level: "进阶",
    publisher: "Berklee Press",
    why:
      "以旋律与和弦音为核心的即兴教材，强调“唱出来再弹”。适合想摆脱音阶跑动的吉他手。",
    tags: ["即兴", "旋律", "和弦音", "Berklee"],
    featured: true,
  },
  {
    id: "cellular-approach",
    title: "Jazz Guitar Soloing: The Cellular Approach",
    author: "Randy Vincent",
    category: "即兴与语言",
    level: "高级",
    publisher: "Sher Music",
    why:
      "把乐句拆成细胞，再发展、移位、重组。适合已经有词汇、想建立个人线条的人。",
    tags: ["乐句", "动机", "发展", "进阶"],
  },
  {
    id: "connecting-chords",
    title: "Connecting Chords with Linear Harmony",
    author: "Bert Ligon",
    category: "即兴与语言",
    level: "进阶",
    publisher: "Hal Leonard",
    why:
      "讲 guide tone、voice leading 与线性和声的经典。能让你的 solo 从“对”变成“有方向”。",
    tags: ["Guide Tone", "Voice Leading", "线性", "必读"],
    featured: true,
  },
  {
    id: "ligon-comprehensive",
    title: "Comprehensive Technique for Jazz Musicians",
    author: "Bert Ligon",
    category: "即兴与语言",
    level: "高级",
    publisher: "Houston Publishing",
    why:
      "更全面的爵士技术与即兴练习，覆盖音阶、琶音、节奏与和声。适合当作长期练习手册。",
    tags: ["技术", "即兴", "练习", "参考"],
  },
  {
    id: "jazz-theory-book",
    title: "The Jazz Theory Book",
    author: "Mark Levine",
    category: "和声与理论",
    level: "进阶",
    publisher: "Sher Music",
    why:
      "爵士和声的经典教材，覆盖和弦、音阶、ii–V–I、替代与曲式。不是吉他专属，但每个爵士乐手都该翻。",
    tags: ["和声", "理论", "经典", "必读"],
    featured: true,
  },
  {
    id: "berklee-harmony",
    title: "The Berklee Book of Jazz Harmony",
    author: "Joe Mulholland & Tom Hojnacki",
    category: "和声与理论",
    level: "进阶",
    publisher: "Berklee Press",
    why:
      "Berklee 的爵士和声体系，讲功能和声、调式、替代与和声进行。适合想系统补理论的人。",
    tags: ["Berklee", "和声", "功能", "体系"],
  },
  {
    id: "jazzology",
    title: "Jazzology",
    author: "Robert Rawlins & Nor Eddine Bahha",
    category: "和声与理论",
    level: "进阶",
    publisher: "Hal Leonard",
    why:
      "一本比较全面的爵士理论参考书，适合查概念、补基础，也适合当教学辅助。",
    tags: ["理论", "参考", "和声"],
  },
  {
    id: "jazz-piano-book",
    title: "The Jazz Piano Book",
    author: "Mark Levine",
    category: "和声与理论",
    level: "进阶",
    publisher: "Sher Music",
    why:
      "虽然写给钢琴，但和声、voicing、comping 与即兴思维对吉他手极有价值。很多吉他手都读过。",
    tags: ["和声", "Voicing", "钢琴视角"],
  },
  {
    id: "forward-motion",
    title: "Forward Motion",
    author: "Hal Galper",
    category: "即兴与语言",
    level: "高级",
    publisher: "Sher Music",
    why:
      "讲“如何让线条穿过小节线、朝下一个目标和弦前进”。对 solo 的节奏与方向感帮助很大。",
    tags: ["Phrasing", "节奏", "方向", "进阶"],
  },
  {
    id: "barry-harris-video",
    title: "The Barry Harris Workshop Video",
    author: "Barry Harris",
    category: "即兴与语言",
    level: "高级",
    why:
      "Barry Harris 的传奇工作坊录像。用“bebop scale”“added notes”“sixth-diminished”等概念讲即兴与和声，影响深远。",
    tags: ["Barry Harris", "Bebop", "和声", "工作坊"],
  },
  {
    id: "barry-harris-guitar",
    title: "Barry Harris Harmonic Method for Guitar",
    author: "Alan Kingstone",
    category: "和弦、指板与编曲",
    level: "高级",
    why:
      "把 Barry Harris 的和声方法移植到吉他上，适合想深入传统 bebop 和声与 chord melody 的人。",
    tags: ["Barry Harris", "和声", "Chord Melody"],
  },
  {
    id: "bergonzi",
    title: "Inside Improvisation Series",
    author: "Jerry Bergonzi",
    category: "即兴与语言",
    level: "高级",
    publisher: "Advance Music",
    why:
      "七册的即兴体系，覆盖音阶、和弦、节奏、旋律与语言。信息密度高，适合长期啃。",
    tags: ["即兴", "体系", "音阶", "高级"],
  },
  {
    id: "serious-jazz-practice",
    title: "The Serious Jazz Practice Book",
    author: "Barry Finnerty",
    category: "即兴与语言",
    level: "高级",
    publisher: "Sher Music",
    why:
      "一本很“硬核”的练习书，覆盖音阶、琶音、和弦与节奏。适合想建立系统日常练习的人。",
    tags: ["练习", "音阶", "琶音", "体系"],
  },
  {
    id: "diorio-intervallic",
    title: "Intervallic Designs for Jazz Guitar",
    author: "Joe Diorio",
    category: "即兴与语言",
    level: "高级",
    publisher: "Mel Bay",
    why:
      "用音程而不是音阶来构建线条，能打开现代声音与指板路径。适合想突破传统句法的人。",
    tags: ["音程", "现代", "Lines", "进阶"],
  },
  {
    id: "linear-expressions",
    title: "Linear Expressions",
    author: "Pat Martino",
    category: "即兴与语言",
    level: "高级",
    publisher: "Mel Bay",
    why:
      "Pat Martino 的线条与指板系统。不是入门书，但对理解“长线条如何组织”很有价值。",
    tags: ["Pat Martino", "Lines", "指板系统"],
  },
  {
    id: "real-book-1",
    title: "The Real Book, Vol. 1",
    author: "Hal Leonard (ed.)",
    category: "曲集与转录",
    level: "全阶段",
    publisher: "Hal Leonard",
    why:
      "最常用的标准曲 lead sheet 合集。不是教材，但你会一直翻它。建议配合录音听，不要只读谱。",
    tags: ["标准曲", "Lead Sheet", "曲集", "必备"],
    featured: true,
  },
  {
    id: "real-book-2",
    title: "The Real Book, Vol. 2",
    author: "Hal Leonard (ed.)",
    category: "曲集与转录",
    level: "全阶段",
    publisher: "Hal Leonard",
    why:
      "第二册补充更多标准曲与 jazz 曲目。等第一册学得差不多再买。",
    tags: ["标准曲", "曲集", "扩展"],
  },
  {
    id: "parker-omnibook",
    title: "Charlie Parker Omnibook",
    author: "Charlie Parker / Jamey Aebersold (ed.)",
    category: "曲集与转录",
    level: "高级",
    publisher: "Jamey Aebersold",
    why:
      "Charlie Parker 的 solo 转录合集（C 乐器版）。研究 bebop 语言最直接的材料之一，但不要只背谱，要听录音。",
    tags: ["Bebop", "转录", "Charlie Parker", "必备"],
    featured: true,
  },
  {
    id: "aebersold",
    title: "Jamey Aebersold Play-Along Series",
    author: "Jamey Aebersold",
    category: "曲集与转录",
    level: "全阶段",
    publisher: "Jamey Aebersold Jazz",
    why:
      "大量标准曲与练习用的 play-along。Vol. 1（How to Play Jazz and Improvise）、Vol. 2、Vol. 3、Vol. 54 等都是常用入口。",
    tags: ["Play-Along", "标准曲", "伴奏", "练习"],
  },
  {
    id: "jazz-standards-gioia",
    title: "The Jazz Standards: A Guide to the Repertoire",
    author: "Ted Gioia",
    category: "历史、传记与思维",
    level: "全阶段",
    publisher: "Oxford University Press",
    why:
      "250 首标准曲的历史、作曲者、代表录音与版本比较。学一首曲子前读一页，听录音会更有方向。",
    tags: ["标准曲", "历史", "唱片", "参考"],
    featured: true,
  },
  {
    id: "history-of-jazz",
    title: "The History of Jazz",
    author: "Ted Gioia",
    category: "历史、传记与思维",
    level: "全阶段",
    publisher: "Oxford University Press",
    why:
      "一本可读性很高的爵士通史。理解风格演变，会帮你判断自己在学什么、为什么学。",
    tags: ["历史", "风格", "通史"],
  },
  {
    id: "birth-of-bebop",
    title: "The Birth of Bebop",
    author: "Scott DeVeaux",
    category: "历史、传记与思维",
    level: "高级",
    publisher: "University of California Press",
    why:
      "把 bebop 放回社会、经济与音乐工业的语境里讲。想真正理解 bebop 为什么长成那样，可以读。",
    tags: ["Bebop", "历史", "社会", "学术"],
  },
  {
    id: "jazz-guitar-book",
    title: "The Jazz Guitar: Its Evolution and Its Players",
    author: "Maurice Summerfield",
    category: "历史、传记与思维",
    level: "全阶段",
    publisher: "Ashley Mark",
    why:
      "爵士吉他史与人物百科，覆盖早期到现代。适合当工具书，按名字查。",
    tags: ["历史", "人物", "百科", "吉他"],
  },
  {
    id: "django-bio",
    title: "Django: The Life and Music of a Gypsy Legend",
    author: "Michael Dregni",
    category: "历史、传记与思维",
    level: "全阶段",
    publisher: "Oxford University Press",
    why:
      "Django 的传记，把 gypsy jazz 的场景、人物与音乐讲得很完整。听 Django 前读会更有画面。",
    tags: ["Django", "传记", "Gypsy Jazz"],
  },
  {
    id: "thinking-in-jazz",
    title: "Thinking in Jazz",
    author: "Paul Berliner",
    category: "历史、传记与思维",
    level: "高级",
    publisher: "University of Chicago Press",
    why:
      "通过对爵士乐手的访谈，研究他们如何学习、记忆、即兴与合奏。不是练习书，但会改变你对“学爵士”的理解。",
    tags: ["民族音乐学", "学习", "即兴", "访谈"],
  },
  {
    id: "effortless-mastery",
    title: "Effortless Mastery",
    author: "Kenny Werner",
    category: "历史、传记与思维",
    level: "全阶段",
    publisher: "Jamey Aebersold",
    why:
      "关于演奏焦虑、放松与“让音乐流出来”的经典。技术之外，心态也是练习的一部分。",
    tags: ["心态", "练习", "焦虑", "经典"],
  },
  {
    id: "inner-game",
    title: "The Inner Game of Music",
    author: "Barry Green & W. Timothy Gallwey",
    category: "历史、传记与思维",
    level: "全阶段",
    publisher: "Doubleday",
    why:
      "把“内在比赛”的方法应用到音乐练习与演出。适合容易紧张、过度自我批评的人。",
    tags: ["心态", "练习", "演出"],
  },
  {
    id: "free-play",
    title: "Free Play",
    author: "Stephen Nachmanovitch",
    category: "历史、传记与思维",
    level: "全阶段",
    publisher: "TarcherPerigee",
    why:
      "关于创造力与即兴的书，不限于音乐。适合在平台期重新找回“玩”的感觉。",
    tags: ["创造力", "即兴", "心态"],
  },
  {
    id: "damian-composing",
    title: "The Guitarist's Guide to Composing and Improvising",
    author: "Jon Damian",
    category: "和弦、指板与编曲",
    level: "高级",
    publisher: "Berklee Press",
    why:
      "用很开放的方式讲作曲、和声与即兴，适合想从“演奏者”变成“创作者”的人。",
    tags: ["作曲", "即兴", "Berklee", "创意"],
  },
  {
    id: "creative-chordal-harmony",
    title: "Creative Chordal Harmony for Guitar",
    author: "Mick Goodrick & Tim Miller",
    category: "和弦、指板与编曲",
    level: "高级",
    publisher: "Berklee Press",
    why:
      "用“generic modality compression”讲和弦与声部，思路非常现代。适合已经厌倦传统 voicing 的人。",
    tags: ["现代和声", "Voicing", "Goodrick"],
  },
];

export const FEATURED_BOOKS = BOOKS.filter((b) => b.featured);

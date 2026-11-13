# Jazz Guitar Guide · 爵士吉他学习手册

一份写给自学者的爵士吉他指南：基础知识、12 个月路线图、40 首标准曲、免费课程、大师与教材、练习工具箱，并提供 6 种语言的本地化导读。

**在线访问：** https://lulgabc.github.io/JazzGuitarGuide/

---

## 这个项目解决什么问题

网上关于爵士吉他的资料很多，但初学者最常遇到的不是“没东西看”，而是：

- 收藏了 100 个视频，却没有一首能完整弹的曲子；
- 练了 10 个调式，一跟伴奏就迷路；
- 买了很多教材，每一本都停在第 10 页。

这个站点试图提供一条**顺序**：先练什么、为什么、练到什么程度、怎么检查。

## 内容

- **11 章入门知识**：乐器与音色、节奏与 Swing、和声、音阶/琶音、指板与 Voicing、伴奏、即兴与转录、和弦旋律、练习方法、爵士吉他史、术语与 FAQ。
- **12 个月路线图**：四个阶段、前 12 周逐周计划、30/60/90 分钟练习菜单、46 个可勾选任务（localStorage 保存进度）。
- **40 首标准曲**：调性、曲式、难度、练习重点、推荐录音，按第一波 12 首 → 进阶 → 高级排列。
- **34 位吉他大师**：按年代/风格分类，附代表专辑、听点与 YouTube 搜索；其中 30 位配黑白人物照片背景（Wikimedia Commons，附完整 credits）。
- **47 本教材**：方法、和声、即兴、指板/编曲、曲集、历史与心态，附 Goodreads 查找链接。
- **选琴指南**：入门 / 进阶 / 演出 3 个等级、18 个型号、法国市场欧元参考价、试琴清单与购买渠道。
- **免费课程**：18 个 YouTube 频道、30+ 支精选单课、20 个网站/工具，含中文资源。
- **练习工具箱**：
  - 交互式指板（音阶/和弦、音级/音名、点击试听）
  - 节拍器（2 & 4、细分、swing、tap tempo）
  - ii–V–I / Blues / Rhythm Changes 伴奏（Web Audio）
  - 30/60/90 分钟练习计时器
  - 音程/和弦听音测验
- **多语言导读**：英语、法语、西班牙语、意大利语、德语、葡萄牙语（`/en/`、`/fr/`、`/es/`、`/it/`、`/de/`、`/pt/`），包含 11 章摘要、路线图、12 首曲目、免费课程、大师、书单与工具介绍。
- **原创 10 秒开场音频**：首页打开时尝试自动播放；若浏览器阻止自动播放，会显示可点击的播放提示。音频由 Karplus-Strong 合成，不含第三方录音。
- **真实书籍封面**：通过 Open Library Covers API 展示；暂无公开封面的书使用本站排版封面。

## 技术栈

- [Astro](https://astro.build/) 静态站点
- 原生 CSS（无 Tailwind、无 UI 框架）
- 原生 TypeScript / Web Audio API
- GitHub Actions + GitHub Pages 部署

没有后端、没有账号、没有广告、没有第三方统计。路线图进度只保存在浏览器 `localStorage`。

多语言范围：**界面、导航、首页/导读页已本地化**；11 章深度长文目前保留中文，并在各语言导读中明确标注。书籍封面来自 Open Library，版权归原出版社。

## 本地开发

要求 **Node.js >= 22.23.4**（Astro 7 的要求）。

```bash
npm install
npm run dev
# http://localhost:4321/JazzGuitarGuide/
```

构建与预览：

```bash
npm run build
npm run preview
```

类型检查：

```bash
npm run check
```

## 部署到 GitHub Pages

仓库已包含 `.github/workflows/deploy.yml`。推送到 `main` 后：

1. 打开 GitHub 仓库 → **Settings → Pages**
2. **Build and deployment → Source** 选择 **GitHub Actions**
3. 等待 Actions 完成，访问 `https://<username>.github.io/JazzGuitarGuide/`

`astro.config.mjs` 中的 `site` 与 `base` 需要与仓库名一致：

```js
site: "https://lulgabc.github.io",
base: "/JazzGuitarGuide",
```

## 项目结构

```text
src/
├─ components/
│  ├─ ChapterLayout.astro      # 章节布局 + TOC + 上下章
│  ├─ Header.astro / Footer.astro
│  ├─ SectionHead.astro
│  ├─ VideoCard.astro
│  └─ tools/                   # 指板、节拍器、伴奏、计时器、听音
├─ data/
│  ├─ courses.ts               # 频道/单课/网站
│  ├─ players.ts               # 大师名录
│  ├─ books.ts                 # 教材书单
│  ├─ standards.ts             # 40 首标准曲
│  ├─ roadmap.ts               # 四阶段/周计划/练习菜单
│  ├─ guitars.ts               # 选琴指南/法国市场参考价
│  ├─ player-photos.ts         # 大师照片来源与许可
│  └─ glossary.ts              # 术语表
├─ i18n/                       # 语言、UI 文案、6 语言导读
├─ layouts/BaseLayout.astro
├─ lib/                        # 站点常量、base path 工具
├─ pages/                      # 首页、入门、路线图、课程、曲目、大师、书单、选琴、工具、关于、404
├─ scripts/main.ts             # 主题、语言切换、移动菜单、TOC、reveal
└─ styles/global.css

public/players/                # 30 张大师黑白照片（Wikimedia Commons）
scripts/generate_intro.py      # 生成原创 10 秒开场音频
```

## 内容原则

1. **先音乐，后理论**：每个概念都要能落到曲子里。
2. **不神化天赋**：把可练的步骤拆出来。
3. **不堆砌资料**：宁可少，也要能执行。
4. **承认差异**：调性、曲式、教材版本可能不同；本站给出“常见版本”，不是唯一答案。

## 外部资源与版权

本站只链接公开的 YouTube 频道/视频与网站，不托管、不销售任何课程、谱例或 PDF。

- 视频、唱片、书籍、网站内容的版权归各自权利人。
- 标准曲的作曲版权归各自权利人；学习请使用合法购买/借阅的谱例与录音。
- 免费/付费状态可能变化，以对方页面为准。
- 如果你认为某个链接不合适，欢迎提 issue。

## License

- **代码**：MIT（见 `LICENSE`）
- **原创文字与图表**：CC BY-NC-SA 4.0（见 `CONTENT-LICENSE.md`）

## 贡献

欢迎纠错、补充资源、改进练习方法：

- GitHub Issues: https://github.com/lulgabc/JazzGuitarGuide/issues
- Pull Requests: https://github.com/lulgabc/JazzGuitarGuide/pulls

如果你发现失效链接、事实错误或更好的免费资源，请附上链接与简短说明。

---

**开始吧。** 选一首你喜欢的曲子，听三遍，唱一遍，然后在琴上找到第一个音。

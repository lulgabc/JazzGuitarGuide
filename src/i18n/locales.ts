export type LocaleCode = "zh" | "en" | "fr" | "es" | "it" | "de" | "pt";

export type Locale = {
  code: LocaleCode;
  label: string;
  htmlLang: string;
  ogLocale: string;
};

export const LOCALES: Locale[] = [
  { code: "zh", label: "中文", htmlLang: "zh-CN", ogLocale: "zh_CN" },
  { code: "en", label: "English", htmlLang: "en", ogLocale: "en_US" },
  { code: "fr", label: "Français", htmlLang: "fr", ogLocale: "fr_FR" },
  { code: "es", label: "Español", htmlLang: "es", ogLocale: "es_ES" },
  { code: "it", label: "Italiano", htmlLang: "it", ogLocale: "it_IT" },
  { code: "de", label: "Deutsch", htmlLang: "de", ogLocale: "de_DE" },
  { code: "pt", label: "Português", htmlLang: "pt", ogLocale: "pt_BR" },
];

export const LOCALIZED_LOCALES = LOCALES.filter((locale) => locale.code !== "zh");

export function getLocale(code: string | undefined): Locale {
  return LOCALES.find((locale) => locale.code === code) ?? LOCALES[0];
}

export function localeHome(code: LocaleCode): string {
  return code === "zh" ? "/" : `/${code}/`;
}

type NavLabels = {
  chapters: string;
  roadmap: string;
  tunes: string;
  courses: string;
  players: string;
  books: string;
  tools: string;
};

type FooterLabels = {
  tagline: string;
  guide: string;
  deep: string;
  project: string;
  deepNote: string;
  github: string;
  about: string;
  issues: string;
  backTop: string;
  copyright: string;
  built: string;
  source: string;
};

export type UILabels = {
  brandSub: string;
  langLabel: string;
  stats: { chapters: string; months: string; tunes: string; tools: string };
  nav: NavLabels;
  footer: FooterLabels;
  deepBadge: string;
  cta: string;
};

export const UI: Record<LocaleCode, UILabels> = {
  zh: {
    brandSub: "爵士吉他学习手册",
    langLabel: "语言",

    stats: { chapters: "章", months: "个月", tunes: "首标准曲", tools: "个工具" },
    nav: {
      chapters: "入门知识",
      roadmap: "路线图",
      tunes: "曲目",
      courses: "免费课",
      players: "大师",
      books: "书单",
      tools: "工具箱",
    },
    footer: {
      tagline: "把复杂的东西拆成可以每天练的一小块，然后一首一首曲子弹下去。",
      guide: "学习",
      deep: "深入",
      project: "项目",
      deepNote: "深度章节目前以中文提供。",
      github: "GitHub 仓库",
      about: "关于本站",
      issues: "纠错 / 建议",
      backTop: "回到顶部",
      copyright: "个人学习项目，非商业用途",
      built: "用 Astro 构建 · 部署于 GitHub Pages",
      source: "源码",
    },
    deepBadge: "中文深度章节",
    cta: "继续深入（中文）",
  },
  en: {
    brandSub: "A jazz guitar field guide",
    langLabel: "Language",

    stats: { chapters: "Chapters", months: "Months", tunes: "Standards", tools: "Tools" },
    nav: {
      chapters: "Chapters",
      roadmap: "Roadmap",
      tunes: "Tunes",
      courses: "Courses",
      players: "Players",
      books: "Books",
      tools: "Tools",
    },
    footer: {
      tagline: "A practical map for learning jazz guitar: sound, time, language, repertoire.",
      guide: "Guide",
      deep: "Deep dive",
      project: "Project",
      deepNote: "In-depth chapters are currently in Chinese.",
      github: "GitHub repository",
      about: "About",
      issues: "Issues / suggestions",
      backTop: "Back to top",
      copyright: "Personal learning project, non-commercial",
      built: "Built with Astro · deployed on GitHub Pages",
      source: "Source",
    },
    deepBadge: "Chinese deep chapter",
    cta: "Continue in Chinese",
  },
  fr: {
    brandSub: "Guide de la guitare jazz",
    langLabel: "Langue",

    stats: { chapters: "Chapitres", months: "Mois", tunes: "Standards", tools: "Outils" },
    nav: {
      chapters: "Chapitres",
      roadmap: "Parcours",
      tunes: "Morceaux",
      courses: "Cours",
      players: "Guitaristes",
      books: "Livres",
      tools: "Outils",
    },
    footer: {
      tagline: "Une carte pratique pour apprendre la guitare jazz : son, temps, langage, répertoire.",
      guide: "Guide",
      deep: "Approfondir",
      project: "Projet",
      deepNote: "Les chapitres détaillés sont actuellement en chinois.",
      github: "Dépôt GitHub",
      about: "À propos",
      issues: "Corrections / suggestions",
      backTop: "Haut de page",
      copyright: "Projet personnel d'apprentissage, non commercial",
      built: "Construit avec Astro · déployé sur GitHub Pages",
      source: "Code source",
    },
    deepBadge: "Chapitre détaillé en chinois",
    cta: "Continuer en chinois",
  },
  es: {
    brandSub: "Guía de guitarra jazz",
    langLabel: "Idioma",

    stats: { chapters: "Capítulos", months: "Meses", tunes: "Standards", tools: "Herramientas" },
    nav: {
      chapters: "Capítulos",
      roadmap: "Ruta",
      tunes: "Temas",
      courses: "Cursos",
      players: "Guitarristas",
      books: "Libros",
      tools: "Herramientas",
    },
    footer: {
      tagline: "Un mapa práctico para aprender guitarra jazz: sonido, tiempo, lenguaje y repertorio.",
      guide: "Guía",
      deep: "Profundizar",
      project: "Proyecto",
      deepNote: "Los capítulos detallados están actualmente en chino.",
      github: "Repositorio GitHub",
      about: "Acerca de",
      issues: "Correcciones / sugerencias",
      backTop: "Volver arriba",
      copyright: "Proyecto personal de aprendizaje, no comercial",
      built: "Creado con Astro · desplegado en GitHub Pages",
      source: "Código fuente",
    },
    deepBadge: "Capítulo detallado en chino",
    cta: "Continuar en chino",
  },
  it: {
    brandSub: "Guida alla chitarra jazz",
    langLabel: "Lingua",

    stats: { chapters: "Capitoli", months: "Mesi", tunes: "Standard", tools: "Strumenti" },
    nav: {
      chapters: "Capitoli",
      roadmap: "Percorso",
      tunes: "Brani",
      courses: "Corsi",
      players: "Chitarristi",
      books: "Libri",
      tools: "Strumenti",
    },
    footer: {
      tagline: "Una mappa pratica per imparare la chitarra jazz: suono, tempo, linguaggio e repertorio.",
      guide: "Guida",
      deep: "Approfondisci",
      project: "Progetto",
      deepNote: "I capitoli dettagliati sono attualmente in cinese.",
      github: "Repository GitHub",
      about: "Informazioni",
      issues: "Correzioni / suggerimenti",
      backTop: "Torna su",
      copyright: "Progetto personale di apprendimento, non commerciale",
      built: "Creato con Astro · pubblicato su GitHub Pages",
      source: "Codice sorgente",
    },
    deepBadge: "Capitolo dettagliato in cinese",
    cta: "Continua in cinese",
  },
  de: {
    brandSub: "Ein Jazzgitarren-Lernweg",
    langLabel: "Sprache",

    stats: { chapters: "Kapitel", months: "Monate", tunes: "Standards", tools: "Tools" },
    nav: {
      chapters: "Kapitel",
      roadmap: "Lernplan",
      tunes: "Stücke",
      courses: "Kurse",
      players: "Gitarristen",
      books: "Bücher",
      tools: "Tools",
    },
    footer: {
      tagline: "Eine praktische Landkarte für Jazzgitarre: Klang, Zeit, Sprache, Repertoire.",
      guide: "Leitfaden",
      deep: "Vertiefen",
      project: "Projekt",
      deepNote: "Die ausführlichen Kapitel sind derzeit auf Chinesisch.",
      github: "GitHub-Repository",
      about: "Über das Projekt",
      issues: "Korrekturen / Vorschläge",
      backTop: "Nach oben",
      copyright: "Persönliches Lernprojekt, nicht kommerziell",
      built: "Mit Astro gebaut · auf GitHub Pages veröffentlicht",
      source: "Quellcode",
    },
    deepBadge: "Ausführliches Kapitel auf Chinesisch",
    cta: "Auf Chinesisch weiterlesen",
  },
  pt: {
    brandSub: "Guia de guitarra jazz",
    langLabel: "Idioma",

    stats: { chapters: "Capítulos", months: "Meses", tunes: "Standards", tools: "Ferramentas" },
    nav: {
      chapters: "Capítulos",
      roadmap: "Percurso",
      tunes: "Temas",
      courses: "Cursos",
      players: "Guitarristas",
      books: "Livros",
      tools: "Ferramentas",
    },
    footer: {
      tagline: "Um mapa prático para aprender guitarra jazz: som, tempo, linguagem e repertório.",
      guide: "Guia",
      deep: "Aprofundar",
      project: "Projeto",
      deepNote: "Os capítulos detalhados estão atualmente em chinês.",
      github: "Repositório GitHub",
      about: "Sobre",
      issues: "Correções / sugestões",
      backTop: "Voltar ao topo",
      copyright: "Projeto pessoal de aprendizagem, não comercial",
      built: "Criado com Astro · publicado no GitHub Pages",
      source: "Código-fonte",
    },
    deepBadge: "Capítulo detalhado em chinês",
    cta: "Continuar em chinês",
  },
};

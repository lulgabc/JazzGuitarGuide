import type { LocaleCode } from "./locales";

export type GuideContent = {
  meta: { title: string; description: string };
  hero: {
    eyebrow: string;
    title: string;
    lead: string;
    primary: string;
    secondary: string;
    meta: string[];
  };
  pillars: {
    kicker: string;
    title: string;
    intro: string;
    items: { title: string; body: string }[];
  };
  chapters: {
    kicker: string;
    title: string;
    intro: string;
    items: { slug: string; title: string; desc: string }[];
  };
  roadmap: {
    kicker: string;
    title: string;
    intro: string;
    phases: { number: string; title: string; subtitle: string; goal: string; focus: string[] }[];
    cta: string;
  };
  tunes: {
    kicker: string;
    title: string;
    intro: string;
    labels: { tune: string; composer: string; key: string; form: string };
    cta: string;
  };
  courses: {
    kicker: string;
    title: string;
    intro: string;
    items: { id: string; why: string }[];
  };
  players: {
    kicker: string;
    title: string;
    intro: string;
    items: { id: string; why: string }[];
  };
  books: {
    kicker: string;
    title: string;
    intro: string;
    items: { id: string; why: string }[];
  };
  tools: {
    kicker: string;
    title: string;
    intro: string;
    items: { name: string; desc: string }[];
  };
  deep: { title: string; body: string; cta: string };
};

const FIRST_TWELVE = [
  "autumn-leaves",
  "blue-bossa",
  "summertime",
  "all-of-me",
  "fly-me-to-the-moon",
  "satin-doll",
  "take-the-a-train",
  "blue-monk",
  "bags-groove",
  "c-jam-blues",
  "straight-no-chaser",
  "mr-pc",
];

const COURSES = ["v-order", "v-basic-chords", "v-swing", "v-autumn-full", "v-ear-training", "v-jazz-blues"];
const PLAYERS = ["django-reinhardt", "charlie-christian", "wes-montgomery", "jim-hall"];
const BOOKS = ["jody-fisher", "advancing-guitarist", "jazz-theory-book", "real-book-1"];

export const GUIDES: Record<Exclude<LocaleCode, "zh">, GuideContent> = {
  en: {
    meta: {
      title: "Jazz Guitar Guide",
      description:
        "A localized guide to learning jazz guitar: sound, swing, harmony, 40 standards, free lessons, players, books and practice tools.",
    },
    hero: {
      eyebrow: "A field guide for the curious guitarist",
      title: "Jazz guitar,\nin small daily pieces.",
      lead:
        "A practical map for the self-taught guitarist: how to get a sound, how to swing, how to make the changes, and how to play with other people.",
      primary: "Start with the roadmap",
      secondary: "Read the guide",
      meta: ["No experience required", "40 standards", "Free lessons", "Interactive tools"],
    },
    pillars: {
      kicker: "The three pillars",
      title: "Get these three right first",
      intro: "Jazz guitar is not a race to collect scales. These three habits decide whether you sound like the music.",
      items: [
        {
          title: "Time before scales",
          body: "Swing, 2 & 4, phrasing and space matter more than five more modes. Put the metronome on 2 & 4 and listen to the ride cymbal.",
        },
        {
          title: "Tunes are the vehicle",
          body: "A concept only becomes yours when you use it in a song. Every new chord, line or rhythm should land in a tune you are learning.",
        },
        {
          title: "Ears set the ceiling",
          body: "What you can hear is what you can play. Listen, sing, transcribe. These slow skills eventually make your solos speak.",
        },
      ],
    },
    chapters: {
      kicker: "The knowledge base",
      title: "Eleven chapters, one map",
      intro:
        "The full in-depth chapters are in Chinese. Each card below gives you the English summary; open the Chinese chapter when you want the complete detail.",
      items: [
        { slug: "foundations", title: "Instrument, sound & body", desc: "The roles of the jazz guitarist, archtops vs. solid bodies, strings, amps, posture and picking." },
        { slug: "rhythm", title: "Rhythm & swing", desc: "2 & 4, the swing eighth note, Freddie Green comping, syncopation and feel." },
        { slug: "harmony", title: "Harmony & chord symbols", desc: "Intervals, seventh chords, extensions, ii–V–I, substitutions and voice leading." },
        { slug: "scales", title: "Scales, arpeggios & language", desc: "Modes, melodic minor, diminished, pentatonic, approach notes and motif development." },
        { slug: "fretboard", title: "Fretboard & voicings", desc: "CAGED, five positions, shell voicings, drop 2/3 and connecting chords smoothly." },
        { slug: "comping", title: "Comping", desc: "Freddie Green, swing patterns, bossa, ballads, waltzes and playing with a bassist." },
        { slug: "improvisation", title: "Improvisation & transcription", desc: "Chord tones, guide tones, phrasing, transcription and a 10-day practice plan." },
        { slug: "chord-melody", title: "Chord melody & solo guitar", desc: "Melody first, bass lines, shell voicings, fills and a five-level arrangement method." },
        { slug: "practice", title: "Ears, practice & progress", desc: "Deliberate practice, 30/60/90-minute routines, recording, memory and jam etiquette." },
        { slug: "history", title: "A short history of jazz guitar", desc: "From Eddie Lang and Django to Charlie Christian, Wes, Jim Hall, Joe Pass and the moderns." },
        { slug: "glossary", title: "Glossary & FAQ", desc: "100+ terms, chord-symbol reading and the 20 questions self-taught players ask most." },
      ],
    },
    roadmap: {
      kicker: "The roadmap",
      title: "A 12-month path",
      intro:
        "Four phases, weekly checkpoints and a simple rule: if you cannot use it in a tune, you have not learned it yet.",
      phases: [
        {
          number: "01",
          title: "Build the grammar",
          subtitle: "Sound, time and your first three tunes",
          goal: "Play three standards with a stable swing feel and a simple solo.",
          focus: ["Posture & picking", "Swing eighths", "Shell voicings", "12-bar blues", "Autumn Leaves", "Record yourself"],
        },
        {
          number: "02",
          title: "Expand the vocabulary",
          subtitle: "From playing to saying something",
          goal: "Use chord tones, arpeggios and approach notes to build lines over five tunes.",
          focus: ["Chord tones", "Arpeggios", "Approach notes", "Drop 2", "Comping rhythms", "Transcription"],
        },
        {
          number: "03",
          title: "Standards & language",
          subtitle: "Put the vocabulary into real music",
          goal: "Know ten tunes, hear common forms, and finish two chord-melody arrangements.",
          focus: ["Bebop language", "Melodic minor", "Diminished", "Chord melody", "Ten tunes", "Jam"],
        },
        {
          number: "04",
          title: "Stage & personal voice",
          subtitle: "From playing to having a sound",
          goal: "Prepare a 30-minute set, record three to five demos and choose your next direction.",
          focus: ["Repertoire", "Performance", "Recording", "Personal voice", "Teaching", "Next plan"],
        },
      ],
      cta: "See the full 52-week roadmap (Chinese)",
    },
    tunes: {
      kicker: "Repertoire",
      title: "The first twelve tunes",
      intro:
        "These cover ii–V–I, blues, bossa, ballads and rhythm changes. Learn the melody, the form and one simple solo before moving on.",
      labels: { tune: "Tune", composer: "Composer", key: "Key", form: "Form" },
      cta: "Browse all 40 tunes (Chinese)",
    },
    courses: {
      kicker: "Free lessons",
      title: "Start with these six",
      intro: "Watch one, close the video, and practise for ten minutes. Collecting lessons is not learning.",
      items: [
        { id: "v-order", why: "The whole map in one lesson: what to learn and in what order." },
        { id: "v-basic-chords", why: "Your first usable jazz chord vocabulary, without memorising dozens of shapes." },
        { id: "v-swing", why: "Turn swing from a mystery into something you can hear and practise." },
        { id: "v-autumn-full", why: "Melody, chords, scales and soloing on the ideal first standard." },
        { id: "v-ear-training", why: "A practical ear-training routine for jazz, not abstract interval drills." },
        { id: "v-jazz-blues", why: "The jazz-blues language: the best laboratory for improvisation." },
      ],
    },
    players: {
      kicker: "Listening",
      title: "Listen widely, steal selectively",
      intro: "Find the sounds you actually love before you decide whose language to study.",
      items: [
        { id: "django-reinhardt", why: "Melody, ornamentation and a swing that still sounds alive." },
        { id: "charlie-christian", why: "The birth of the electric-guitar solo line." },
        { id: "wes-montgomery", why: "Thumb, octaves and chord melody: the most influential jazz guitar voice." },
        { id: "jim-hall", why: "Space, interaction and the art of leaving notes out." },
      ],
    },
    books: {
      kicker: "The library",
      title: "Four books to start",
      intro: "One method, one harmony reference, one concept book, one repertoire book. Do not buy ten at once.",
      items: [
        { id: "jody-fisher", why: "A clear four-volume method from beginning to advanced." },
        { id: "advancing-guitarist", why: "The classic book for breaking out of shapes and thinking like a musician." },
        { id: "jazz-theory-book", why: "The harmony reference most jazz players eventually read." },
        { id: "real-book-1", why: "The standard repertoire you will keep coming back to." },
      ],
    },
    tools: {
      kicker: "Practice toolbox",
      title: "A small toolbox, no sign-up",
      intro: "The tool interface is currently in Chinese, but the controls are simple and everything runs in your browser.",
      items: [
        { name: "Fretboard explorer", desc: "Visualise scales and chords, see degrees or note names, tap to hear." },
        { name: "Metronome", desc: "2 & 4 accents, subdivisions, swing and tap tempo." },
        { name: "Backing tracks", desc: "ii–V–I, jazz blues and rhythm changes generated with Web Audio." },
        { name: "Practice timer", desc: "30/60/90-minute routines that move from block to block." },
        { name: "Ear quiz", desc: "Intervals and chord qualities, five minutes a day." },
      ],
    },
    deep: {
      title: "Want the full depth?",
      body:
        "The 11 in-depth chapters and the complete practice toolbox are currently in Chinese. This localized guide gives you the map; the Chinese chapters give you the detail.",
      cta: "Open the Chinese knowledge base",
    },
  },

  fr: {
    meta: {
      title: "Guide de la guitare jazz",
      description:
        "Un guide localisé pour apprendre la guitare jazz : son, swing, harmonie, 40 standards, cours gratuits, guitaristes, livres et outils.",
    },
    hero: {
      eyebrow: "Un guide de terrain pour guitariste curieux",
      title: "La guitare jazz,\npar petits morceaux.",
      lead:
        "Une carte pratique pour l'autodidacte : trouver un son, swinguer, comprendre les grilles et jouer avec d'autres musiciens.",
      primary: "Commencer par le parcours",
      secondary: "Lire le guide",
      meta: ["Débutant bienvenu", "40 standards", "Cours gratuits", "Outils interactifs"],
    },
    pillars: {
      kicker: "Les trois piliers",
      title: "Réglez d'abord ces trois choses",
      intro: "La guitare jazz n'est pas une course aux gammes. Ces trois habitudes décident si votre musique sonne juste.",
      items: [
        {
          title: "Le temps avant les gammes",
          body: "Le swing, le 2 & 4, le phrasé et le silence comptent plus que cinq modes supplémentaires. Métronome sur 2 & 4, écoutez la ride.",
        },
        {
          title: "Le morceau est le véhicule",
          body: "Un concept ne devient vôtre que dans un morceau. Chaque nouvel accord, phrase ou rythme doit atterrir dans un thème que vous travaillez.",
        },
        {
          title: "L'oreille fixe le plafond",
          body: "Ce que vous entendez, vous pouvez le jouer. Écoutez, chantez, transcrivez. Ces compétences lentes font parler vos solos.",
        },
      ],
    },
    chapters: {
      kicker: "Les fondamentaux",
      title: "Onze chapitres, une carte",
      intro:
        "Les chapitres détaillés sont en chinois. Chaque carte ci-dessous donne le résumé français ; ouvrez le chapitre chinois pour le détail complet.",
      items: [
        { slug: "foundations", title: "Instrument, son & corps", desc: "Les rôles du guitariste jazz, archtop ou solid body, cordes, amplis, posture et médiator." },
        { slug: "rhythm", title: "Rythme & swing", desc: "2 & 4, la croche swing, le comping de Freddie Green, la syncope et le feel." },
        { slug: "harmony", title: "Harmonie & symboles d'accords", desc: "Intervalles, accords de septième, extensions, ii–V–I, substitutions et conduite des voix." },
        { slug: "scales", title: "Gammes, arpèges & langage", desc: "Modes, mineure mélodique, diminuée, pentatonique, notes d'approche et motifs." },
        { slug: "fretboard", title: "Manche & voicings", desc: "CAGED, cinq positions, shell voicings, drop 2/3 et enchaînement des accords." },
        { slug: "comping", title: "Accompagnement", desc: "Freddie Green, swing, bossa, ballades, valses et jeu avec un contrebassiste." },
        { slug: "improvisation", title: "Improvisation & transcription", desc: "Notes d'accords, guide tones, phrasé, transcription et plan de 10 jours." },
        { slug: "chord-melody", title: "Chord melody & guitare solo", desc: "La mélodie d'abord, lignes de basse, shell voicings, fills et méthode en cinq niveaux." },
        { slug: "practice", title: "Oreille, pratique & progrès", desc: "Pratique délibérée, routines 30/60/90 min, enregistrement, mémoire et étiquette de jam." },
        { slug: "history", title: "Brève histoire de la guitare jazz", desc: "D'Eddie Lang et Django à Charlie Christian, Wes, Jim Hall, Joe Pass et les modernes." },
        { slug: "glossary", title: "Glossaire & FAQ", desc: "100+ termes, lecture des symboles d'accords et les 20 questions des autodidactes." },
      ],
    },
    roadmap: {
      kicker: "Le parcours",
      title: "Un chemin de 12 mois",
      intro:
        "Quatre phases, des points de contrôle hebdomadaires et une règle simple : si vous ne pouvez pas l'utiliser dans un morceau, ce n'est pas encore appris.",
      phases: [
        {
          number: "01",
          title: "Construire la grammaire",
          subtitle: "Son, temps et trois premiers thèmes",
          goal: "Jouer trois standards avec un swing stable et un solo simple.",
          focus: ["Posture & médiator", "Croches swing", "Shell voicings", "Blues 12 mesures", "Autumn Leaves", "S'enregistrer"],
        },
        {
          number: "02",
          title: "Élargir le vocabulaire",
          subtitle: "Du jeu au discours",
          goal: "Utiliser notes d'accords, arpèges et approches pour construire des lignes sur cinq thèmes.",
          focus: ["Notes d'accords", "Arpèges", "Notes d'approche", "Drop 2", "Rythmes de comping", "Transcription"],
        },
        {
          number: "03",
          title: "Standards & langage",
          subtitle: "Mettre le vocabulaire dans la musique",
          goal: "Connaître dix thèmes, entendre les formes courantes et finir deux arrangements chord melody.",
          focus: ["Langage bebop", "Mineure mélodique", "Diminuée", "Chord melody", "Dix thèmes", "Jam"],
        },
        {
          number: "04",
          title: "Scène & voix personnelle",
          subtitle: "Du jeu à un son personnel",
          goal: "Préparer 30 minutes de concert, enregistrer 3–5 démos et choisir la suite.",
          focus: ["Répertoire", "Scène", "Enregistrement", "Voix personnelle", "Enseigner", "Prochain plan"],
        },
      ],
      cta: "Voir le parcours complet de 52 semaines (chinois)",
    },
    tunes: {
      kicker: "Répertoire",
      title: "Les douze premiers thèmes",
      intro:
        "Ils couvrent ii–V–I, blues, bossa, ballades et rhythm changes. Apprenez la mélodie, la forme et un solo simple avant de passer au suivant.",
      labels: { tune: "Thème", composer: "Compositeur", key: "Tonalité", form: "Forme" },
      cta: "Voir les 40 thèmes (chinois)",
    },
    courses: {
      kicker: "Cours gratuits",
      title: "Commencez par ces six",
      intro: "Regardez une leçon, fermez la vidéo, pratiquez dix minutes. Collectionner des cours n'est pas apprendre.",
      items: [
        { id: "v-order", why: "La carte complète : quoi apprendre et dans quel ordre." },
        { id: "v-basic-chords", why: "Votre premier vocabulaire d'accords jazz, sans mémoriser des dizaines de formes." },
        { id: "v-swing", why: "Faire du swing quelque chose que l'on entend et que l'on travaille." },
        { id: "v-autumn-full", why: "Mélodie, accords, gammes et solo sur le premier standard idéal." },
        { id: "v-ear-training", why: "Une routine d'oreille concrète, pas des exercices d'intervalles abstraits." },
        { id: "v-jazz-blues", why: "Le langage du jazz blues : le meilleur laboratoire d'improvisation." },
      ],
    },
    players: {
      kicker: "Écoute",
      title: "Écoutez large, pillez avec goût",
      intro: "Trouvez les sons que vous aimez vraiment avant de choisir le langage à étudier.",
      items: [
        { id: "django-reinhardt", why: "Mélodie, ornements et un swing qui sonne encore vivant." },
        { id: "charlie-christian", why: "La naissance de la ligne de solo à la guitare électrique." },
        { id: "wes-montgomery", why: "Pouce, octaves et chord melody : la voix la plus influente." },
        { id: "jim-hall", why: "L'espace, l'interaction et l'art de laisser des notes dehors." },
      ],
    },
    books: {
      kicker: "La bibliothèque",
      title: "Quatre livres pour commencer",
      intro: "Une méthode, une référence d'harmonie, un livre de concepts, un recueil de thèmes. N'en achetez pas dix d'un coup.",
      items: [
        { id: "jody-fisher", why: "Une méthode claire en quatre volumes, du débutant à l'avancé." },
        { id: "advancing-guitarist", why: "Le classique pour sortir des formes et penser comme un musicien." },
        { id: "jazz-theory-book", why: "La référence d'harmonie que presque tous les jazzmen finissent par lire." },
        { id: "real-book-1", why: "Le répertoire de standards auquel vous reviendrez toujours." },
      ],
    },
    tools: {
      kicker: "Boîte à outils",
      title: "De petits outils, sans inscription",
      intro: "L'interface des outils est en chinois, mais les contrôles sont simples et tout fonctionne dans le navigateur.",
      items: [
        { name: "Explorateur de manche", desc: "Visualisez gammes et accords, degrés ou notes, cliquez pour entendre." },
        { name: "Métronome", desc: "Accents 2 & 4, subdivisions, swing et tap tempo." },
        { name: "Playbacks", desc: "ii–V–I, jazz blues et rhythm changes générés en Web Audio." },
        { name: "Minuteur", desc: "Routines de 30/60/90 minutes qui avancent bloc par bloc." },
        { name: "Quiz d'oreille", desc: "Intervalles et qualités d'accords, cinq minutes par jour." },
      ],
    },
    deep: {
      title: "Envie d'aller plus loin ?",
      body:
        "Les 11 chapitres détaillés et la boîte à outils complète sont en chinois. Ce guide localisé vous donne la carte ; les chapitres chinois vous donnent le détail.",
      cta: "Ouvrir la base de connaissances chinoise",
    },
  },

  es: {
    meta: {
      title: "Guía de guitarra jazz",
      description:
        "Una guía localizada para aprender guitarra jazz: sonido, swing, armonía, 40 standards, cursos gratis, guitarristas, libros y herramientas.",
    },
    hero: {
      eyebrow: "Una guía de campo para guitarristas curiosos",
      title: "La guitarra jazz,\nen pequeños pasos.",
      lead:
        "Un mapa práctico para autodidactas: encontrar un sonido, swingear, entender las armonías y tocar con otras personas.",
      primary: "Empezar por la ruta",
      secondary: "Leer la guía",
      meta: ["Sin experiencia previa", "40 standards", "Cursos gratis", "Herramientas interactivas"],
    },
    pillars: {
      kicker: "Los tres pilares",
      title: "Primero ajusta estas tres cosas",
      intro: "La guitarra jazz no es una carrera por coleccionar escalas. Estos tres hábitos deciden si suenas a la música.",
      items: [
        {
          title: "El tiempo antes que las escalas",
          body: "El swing, el 2 & 4, el fraseo y el espacio importan más que cinco modos nuevos. Mete el metrónomo en 2 & 4 y escucha el ride.",
        },
        {
          title: "El tema es el vehículo",
          body: "Un concepto solo es tuyo cuando lo usas en un tema. Cada acorde, línea o ritmo nuevo debe aterrizar en una canción que estés trabajando.",
        },
        {
          title: "El oído marca el techo",
          body: "Lo que puedes oír es lo que puedes tocar. Escucha, canta, transcribe. Esas habilidades lentas hacen que tus solos hablen.",
        },
      ],
    },
    chapters: {
      kicker: "La base de conocimiento",
      title: "Once capítulos, un mapa",
      intro:
        "Los capítulos completos están en chino. Cada tarjeta resume el contenido en español; abre el capítulo chino para el detalle completo.",
      items: [
        { slug: "foundations", title: "Instrumento, sonido y cuerpo", desc: "Los roles del guitarrista de jazz, archtop o solid body, cuerdas, amplis, postura y púa." },
        { slug: "rhythm", title: "Ritmo y swing", desc: "2 & 4, la corchea swing, el comping de Freddie Green, síncopa y feel." },
        { slug: "harmony", title: "Armonía y símbolos de acordes", desc: "Intervalos, acordes de séptima, extensiones, ii–V–I, sustituciones y conducción de voces." },
        { slug: "scales", title: "Escalas, arpegios y lenguaje", desc: "Modos, menor melódica, disminuida, pentatónica, notas de aproximación y motivos." },
        { slug: "fretboard", title: "Diapasón y voicings", desc: "CAGED, cinco posiciones, shell voicings, drop 2/3 y conexión de acordes." },
        { slug: "comping", title: "Acompañamiento", desc: "Freddie Green, swing, bossa, baladas, vals y tocar con contrabajista." },
        { slug: "improvisation", title: "Improvisación y transcripción", desc: "Notas del acorde, guide tones, fraseo, transcripción y plan de 10 días." },
        { slug: "chord-melody", title: "Chord melody y guitarra solista", desc: "La melodía primero, líneas de bajo, shell voicings, fills y método de cinco niveles." },
        { slug: "practice", title: "Oído, práctica y progreso", desc: "Práctica deliberada, rutinas 30/60/90, grabación, memoria y etiqueta de jam." },
        { slug: "history", title: "Breve historia de la guitarra jazz", desc: "De Eddie Lang y Django a Charlie Christian, Wes, Jim Hall, Joe Pass y los modernos." },
        { slug: "glossary", title: "Glosario y FAQ", desc: "Más de 100 términos, lectura de símbolos y las 20 preguntas más comunes." },
      ],
    },
    roadmap: {
      kicker: "La ruta",
      title: "Un camino de 12 meses",
      intro:
        "Cuatro fases, puntos de control semanales y una regla simple: si no puedes usarlo en un tema, todavía no lo has aprendido.",
      phases: [
        {
          number: "01",
          title: "Construir la gramática",
          subtitle: "Sonido, tiempo y tus tres primeros temas",
          goal: "Tocar tres standards con swing estable y un solo sencillo.",
          focus: ["Postura y púa", "Corcheas swing", "Shell voicings", "Blues de 12 compases", "Autumn Leaves", "Grabarte"],
        },
        {
          number: "02",
          title: "Ampliar el vocabulario",
          subtitle: "De tocar a decir algo",
          goal: "Usar notas de acorde, arpegios y aproximaciones para crear líneas en cinco temas.",
          focus: ["Notas de acorde", "Arpegios", "Aproximaciones", "Drop 2", "Ritmos de comping", "Transcripción"],
        },
        {
          number: "03",
          title: "Standards y lenguaje",
          subtitle: "Poner el vocabulario en la música",
          goal: "Conocer diez temas, oír las formas comunes y terminar dos arreglos chord melody.",
          focus: ["Lenguaje bebop", "Menor melódica", "Disminuida", "Chord melody", "Diez temas", "Jam"],
        },
        {
          number: "04",
          title: "Escenario y voz propia",
          subtitle: "De tocar a tener un sonido",
          goal: "Preparar 30 minutos de set, grabar 3–5 demos y elegir el siguiente paso.",
          focus: ["Repertorio", "Directo", "Grabación", "Voz propia", "Enseñar", "Próximo plan"],
        },
      ],
      cta: "Ver la ruta completa de 52 semanas (chino)",
    },
    tunes: {
      kicker: "Repertorio",
      title: "Los primeros doce temas",
      intro:
        "Cubren ii–V–I, blues, bossa, baladas y rhythm changes. Aprende la melodía, la forma y un solo sencillo antes de pasar al siguiente.",
      labels: { tune: "Tema", composer: "Compositor", key: "Tonalidad", form: "Forma" },
      cta: "Ver los 40 temas (chino)",
    },
    courses: {
      kicker: "Cursos gratis",
      title: "Empieza con estos seis",
      intro: "Mira una lección, cierra el vídeo y practica diez minutos. Coleccionar cursos no es aprender.",
      items: [
        { id: "v-order", why: "El mapa completo: qué aprender y en qué orden." },
        { id: "v-basic-chords", why: "Tu primer vocabulario útil de acordes jazz, sin memorizar decenas de formas." },
        { id: "v-swing", why: "Convertir el swing en algo que puedes oír y practicar." },
        { id: "v-autumn-full", why: "Melodía, acordes, escalas y solo en el primer standard ideal." },
        { id: "v-ear-training", why: "Una rutina de oído práctica, no ejercicios abstractos de intervalos." },
        { id: "v-jazz-blues", why: "El lenguaje del jazz blues: el mejor laboratorio para improvisar." },
      ],
    },
    players: {
      kicker: "Escucha",
      title: "Escucha mucho, roba con criterio",
      intro: "Encuentra los sonidos que de verdad te gustan antes de decidir qué lenguaje estudiar.",
      items: [
        { id: "django-reinhardt", why: "Melodía, ornamentación y un swing que sigue vivo." },
        { id: "charlie-christian", why: "El nacimiento de la línea de solo en guitarra eléctrica." },
        { id: "wes-montgomery", why: "Pulgar, octavas y chord melody: la voz más influyente." },
        { id: "jim-hall", why: "Espacio, interacción y el arte de dejar notas fuera." },
      ],
    },
    books: {
      kicker: "La biblioteca",
      title: "Cuatro libros para empezar",
      intro: "Un método, una referencia de armonía, un libro de conceptos y un cancionero. No compres diez de golpe.",
      items: [
        { id: "jody-fisher", why: "Un método claro en cuatro volúmenes, de principiante a avanzado." },
        { id: "advancing-guitarist", why: "El clásico para salir de las formas y pensar como músico." },
        { id: "jazz-theory-book", why: "La referencia de armonía que casi todos los jazzistas acaban leyendo." },
        { id: "real-book-1", why: "El repertorio de standards al que siempre volverás." },
      ],
    },
    tools: {
      kicker: "Caja de herramientas",
      title: "Herramientas pequeñas, sin registro",
      intro: "La interfaz de las herramientas está en chino, pero los controles son simples y todo funciona en el navegador.",
      items: [
        { name: "Explorador del diapasón", desc: "Visualiza escalas y acordes, grados o notas, pulsa para oír." },
        { name: "Metrónomo", desc: "Acentos 2 & 4, subdivisiones, swing y tap tempo." },
        { name: "Pistas de acompañamiento", desc: "ii–V–I, jazz blues y rhythm changes generados con Web Audio." },
        { name: "Temporizador", desc: "Rutinas de 30/60/90 minutos que avanzan bloque a bloque." },
        { name: "Quiz de oído", desc: "Intervalos y cualidades de acordes, cinco minutos al día." },
      ],
    },
    deep: {
      title: "¿Quieres la profundidad completa?",
      body:
        "Los 11 capítulos detallados y la caja de herramientas completa están en chino. Esta guía localizada te da el mapa; los capítulos chinos te dan el detalle.",
      cta: "Abrir la base de conocimiento en chino",
    },
  },

  it: {
    meta: {
      title: "Guida alla chitarra jazz",
      description:
        "Una guida localizzata per imparare la chitarra jazz: suono, swing, armonia, 40 standard, corsi gratuiti, chitarristi, libri e strumenti.",
    },
    hero: {
      eyebrow: "Una guida sul campo per chitarristi curiosi",
      title: "La chitarra jazz,\na piccoli pezzi.",
      lead:
        "Una mappa pratica per autodidatti: trovare un suono, swingare, capire le armonie e suonare con altre persone.",
      primary: "Inizia dal percorso",
      secondary: "Leggi la guida",
      meta: ["Nessuna esperienza richiesta", "40 standard", "Corsi gratuiti", "Strumenti interattivi"],
    },
    pillars: {
      kicker: "I tre pilastri",
      title: "Prima sistema queste tre cose",
      intro: "La chitarra jazz non è una corsa alle scale. Queste tre abitudini decidono se suoni come la musica.",
      items: [
        {
          title: "Il tempo prima delle scale",
          body: "Swing, 2 & 4, fraseggio e spazio contano più di cinque modi in più. Metti il metronomo su 2 & 4 e ascolta il ride.",
        },
        {
          title: "Il brano è il veicolo",
          body: "Un concetto diventa tuo solo quando lo usi in un brano. Ogni nuovo accordo, linea o ritmo deve finire in un pezzo che stai studiando.",
        },
        {
          title: "L'orecchio fissa il limite",
          body: "Quello che senti è quello che puoi suonare. Ascolta, canta, trascrivi. Queste abilità lente fanno parlare i tuoi assoli.",
        },
      ],
    },
    chapters: {
      kicker: "Le basi",
      title: "Undici capitoli, una mappa",
      intro:
        "I capitoli completi sono in cinese. Ogni scheda qui riassume in italiano; apri il capitolo cinese per il dettaglio completo.",
      items: [
        { slug: "foundations", title: "Strumento, suono e corpo", desc: "I ruoli del chitarrista jazz, archtop o solid body, corde, ampli, postura e plettro." },
        { slug: "rhythm", title: "Ritmo e swing", desc: "2 & 4, l'ottavo swing, il comping di Freddie Green, sincope e feel." },
        { slug: "harmony", title: "Armonia e simboli degli accordi", desc: "Intervalli, accordi di settima, estensioni, ii–V–I, sostituzioni e conduzione delle voci." },
        { slug: "scales", title: "Scale, arpeggi e linguaggio", desc: "Modi, minore melodica, diminuita, pentatonica, note di avvicinamento e motivi." },
        { slug: "fretboard", title: "Manico e voicing", desc: "CAGED, cinque posizioni, shell voicing, drop 2/3 e collegamento degli accordi." },
        { slug: "comping", title: "Accompagnamento", desc: "Freddie Green, swing, bossa, ballad, valzer e suonare con il contrabbassista." },
        { slug: "improvisation", title: "Improvvisazione e trascrizione", desc: "Note dell'accordo, guide tone, fraseggio, trascrizione e piano di 10 giorni." },
        { slug: "chord-melody", title: "Chord melody e chitarra solista", desc: "Prima la melodia, linee di basso, shell voicing, fill e metodo in cinque livelli." },
        { slug: "practice", title: "Orecchio, pratica e progressi", desc: "Pratica deliberata, routine 30/60/90, registrazione, memoria e galateo della jam." },
        { slug: "history", title: "Breve storia della chitarra jazz", desc: "Da Eddie Lang e Django a Charlie Christian, Wes, Jim Hall, Joe Pass e i moderni." },
        { slug: "glossary", title: "Glossario e FAQ", desc: "Oltre 100 termini, lettura dei simboli e le 20 domande più comuni." },
      ],
    },
    roadmap: {
      kicker: "Il percorso",
      title: "Un cammino di 12 mesi",
      intro:
        "Quattro fasi, checkpoint settimanali e una regola semplice: se non sai usarlo in un brano, non lo hai ancora imparato.",
      phases: [
        {
          number: "01",
          title: "Costruire la grammatica",
          subtitle: "Suono, tempo e i primi tre brani",
          goal: "Suonare tre standard con swing stabile e un assolo semplice.",
          focus: ["Postura e plettro", "Ottavi swing", "Shell voicing", "Blues di 12 battute", "Autumn Leaves", "Registrarti"],
        },
        {
          number: "02",
          title: "Ampliare il vocabolario",
          subtitle: "Dal suonare al dire qualcosa",
          goal: "Usare note degli accordi, arpeggi e avvicinamenti per costruire linee su cinque brani.",
          focus: ["Note degli accordi", "Arpeggi", "Note di avvicinamento", "Drop 2", "Ritmi di comping", "Trascrizione"],
        },
        {
          number: "03",
          title: "Standard e linguaggio",
          subtitle: "Mettere il vocabolario nella musica",
          goal: "Conoscere dieci brani, sentire le forme comuni e finire due arrangiamenti chord melody.",
          focus: ["Linguaggio bebop", "Minore melodica", "Diminuita", "Chord melody", "Dieci brani", "Jam"],
        },
        {
          number: "04",
          title: "Palco e voce personale",
          subtitle: "Dal suonare all'avere un suono",
          goal: "Preparare 30 minuti di set, registrare 3–5 demo e scegliere la prossima direzione.",
          focus: ["Repertorio", "Palco", "Registrazione", "Voce personale", "Insegnare", "Prossimo piano"],
        },
      ],
      cta: "Vedi il percorso completo di 52 settimane (cinese)",
    },
    tunes: {
      kicker: "Repertorio",
      title: "I primi dodici brani",
      intro:
        "Coprono ii–V–I, blues, bossa, ballad e rhythm changes. Impara melodia, forma e un assolo semplice prima di passare avanti.",
      labels: { tune: "Brano", composer: "Compositore", key: "Tonalità", form: "Forma" },
      cta: "Sfoglia tutti i 40 brani (cinese)",
    },
    courses: {
      kicker: "Corsi gratuiti",
      title: "Inizia da questi sei",
      intro: "Guarda una lezione, chiudi il video e pratica dieci minuti. Collezionare corsi non è imparare.",
      items: [
        { id: "v-order", why: "La mappa completa: cosa imparare e in che ordine." },
        { id: "v-basic-chords", why: "Il primo vocabolario utile di accordi jazz, senza memorizzare decine di forme." },
        { id: "v-swing", why: "Trasformare lo swing in qualcosa che puoi sentire e praticare." },
        { id: "v-autumn-full", why: "Melodia, accordi, scale e assolo sul primo standard ideale." },
        { id: "v-ear-training", why: "Una routine d'orecchio concreta, non esercizi astratti di intervalli." },
        { id: "v-jazz-blues", why: "Il linguaggio del jazz blues: il miglior laboratorio per improvvisare." },
      ],
    },
    players: {
      kicker: "Ascolto",
      title: "Ascolta tanto, ruba con criterio",
      intro: "Trova i suoni che ami davvero prima di decidere quale linguaggio studiare.",
      items: [
        { id: "django-reinhardt", why: "Melodia, ornamenti e uno swing ancora vivo." },
        { id: "charlie-christian", why: "La nascita della linea di assolo nella chitarra elettrica." },
        { id: "wes-montgomery", why: "Pollice, ottave e chord melody: la voce più influente." },
        { id: "jim-hall", why: "Spazio, interazione e l'arte di lasciare fuori le note." },
      ],
    },
    books: {
      kicker: "La biblioteca",
      title: "Quattro libri per iniziare",
      intro: "Un metodo, un riferimento di armonia, un libro di concetti e un canzoniere. Non comprarne dieci insieme.",
      items: [
        { id: "jody-fisher", why: "Un metodo chiaro in quattro volumi, dal principiante all'avanzato." },
        { id: "advancing-guitarist", why: "Il classico per uscire dalle forme e pensare come un musicista." },
        { id: "jazz-theory-book", why: "Il riferimento di armonia che quasi tutti i jazzisti finiscono per leggere." },
        { id: "real-book-1", why: "Il repertorio di standard a cui tornerai sempre." },
      ],
    },
    tools: {
      kicker: "Cassetta degli attrezzi",
      title: "Piccoli strumenti, senza registrazione",
      intro: "L'interfaccia degli strumenti è in cinese, ma i controlli sono semplici e tutto funziona nel browser.",
      items: [
        { name: "Esploratore del manico", desc: "Visualizza scale e accordi, gradi o note, tocca per ascoltare." },
        { name: "Metronomo", desc: "Accenti 2 & 4, suddivisioni, swing e tap tempo." },
        { name: "Basi di accompagnamento", desc: "ii–V–I, jazz blues e rhythm changes generati con Web Audio." },
        { name: "Timer di pratica", desc: "Routine da 30/60/90 minuti che avanzano blocco per blocco." },
        { name: "Quiz d'orecchio", desc: "Intervalli e qualità degli accordi, cinque minuti al giorno." },
      ],
    },
    deep: {
      title: "Vuoi la profondità completa?",
      body:
        "Gli 11 capitoli dettagliati e la cassetta degli attrezzi completa sono in cinese. Questa guida localizzata ti dà la mappa; i capitoli cinesi ti danno il dettaglio.",
      cta: "Apri la base di conoscenza in cinese",
    },
  },

  de: {
    meta: {
      title: "Jazzgitarren-Guide",
      description:
        "Ein lokalisierter Leitfaden zum Jazzgitarrenlernen: Klang, Swing, Harmonik, 40 Standards, kostenlose Kurse, Gitarristen, Bücher und Tools.",
    },
    hero: {
      eyebrow: "Ein Feldführer für neugierige Gitarristen",
      title: "Jazzgitarre,\nin kleinen Tagesportionen.",
      lead:
        "Eine praktische Landkarte für Autodidakten: einen Klang finden, swingen, die Changes verstehen und mit anderen spielen.",
      primary: "Mit dem Lernplan starten",
      secondary: "Leitfaden lesen",
      meta: ["Ohne Vorkenntnisse", "40 Standards", "Kostenlose Kurse", "Interaktive Tools"],
    },
    pillars: {
      kicker: "Die drei Säulen",
      title: "Diese drei Dinge zuerst",
      intro: "Jazzgitarre ist kein Wettlauf um Skalen. Diese drei Gewohnheiten entscheiden, ob es nach Musik klingt.",
      items: [
        {
          title: "Zeit vor Skalen",
          body: "Swing, 2 & 4, Phrasierung und Raum sind wichtiger als fünf weitere Modi. Metronom auf 2 & 4 und höre auf das Ride.",
        },
        {
          title: "Stücke sind das Vehikel",
          body: "Ein Konzept wird erst deins, wenn du es in einem Stück benutzt. Jeder neue Akkord, jede Linie und jeder Rhythmus muss in einem Tune landen.",
        },
        {
          title: "Das Ohr setzt die Grenze",
          body: "Was du hören kannst, kannst du spielen. Hören, singen, transkribieren. Diese langsamen Fähigkeiten lassen deine Soli sprechen.",
        },
      ],
    },
    chapters: {
      kicker: "Die Wissensbasis",
      title: "Elf Kapitel, eine Karte",
      intro:
        "Die ausführlichen Kapitel sind auf Chinesisch. Jede Karte fasst das Thema auf Deutsch zusammen; für alle Details öffne das chinesische Kapitel.",
      items: [
        { slug: "foundations", title: "Instrument, Klang & Körper", desc: "Rollen des Jazzgitarristen, Archtop oder Solid Body, Saiten, Amps, Haltung und Anschlag." },
        { slug: "rhythm", title: "Rhythmus & Swing", desc: "2 & 4, Swing-Achtel, Freddie-Green-Comping, Synkopen und Feel." },
        { slug: "harmony", title: "Harmonik & Akkordsymbole", desc: "Intervalle, Septakkorde, Erweiterungen, ii–V–I, Substitutionen und Stimmführung." },
        { slug: "scales", title: "Skalen, Arpeggien & Sprache", desc: "Modi, melodisch Moll, vermindert, Pentatonik, Approach Notes und Motive." },
        { slug: "fretboard", title: "Griffbrett & Voicings", desc: "CAGED, fünf Positionen, Shell Voicings, Drop 2/3 und Akkordverbindungen." },
        { slug: "comping", title: "Comping", desc: "Freddie Green, Swing, Bossa, Balladen, Walzer und Zusammenspiel mit Bass." },
        { slug: "improvisation", title: "Improvisation & Transkription", desc: "Chord Tones, Guide Tones, Phrasierung, Transkription und 10-Tage-Plan." },
        { slug: "chord-melody", title: "Chord Melody & Sologitarre", desc: "Melodie zuerst, Basslinien, Shell Voicings, Fills und eine Fünf-Stufen-Methode." },
        { slug: "practice", title: "Ohr, Üben & Fortschritt", desc: "Deliberate Practice, 30/60/90-Minuten-Routinen, Aufnahmen, Gedächtnis und Jam-Etikette." },
        { slug: "history", title: "Kurze Geschichte der Jazzgitarre", desc: "Von Eddie Lang und Django bis Charlie Christian, Wes, Jim Hall, Joe Pass und den Modernen." },
        { slug: "glossary", title: "Glossar & FAQ", desc: "100+ Begriffe, Akkordsymbole und die 20 häufigsten Fragen von Autodidakten." },
      ],
    },
    roadmap: {
      kicker: "Der Lernplan",
      title: "Ein Weg über 12 Monate",
      intro:
        "Vier Phasen, wöchentliche Checkpoints und eine einfache Regel: Wenn du es nicht in einem Stück benutzen kannst, hast du es noch nicht gelernt.",
      phases: [
        {
          number: "01",
          title: "Grammatik aufbauen",
          subtitle: "Klang, Zeit und die ersten drei Stücke",
          goal: "Drei Standards mit stabilem Swing und einem einfachen Solo spielen.",
          focus: ["Haltung & Anschlag", "Swing-Achtel", "Shell Voicings", "12-Takt-Blues", "Autumn Leaves", "Aufnehmen"],
        },
        {
          number: "02",
          title: "Vokabular erweitern",
          subtitle: "Vom Spielen zum Aussagen",
          goal: "Mit Chord Tones, Arpeggien und Approach Notes Linien über fünf Stücke bauen.",
          focus: ["Chord Tones", "Arpeggien", "Approach Notes", "Drop 2", "Comping-Rhythmen", "Transkription"],
        },
        {
          number: "03",
          title: "Standards & Sprache",
          subtitle: "Das Vokabular in echte Musik bringen",
          goal: "Zehn Stücke kennen, Formen hören und zwei Chord-Melody-Arrangements fertigstellen.",
          focus: ["Bebop-Sprache", "Melodisch Moll", "Vermindert", "Chord Melody", "Zehn Stücke", "Jam"],
        },
        {
          number: "04",
          title: "Bühne & eigene Stimme",
          subtitle: "Vom Spielen zum eigenen Klang",
          goal: "Ein 30-Minuten-Set vorbereiten, 3–5 Demos aufnehmen und die nächste Richtung wählen.",
          focus: ["Repertoire", "Auftritt", "Aufnahme", "Eigene Stimme", "Unterrichten", "Nächster Plan"],
        },
      ],
      cta: "Den vollständigen 52-Wochen-Plan ansehen (Chinesisch)",
    },
    tunes: {
      kicker: "Repertoire",
      title: "Die ersten zwölf Stücke",
      intro:
        "Sie decken ii–V–I, Blues, Bossa, Balladen und Rhythm Changes ab. Lerne Melodie, Form und ein einfaches Solo, bevor du weitergehst.",
      labels: { tune: "Stück", composer: "Komponist", key: "Tonart", form: "Form" },
      cta: "Alle 40 Stücke ansehen (Chinesisch)",
    },
    courses: {
      kicker: "Kostenlose Kurse",
      title: "Starte mit diesen sechs",
      intro: "Schau eine Lektion, schließe das Video und übe zehn Minuten. Kurse sammeln ist kein Lernen.",
      items: [
        { id: "v-order", why: "Die ganze Karte: was lernen und in welcher Reihenfolge." },
        { id: "v-basic-chords", why: "Das erste brauchbare Jazz-Akkordvokabular, ohne Dutzende Formen auswendig zu lernen." },
        { id: "v-swing", why: "Swing von einem Rätsel zu etwas Hörbarem machen, das man üben kann." },
        { id: "v-autumn-full", why: "Melodie, Akkorde, Skalen und Solo auf dem idealen ersten Standard." },
        { id: "v-ear-training", why: "Eine konkrete Gehör-Routine, keine abstrakten Intervallübungen." },
        { id: "v-jazz-blues", why: "Die Jazz-Blues-Sprache: das beste Labor für Improvisation." },
      ],
    },
    players: {
      kicker: "Hören",
      title: "Breit hören, gezielt stehlen",
      intro: "Finde die Klänge, die du wirklich liebst, bevor du entscheidest, wessen Sprache du lernst.",
      items: [
        { id: "django-reinhardt", why: "Melodie, Verzierungen und ein Swing, der noch lebendig klingt." },
        { id: "charlie-christian", why: "Die Geburt der E-Gitarren-Sololinie." },
        { id: "wes-montgomery", why: "Daumen, Oktaven und Chord Melody: die einflussreichste Stimme." },
        { id: "jim-hall", why: "Raum, Interaktion und die Kunst, Noten wegzulassen." },
      ],
    },
    books: {
      kicker: "Die Bibliothek",
      title: "Vier Bücher für den Anfang",
      intro: "Eine Methode, eine Harmonielehre, ein Konzeptbuch, ein Repertoirebuch. Kauf nicht zehn auf einmal.",
      items: [
        { id: "jody-fisher", why: "Eine klare vierbändige Methode von Anfang bis Fortgeschritten." },
        { id: "advancing-guitarist", why: "Der Klassiker, um aus Formen auszubrechen und wie ein Musiker zu denken." },
        { id: "jazz-theory-book", why: "Die Harmonielehre, die fast jeder Jazzmusiker irgendwann liest." },
        { id: "real-book-1", why: "Das Standard-Repertoire, zu dem du immer zurückkommst." },
      ],
    },
    tools: {
      kicker: "Übungs-Toolbox",
      title: "Kleine Tools, keine Anmeldung",
      intro: "Die Tool-Oberfläche ist derzeit auf Chinesisch, aber die Bedienung ist einfach und alles läuft im Browser.",
      items: [
        { name: "Griffbrett-Explorer", desc: "Skalen und Akkorde visualisieren, Stufen oder Noten, zum Hören antippen." },
        { name: "Metronom", desc: "2 & 4-Betonung, Unterteilungen, Swing und Tap Tempo." },
        { name: "Playbacks", desc: "ii–V–I, Jazz Blues und Rhythm Changes mit Web Audio." },
        { name: "Übungs-Timer", desc: "30/60/90-Minuten-Routinen, die Block für Block weiterlaufen." },
        { name: "Gehör-Quiz", desc: "Intervalle und Akkordqualitäten, fünf Minuten am Tag." },
      ],
    },
    deep: {
      title: "Willst du die ganze Tiefe?",
      body:
        "Die 11 ausführlichen Kapitel und die komplette Toolbox sind derzeit auf Chinesisch. Dieser lokalisierte Leitfaden gibt dir die Karte; die chinesischen Kapitel geben dir die Details.",
      cta: "Chinesische Wissensbasis öffnen",
    },
  },

  pt: {
    meta: {
      title: "Guia de guitarra jazz",
      description:
        "Um guia localizado para aprender guitarra jazz: som, swing, harmonia, 40 standards, cursos gratuitos, guitarristas, livros e ferramentas.",
    },
    hero: {
      eyebrow: "Um guia de campo para guitarristas curiosos",
      title: "A guitarra jazz,\nem pequenos pedaços.",
      lead:
        "Um mapa prático para autodidatas: encontrar um som, swingar, entender as harmonias e tocar com outras pessoas.",
      primary: "Começar pelo percurso",
      secondary: "Ler o guia",
      meta: ["Sem experiência prévia", "40 standards", "Cursos gratuitos", "Ferramentas interativas"],
    },
    pillars: {
      kicker: "Os três pilares",
      title: "Ajuste estas três coisas primeiro",
      intro: "A guitarra jazz não é uma corrida por escalas. Estes três hábitos decidem se você soa como a música.",
      items: [
        {
          title: "Tempo antes das escalas",
          body: "Swing, 2 & 4, fraseado e espaço importam mais do que cinco modos novos. Coloque o metrônomo em 2 & 4 e ouça o ride.",
        },
        {
          title: "O tema é o veículo",
          body: "Um conceito só se torna seu quando você o usa em um tema. Cada acorde, linha ou ritmo novo deve aterrissar em uma música que você está estudando.",
        },
        {
          title: "O ouvido define o teto",
          body: "O que você ouve é o que você pode tocar. Ouça, cante, transcreva. Essas habilidades lentas fazem seus solos falarem.",
        },
      ],
    },
    chapters: {
      kicker: "A base de conhecimento",
      title: "Onze capítulos, um mapa",
      intro:
        "Os capítulos completos estão em chinês. Cada cartão resume em português; abra o capítulo chinês para o detalhe completo.",
      items: [
        { slug: "foundations", title: "Instrumento, som e corpo", desc: "Os papéis do guitarrista de jazz, archtop ou solid body, cordas, amplis, postura e palheta." },
        { slug: "rhythm", title: "Ritmo e swing", desc: "2 & 4, a colcheia swing, o comping de Freddie Green, síncope e feel." },
        { slug: "harmony", title: "Harmonia e símbolos de acordes", desc: "Intervalos, acordes de sétima, extensões, ii–V–I, substituições e condução de vozes." },
        { slug: "scales", title: "Escalas, arpejos e linguagem", desc: "Modos, menor melódica, diminuta, pentatônica, notas de aproximação e motivos." },
        { slug: "fretboard", title: "Braço e voicings", desc: "CAGED, cinco posições, shell voicings, drop 2/3 e conexão de acordes." },
        { slug: "comping", title: "Acompanhamento", desc: "Freddie Green, swing, bossa, baladas, valsa e tocar com baixista." },
        { slug: "improvisation", title: "Improvisação e transcrição", desc: "Notas do acorde, guide tones, fraseado, transcrição e plano de 10 dias." },
        { slug: "chord-melody", title: "Chord melody e guitarra solo", desc: "Melodia primeiro, linhas de baixo, shell voicings, fills e método em cinco níveis." },
        { slug: "practice", title: "Ouvido, prática e progresso", desc: "Prática deliberada, rotinas 30/60/90, gravação, memória e etiqueta de jam." },
        { slug: "history", title: "Breve história da guitarra jazz", desc: "De Eddie Lang e Django a Charlie Christian, Wes, Jim Hall, Joe Pass e os modernos." },
        { slug: "glossary", title: "Glossário e FAQ", desc: "Mais de 100 termos, leitura de símbolos e as 20 perguntas mais comuns." },
      ],
    },
    roadmap: {
      kicker: "O percurso",
      title: "Um caminho de 12 meses",
      intro:
        "Quatro fases, checkpoints semanais e uma regra simples: se você não consegue usar em um tema, ainda não aprendeu.",
      phases: [
        {
          number: "01",
          title: "Construir a gramática",
          subtitle: "Som, tempo e os três primeiros temas",
          goal: "Tocar três standards com swing estável e um solo simples.",
          focus: ["Postura e palheta", "Colcheias swing", "Shell voicings", "Blues de 12 compassos", "Autumn Leaves", "Gravar-se"],
        },
        {
          number: "02",
          title: "Ampliar o vocabulário",
          subtitle: "De tocar a dizer algo",
          goal: "Usar notas de acorde, arpejos e aproximações para construir linhas em cinco temas.",
          focus: ["Notas de acorde", "Arpejos", "Aproximações", "Drop 2", "Ritmos de comping", "Transcrição"],
        },
        {
          number: "03",
          title: "Standards e linguagem",
          subtitle: "Colocar o vocabulário na música real",
          goal: "Conhecer dez temas, ouvir as formas comuns e terminar dois arranjos chord melody.",
          focus: ["Linguagem bebop", "Menor melódica", "Diminuta", "Chord melody", "Dez temas", "Jam"],
        },
        {
          number: "04",
          title: "Palco e voz própria",
          subtitle: "De tocar a ter um som",
          goal: "Preparar 30 minutos de set, gravar 3–5 demos e escolher a próxima direção.",
          focus: ["Repertório", "Palco", "Gravação", "Voz própria", "Ensinar", "Próximo plano"],
        },
      ],
      cta: "Ver o percurso completo de 52 semanas (chinês)",
    },
    tunes: {
      kicker: "Repertório",
      title: "Os primeiros doze temas",
      intro:
        "Eles cobrem ii–V–I, blues, bossa, baladas e rhythm changes. Aprenda a melodia, a forma e um solo simples antes de avançar.",
      labels: { tune: "Tema", composer: "Compositor", key: "Tonalidade", form: "Forma" },
      cta: "Ver todos os 40 temas (chinês)",
    },
    courses: {
      kicker: "Cursos gratuitos",
      title: "Comece com estes seis",
      intro: "Assista a uma aula, feche o vídeo e pratique dez minutos. Colecionar cursos não é aprender.",
      items: [
        { id: "v-order", why: "O mapa completo: o que aprender e em que ordem." },
        { id: "v-basic-chords", why: "Seu primeiro vocabulário útil de acordes jazz, sem decorar dezenas de formas." },
        { id: "v-swing", why: "Transformar o swing em algo que você ouve e pratica." },
        { id: "v-autumn-full", why: "Melodia, acordes, escalas e solo no primeiro standard ideal." },
        { id: "v-ear-training", why: "Uma rotina de ouvido prática, não exercícios abstratos de intervalos." },
        { id: "v-jazz-blues", why: "A linguagem do jazz blues: o melhor laboratório para improvisar." },
      ],
    },
    players: {
      kicker: "Escuta",
      title: "Ouça amplo, roube com critério",
      intro: "Encontre os sons que você realmente ama antes de decidir qual linguagem estudar.",
      items: [
        { id: "django-reinhardt", why: "Melodia, ornamentos e um swing que ainda soa vivo." },
        { id: "charlie-christian", why: "O nascimento da linha de solo na guitarra elétrica." },
        { id: "wes-montgomery", why: "Polegar, oitavas e chord melody: a voz mais influente." },
        { id: "jim-hall", why: "Espaço, interação e a arte de deixar notas de fora." },
      ],
    },
    books: {
      kicker: "A biblioteca",
      title: "Quatro livros para começar",
      intro: "Um método, uma referência de harmonia, um livro de conceitos e um cancioneiro. Não compre dez de uma vez.",
      items: [
        { id: "jody-fisher", why: "Um método claro em quatro volumes, do iniciante ao avançado." },
        { id: "advancing-guitarist", why: "O clássico para sair das formas e pensar como músico." },
        { id: "jazz-theory-book", why: "A referência de harmonia que quase todo jazzista acaba lendo." },
        { id: "real-book-1", why: "O repertório de standards ao qual você sempre voltará." },
      ],
    },
    tools: {
      kicker: "Caixa de ferramentas",
      title: "Ferramentas pequenas, sem cadastro",
      intro: "A interface das ferramentas está em chinês, mas os controles são simples e tudo roda no navegador.",
      items: [
        { name: "Explorador do braço", desc: "Visualize escalas e acordes, graus ou notas, toque para ouvir." },
        { name: "Metrônomo", desc: "Acentos 2 & 4, subdivisões, swing e tap tempo." },
        { name: "Playbacks", desc: "ii–V–I, jazz blues e rhythm changes gerados com Web Audio." },
        { name: "Cronômetro", desc: "Rotinas de 30/60/90 minutos que avançam bloco a bloco." },
        { name: "Quiz de ouvido", desc: "Intervalos e qualidades de acordes, cinco minutos por dia." },
      ],
    },
    deep: {
      title: "Quer a profundidade completa?",
      body:
        "Os 11 capítulos detalhados e a caixa de ferramentas completa estão em chinês. Este guia localizado dá o mapa; os capítulos chineses dão o detalhe.",
      cta: "Abrir a base de conhecimento em chinês",
    },
  },
};

export { FIRST_TWELVE, COURSES, PLAYERS, BOOKS };

// Central metadata for Thinking With… — edit show details, seasons, and series here.

export const show = {
  name: 'Thinking With…',
  tagline: 'A Rhetorical Theory Podcast',
  ethos:
    'A pedagogical experiment — an invitation to think along with the text, with us, and with each other.',
  description:
    '“Thinking With…” takes a major work of philosophy each season and reads it slowly, generously, and out loud. Three teachers of rhetorical theory follow the text where it leads, less to explain it than to think alongside it.',
  email: 'thinkingwithpod@gmail.com',
  copyrightHolder: 'Thinking With…',
};

export const listen = {
  apple:
    'https://podcasts.apple.com/us/podcast/thinking-with-a-rhetorical-theory-podcast/id1554914351',
  spotify: 'https://open.spotify.com/show/2LgqapM9QT9qYHAPVQ4p8K',
  rss: 'https://anchor.fm/s/4d44a168/podcast/rss',
};

export const hosts = [
  {
    name: 'Nate DeProspo',
    role: 'Visiting Assistant Professor, Oberlin College',
  },
  {
    name: 'John Muckelbauer',
    role: 'Associate Professor, University of South Carolina',
  },
  {
    name: 'Nathaniel Street',
    role: 'Assistant Professor, Mount Saint Vincent University',
  },
];

export type Season = {
  number: number;
  slug: string;
  /** The season's own wordmark / alias, e.g. "The Hegel Tapes". */
  alias: string;
  thinker: string;
  work: string;
  /** "Thinking With… <title>" as it appears in the brief. */
  title: string;
  cover?: string;
  accent: string;
  accentInk: string; // readable text color on the accent
  blurb: string;
  status?: 'published' | 'in-production';
};

export const seasons: Season[] = [
  {
    number: 6,
    slug: 'being-and-time',
    alias: 'Being & Time',
    thinker: 'Martin Heidegger',
    work: 'Being and Time',
    title: 'Thinking With… Being and Time',
    accent: '#3B5747',
    accentInk: '#F6F0E1',
    status: 'in-production',
    blurb:
      'Back to Heidegger — this time the big one. We return to the question that organizes everything else: what does it mean to be? New episodes are in production now.',
  },
  {
    number: 5,
    slug: 'the-gay-science',
    alias: 'Season of the Nietzsche',
    thinker: 'Friedrich Nietzsche',
    work: 'The Gay Science',
    title: 'Thinking With… The Gay Science',
    cover: '/covers/season-5.png',
    accent: '#B4392F',
    accentInk: '#F6F0E1',
    status: 'published',
    blurb:
      'Nietzsche’s most exuberant book — a science made gay, light, and dangerous. We follow the death of God, eternal return, and the strange cheerfulness of thinking that risks everything.',
  },
  {
    number: 4,
    slug: 'derrida',
    alias: 'Truth or Derrida',
    thinker: 'Jacques Derrida',
    work: 'Selected essays',
    title: 'Thinking With… selections from Jacques Derrida',
    cover: '/covers/season-4.png',
    accent: '#D2782E',
    accentInk: '#231a12',
    status: 'published',
    blurb:
      'From “Différance” to “Plato’s Pharmacy” to “Signature Event Context” — a season among Derrida’s essays, where writing, iterability, and the deconstructed present refuse to stay put.',
  },
  {
    number: 3,
    slug: 'what-is-called-thinking',
    alias: 'The Heidegger Files',
    thinker: 'Martin Heidegger',
    work: 'What Is Called Thinking?',
    title: 'Thinking With… “What is Called Thinking?”',
    cover: '/covers/season-3.png',
    accent: '#E4B53B',
    accentInk: '#231a12',
    status: 'published',
    blurb:
      'Heidegger asks what calls for thinking — and warns that what is most thought-provoking is that we are still not thinking. A season on mood, repetition, and learning to teach the unteachable.',
  },
  {
    number: 2,
    slug: 'the-logic-of-sense',
    alias: 'Deleuze Cast',
    thinker: 'Gilles Deleuze',
    work: 'The Logic of Sense',
    title: 'Thinking With… The Logic of Sense',
    cover: '/covers/season-2.jpg',
    accent: '#6E79E0',
    accentInk: '#F6F0E1',
    status: 'published',
    blurb:
      'Deleuze on surfaces, paradox, and the event. Sense is not beneath things but along them — a season spent on the edges where meaning is made and unmade.',
  },
  {
    number: 1,
    slug: 'phenomenology-of-spirit',
    alias: 'The Hegel Tapes',
    thinker: 'G. W. F. Hegel',
    work: 'Phenomenology of Spirit (Preface)',
    title: 'Thinking With… The Phenomenology of Spirit (preface)',
    cover: '/covers/season-1.jpg',
    accent: '#C25B45',
    accentInk: '#F6F0E1',
    status: 'published',
    blurb:
      'Where it began. We take the Preface to Hegel’s Phenomenology as a catalyst — on reading theory, the labor of the concept, and the styles of thinking that make a discipline.',
  },
];

export type Series = {
  slug: string;
  title: string;
  tagline: string;
  accent: string;
  blurb: string;
};

// Recurring segments from the brief — content to be added as it is produced.
export const series: Series[] = [
  {
    slug: 'nba',
    title: 'NBA',
    tagline: 'Thinking with basketball',
    accent: '#C5642A',
    // Confirmed: this segment is about the basketball NBA — the league as a text to think with.
    // Refine the framing with the hosts; episodes appear here once they're in the feed.
    blurb:
      'The same attention we bring to Hegel or Nietzsche, turned on the hardwood. A recurring segment thinking with the NBA — the league as a text in its own right, full of styles, tendencies, and ideas worth reading closely.',
  },
  {
    slug: 'deep-cuts-with-sircy',
    title: 'Deep Cuts with Sircy',
    tagline: 'Closer readings, with Sircy',
    accent: '#7A4E8C',
    // PLACEHOLDER copy — confirm the segment’s premise and Sircy’s full name/bio.
    blurb:
      'A recurring segment going deep on a single passage, problem, or text. Slow reading as its own pleasure.',
  },
];

export function getSeason(slug: string) {
  return seasons.find((s) => s.slug === slug);
}

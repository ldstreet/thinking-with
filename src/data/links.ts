// Links page data — the authors asked for a page pointing to (1) scholarly things
// like presses and journals, (2) "stuff we're just vibing with" like podcasts, and
// (3) a bibliography of core texts we routinely engage.
//
// These are a STARTING SET of real, stable links for the authors to curate, prune,
// and expand. Edit freely — the page renders whatever is here. Mark a section
// `curate: true` to show a gentle "authors are still curating" note.

export type LinkItem = { label: string; url: string; note?: string };
export type LinkSection = {
  slug: string;
  title: string;
  blurb: string;
  curate?: boolean;
  items: LinkItem[];
};

export const linkSections: LinkSection[] = [
  {
    slug: 'scholarly',
    title: 'Presses & journals',
    blurb: 'Where the work we read tends to live — publishers and journals in rhetoric and theory.',
    curate: true,
    items: [
      { label: 'Stanford Encyclopedia of Philosophy', url: 'https://plato.stanford.edu/', note: 'Our go-to reference for orienting entries.' },
      { label: 'Northwestern University Press — Studies in Phenomenology', url: 'https://nupress.northwestern.edu/', note: 'Continental philosophy in translation.' },
      { label: 'University of Chicago Press', url: 'https://press.uchicago.edu/' },
      { label: 'Philosophy & Rhetoric (Penn State University Press)', url: 'https://www.psupress.org/journals/jnls_pr.html' },
      { label: 'Rhetoric Society Quarterly', url: 'https://www.tandfonline.com/journals/rrsq20' },
      { label: 'Rhetoric Review', url: 'https://www.tandfonline.com/journals/hrhr20' },
    ],
  },
  {
    slug: 'vibes',
    title: 'Vibes',
    blurb: 'Podcasts and other things we are just vibing with — not endorsements, more like good company.',
    curate: true,
    items: [
      { label: 'The Partially Examined Life', url: 'https://partiallyexaminedlife.com/' },
      { label: 'In Our Time (BBC Radio 4)', url: 'https://www.bbc.co.uk/programmes/b006qykl' },
      { label: 'Why Theory', url: 'https://whytheory.libsyn.com/' },
    ],
  },
  {
    slug: 'bibliography',
    title: 'Core texts',
    blurb: 'The thinkers and works we keep returning to, season after season.',
    items: [
      { label: 'G. W. F. Hegel — Phenomenology of Spirit', url: 'https://plato.stanford.edu/entries/hegel/', note: 'Season 1.' },
      { label: 'Gilles Deleuze — The Logic of Sense', url: 'https://plato.stanford.edu/entries/deleuze/', note: 'Season 2.' },
      { label: 'Martin Heidegger — What Is Called Thinking? / Being and Time', url: 'https://plato.stanford.edu/entries/heidegger/', note: 'Seasons 3 & 6.' },
      { label: 'Jacques Derrida — selected essays', url: 'https://plato.stanford.edu/entries/derrida/', note: 'Season 4.' },
      { label: 'Friedrich Nietzsche — The Gay Science', url: 'https://plato.stanford.edu/entries/nietzsche/', note: 'Season 5.' },
    ],
  },
];

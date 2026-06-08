// Aggregates content carrying an editorial tag across BOTH the writing collection
// and podcast episodes, returning a unified, date-sorted list. Built to extend:
// a future "vibes" (links/resources) source just adds another branch + kind.
import { getCollection } from 'astro:content';
import { allEpisodes, type Episode } from './episodes';
import { seasons } from '../data/podcast';
import rawEpisodeTags from '../data/episodeTags.json';

const episodeTagMap = rawEpisodeTags as Record<string, string[]>;
const seasonByNumber = new Map(seasons.map((s) => [s.number, s]));

function slugify(s: string): string {
  return s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
}

// Tags inferred from a season's identity so pages have real content without
// hand-mapping every GUID. Adjust the rules here as the taxonomy grows.
function derivedEpisodeTags(ep: Episode): string[] {
  const out = new Set<string>();
  const season = seasonByNumber.get(ep.season);
  if (season?.thinker?.includes('Heidegger')) out.add('heidegger');
  if (season?.thinker?.includes('Nietzsche')) out.add('affirmation');
  if (season?.theme) out.add(slugify(season.theme));
  return [...out];
}

export function episodeTagsFor(ep: Episode): string[] {
  const manual = episodeTagMap[ep.guid] ?? [];
  return Array.from(new Set([...manual, ...derivedEpisodeTags(ep)]));
}

export type TaggedWriting = {
  kind: 'writing';
  ts: number;
  slug: string;
  title: string;
  description: string;
  date: Date;
  author: string;
  series?: string;
  draft: boolean;
};
export type TaggedEpisode = { kind: 'episode'; ts: number; episode: Episode };
export type TaggedItem = TaggedWriting | TaggedEpisode;

/** All items (writing + episodes) carrying `tagSlug`, newest first. */
export async function itemsForTag(tagSlug: string): Promise<TaggedItem[]> {
  const posts = await getCollection('writing');
  const writing: TaggedItem[] = posts
    .filter((p) => (p.data.tags ?? []).includes(tagSlug))
    .map((p) => ({
      kind: 'writing' as const,
      ts: p.data.date.valueOf(),
      slug: p.slug,
      title: p.data.title,
      description: p.data.description,
      date: p.data.date,
      author: p.data.author,
      series: p.data.series,
      draft: !!p.data.draft,
    }));

  const eps: TaggedItem[] = allEpisodes
    .filter((ep) => episodeTagsFor(ep).includes(tagSlug))
    .map((ep) => ({ kind: 'episode' as const, ts: new Date(ep.date).valueOf(), episode: ep }));

  return [...writing, ...eps].sort((a, b) => b.ts - a.ts);
}

/** Count of items per tag — used to hide empty tags from the editorial bar if desired. */
export async function tagCounts(): Promise<Record<string, number>> {
  const posts = await getCollection('writing');
  const counts: Record<string, number> = {};
  const bump = (t: string) => (counts[t] = (counts[t] ?? 0) + 1);
  for (const p of posts) for (const t of p.data.tags ?? []) bump(t);
  for (const ep of allEpisodes) for (const t of episodeTagsFor(ep)) bump(t);
  return counts;
}

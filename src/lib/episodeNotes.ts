// Per-episode show notes, keyed by episode GUID. Two sources, merged:
//   1. episodeNotesFeed.json  — AUTO-IMPORTED from the RSS feed (the authors' own
//      notes shown in podcast apps): an overview + timestamped chapters.
//      Regenerate with scraper/import_feed_notes.py.
//   2. episodeNotes.json      — hand-authored extras/overrides: a written summary,
//      and "texts & thinkers" references with resolved links. Manual wins on merge.
import feed from '../data/episodeNotesFeed.json';
import manual from '../data/episodeNotes.json';

export interface EpisodeReference {
  label: string;
  url?: string;
  note?: string;
}

export interface EpisodeChapter {
  /** Display label, e.g. "00:30-12:40". */
  time: string;
  /** Start time in seconds, for seeking the audio. */
  start: number;
  /** The author's note for this segment (topics, page numbers). */
  label: string;
}

export interface EpisodeNote {
  /** Hand-written overview (preferred when present). */
  summary?: string | string[];
  /** Feed-derived lead lines (e.g. the section: "Gay Science Book 4"). */
  overview?: string[];
  /** Timestamped segments from the feed. */
  chapters?: EpisodeChapter[];
  /** Texts & thinkers mentioned, with links. */
  references?: EpisodeReference[];
  /** Optional explicit pages-discussed string. */
  pages?: string;
  /** True if any part is auto-drafted (shown as a small note). */
  drafted?: boolean;
}

const feedData = feed as Record<string, any>;
const manualData = manual as Record<string, any>;

export function notesFor(guid?: string): EpisodeNote | undefined {
  if (!guid) return undefined;
  const f = feedData[guid];
  const m = manualData[guid];
  if (!f && !m) return undefined;

  const merged: EpisodeNote = {
    overview: m?.overview ?? f?.overview,
    chapters: m?.chapters ?? f?.chapters,
    summary: m?.summary,
    references: m?.references,
    pages: m?.pages,
    // Only the hand-layer (summary/links) may be auto-drafted; feed notes are the
    // authors' own and authoritative.
    drafted: Boolean(m?.drafted),
  };

  const hasContent =
    (merged.summary && (Array.isArray(merged.summary) ? merged.summary.length : true)) ||
    (merged.overview?.length ?? 0) > 0 ||
    (merged.chapters?.length ?? 0) > 0 ||
    (merged.references?.length ?? 0) > 0 ||
    Boolean(merged.pages);

  return hasContent ? merged : undefined;
}

export function asParagraphs(v?: string | string[]): string[] {
  if (!v) return [];
  return Array.isArray(v) ? v : [v];
}

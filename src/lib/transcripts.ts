// Registry of available transcripts, keyed by episode GUID. Populated by
// scraper/pull_transcripts.mjs as whisper output is synced from the Mac Studio.
// Files live in site/public/transcripts/<guid>.{vtt,srt,txt}; the values here
// are base-relative public paths (run through u() at use sites).
import data from '../data/transcripts.json';

export interface TranscriptEntry {
  vtt: string;
  srt?: string;
  txt?: string;
  /** ISO date this transcript was generated. */
  generated?: string;
  /** whisper model used, e.g. "large-v3". */
  model?: string;
}

export const transcripts = data as Record<string, TranscriptEntry>;

export function hasTranscript(guid: string): boolean {
  return Boolean(guid && transcripts[guid]);
}

export function transcriptFor(guid: string): TranscriptEntry | undefined {
  return transcripts[guid];
}

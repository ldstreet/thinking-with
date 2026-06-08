// Guest credits keyed by episode GUID. Seeded from a transcript auto-scan
// (scraper/guests_scan.py) and host review; links resolved to faculty/personal
// pages. Render on episode pages as a "Featuring" credit.
import data from '../data/guests.json';

export interface Guest {
  name: string;
  role?: string;
  url?: string;
}

export const guests = data as Record<string, Guest[]>;

export function guestsFor(guid: string): Guest[] {
  return guests[guid] ?? [];
}

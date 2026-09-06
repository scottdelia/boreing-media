export type EpisodeFormat = 'Interview' | 'LIVE';

export interface Episode {
  number: number;
  title: string;
  date: string; // ISO date
  duration: string;
  format: EpisodeFormat;
  palette: string;
}

/** Latest public episodes, as listed on Apple Podcasts in early September 2026. */
export const episodes: Episode[] = [
  { number: 56, title: 'The Mark Driscoll Reckoning, Boreing Media Update, and a #1 Fantasy Show', date: '2026-09-03', duration: '2h 47m', format: 'LIVE', palette: 'poster-ink' },
  { number: 55, title: "Mark Driscoll: Scandal, Forgiveness, and the War for Young Men's Souls", date: '2026-09-01', duration: '2h 18m', format: 'Interview', palette: 'poster-wine' },
  { number: 54, title: "America's Occult Awakening: A Demon Expert, Former Psychic, and Journalist Explain", date: '2026-08-27', duration: '2h 24m', format: 'LIVE', palette: 'poster-plum' },
  { number: 53, title: 'What Were Pastors Doing While Charlie Kirk Did Their Job?', date: '2026-08-26', duration: '39m', format: 'Interview', palette: 'poster-steel' },
  { number: 52, title: 'Lindsay Clancy, SSRIs, and the Toxic Online Culture Destroying Women', date: '2026-08-20', duration: '2h 4m', format: 'LIVE', palette: 'poster-ember' },
  { number: 51, title: 'Andrew Klavan: AI Has No Soul (And Never Will)', date: '2026-08-18', duration: '2h 9m', format: 'Interview', palette: 'poster-sky' },
  { number: 50, title: 'The $20 Burrito That Blew Up The Right', date: '2026-08-13', duration: '2h 17m', format: 'LIVE', palette: 'poster-gold' },
  { number: 49, title: 'Hasan Piker and Candace Owens Are Selling You Third-World Thinking', date: '2026-08-11', duration: '42m', format: 'Interview', palette: 'poster-moss' },
];

export const showDescription =
  "America isn't over, but plenty of people are eager to write its obituary. Jeremy Boreing isn't one of them. Weekly conversations with the builders, dreamers, newsmakers, and troublemakers shaping the country's future, across culture, politics, tech, business, and faith.";

export function formatDate(iso: string): string {
  return new Date(`${iso}T12:00:00Z`).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
}

export type TitleKind = 'Film' | 'Series' | 'Documentary' | 'Kids' | 'Episode';

export interface Title {
  id: string;
  title: string;
  year: number;
  kind: TitleKind;
  tagline: string;
  blurb: string;
  meta: string;
  credit: string;
  palette: string;
  featured?: boolean;
  /** 2:3 key art URL. */
  poster?: string;
  /** 16:9 still URL. */
  backdrop?: string;
  /** TMDB page path, for attribution and reference. */
  tmdb?: string;
}

/** Build a TMDB image URL from a file name. Sizes: w342, w500 (posters), w780, w1280 (backdrops). */
export function tmdbImg(file: string, size: 'w342' | 'w500' | 'w780' | 'w1280'): string {
  return `https://image.tmdb.org/t/p/${size}/${file}`;
}

/**
 * Selected film and television credits of founder Jeremy Boreing.
 * These titles were produced during his tenure at The Daily Wire and are shown
 * here as a portfolio, not as Boreing Media property. Artwork is hotlinked from TMDB.
 */
export const titles: Title[] = [
  {
    id: 'pendragon',
    title: 'The Pendragon Cycle: Rise of the Merlin',
    year: 2026,
    kind: 'Series',
    tagline: 'Before the king, the Merlin.',
    blurb: "An epic fantasy series adapted from Stephen R. Lawhead's Pendragon Cycle novels, set in the twilight of Roman Britain.",
    meta: 'Season 1',
    credit: 'Co-Director, Executive Producer',
    palette: 'poster-steel',
    featured: true,
    poster: tmdbImg('jJfk8NXauN4UgFQ1qn9lFzEk7ib.jpg', 'w500'),
    backdrop: tmdbImg('lDmFwAaHL1kXnAfZeUTieAdUTko.jpg', 'w1280'),
    tmdb: '/tv/235685-the-pendragon-cycle-rise-of-the-merlin',
  },
  {
    id: 'am-i-racist',
    title: 'Am I Racist?',
    year: 2024,
    kind: 'Documentary',
    tagline: 'The undercover comedy documentary.',
    blurb: 'Matt Walsh goes undercover inside the diversity industry. The top-grossing documentary of 2024 at the U.S. box office.',
    meta: '1h 41m',
    credit: 'Executive Producer',
    palette: 'poster-gold',
    poster: tmdbImg('a0nfgpeRMORStotrouLoOBr00Pc.jpg', 'w500'),
    backdrop: tmdbImg('vohINT54Cvez6xu2LyGTHYjUe28.jpg', 'w1280'),
    tmdb: '/movie/1320637-am-i-racist',
  },
  {
    id: 'lady-ballers',
    title: 'Lady Ballers',
    year: 2023,
    kind: 'Film',
    tagline: 'A comeback story like no other.',
    blurb: 'A washed-up coach reunites his former high-school players for an unlikely run at a championship. Boreing directed, co-wrote, and appears as Coach Rob.',
    meta: 'Feature film',
    credit: 'Director, Writer, Producer',
    palette: 'poster-ember',
    poster: tmdbImg('2mud8Gr8s7RxNPDQOK7OSFxglyO.jpg', 'w500'),
    backdrop: tmdbImg('28B8msdMb8yMDTmubYDHONhBcdA.jpg', 'w1280'),
    tmdb: '/movie/1210646-lady-ballers',
  },
  {
    id: 'terror-on-the-prairie',
    title: 'Terror on the Prairie',
    year: 2022,
    kind: 'Film',
    tagline: 'Hold the line.',
    blurb: 'A frontier family defends their homestead against a band of outlaws in this western thriller starring Gina Carano.',
    meta: 'Feature film',
    credit: 'Producer',
    palette: 'poster-moss',
    poster: tmdbImg('xfwHIY865AYJoFgBAYoAJLvPLO9.jpg', 'w500'),
    backdrop: tmdbImg('3boseSuFfjTazSrPAe9G6pSDvnH.jpg', 'w1280'),
    tmdb: '/movie/884315-terror-on-the-prairie',
  },
  {
    id: 'shut-in',
    title: 'Shut In',
    year: 2022,
    kind: 'Film',
    tagline: 'No way out but through.',
    blurb: 'A young mother trapped in a pantry must find a way to save her children in this single-location thriller.',
    meta: 'Feature film',
    credit: 'Executive Producer',
    palette: 'poster-ink',
    poster: tmdbImg('b5ug4LyLQFeR6azAJyIPBQz5ur9.jpg', 'w500'),
    backdrop: tmdbImg('ufagam4FwlIcgPqJlr21EshNkNd.jpg', 'w1280'),
    tmdb: '/movie/629015-shut-in',
  },
  {
    id: 'what-is-a-woman',
    title: 'What Is a Woman?',
    year: 2022,
    kind: 'Documentary',
    tagline: 'One question. No easy answers.',
    blurb: 'Matt Walsh travels the world asking a single question in the documentary that became a cultural flashpoint.',
    meta: '1h 35m',
    credit: 'Executive Producer',
    palette: 'poster-wine',
    poster: tmdbImg('iiP8Sq7yWoYsKx9EVfyRPno8Un9.jpg', 'w500'),
    backdrop: tmdbImg('rsEoYrFrt8CG7l9q9pls03CyIxS.jpg', 'w1280'),
    tmdb: '/movie/957258-what-is-a-woman',
  },
  {
    id: 'convicting-a-murderer',
    title: 'Convicting a Murderer',
    year: 2023,
    kind: 'Documentary',
    tagline: 'The other side of the story.',
    blurb: 'A ten-part docuseries revisiting the Steven Avery case with evidence left out of the original telling.',
    meta: '10 episodes',
    credit: 'Executive Producer',
    palette: 'poster-plum',
    poster: tmdbImg('3gbqsmGfqo7Jdb2Ns8eM1xuRXWF.jpg', 'w500'),
    backdrop: tmdbImg('wbNqHbnf0MBjwJpjUpdzLKpdQyI.jpg', 'w1280'),
    tmdb: '/tv/234406-convicting-a-murderer',
  },
  {
    id: 'chip-chilla',
    title: 'Chip Chilla',
    year: 2023,
    kind: 'Kids',
    tagline: 'Big adventures for small chinchillas.',
    blurb: 'An animated series about a curious chinchilla family who learn through play, history, and imagination.',
    meta: 'Animated series',
    credit: 'Executive Producer',
    palette: 'poster-sky',
    poster: tmdbImg('AhT1pYAyXZWsi1A9CA1dyvTiAY7.jpg', 'w500'),
    backdrop: tmdbImg('4iDhB6kgz0GaSTIXVhUOF9dyZAn.jpg', 'w1280'),
    tmdb: '/tv/237369-chip-chilla',
  },
  {
    id: 'mabel-maclay',
    title: 'A Wonderful Day with Mabel Maclay',
    year: 2023,
    kind: 'Kids',
    tagline: 'Every day is a wonderful day.',
    blurb: "A warm, live-action series that invites young viewers into Mabel's neighborhood to learn and grow.",
    meta: 'Live-action series',
    credit: 'Executive Producer',
    palette: 'poster-gold',
    poster: tmdbImg('71cRI00NIkPoTcavzE8nd9bJEfv.jpg', 'w500'),
    tmdb: '/tv/238097-a-wonderful-day-with-mabel-maclay',
  },
  {
    id: 'gus-plus-us',
    title: 'Gus Plus Us',
    year: 2022,
    kind: 'Kids',
    tagline: 'Songs, stories, and a very tall friend.',
    blurb: 'A music-driven preschool series built around friendship, kindness, and curiosity.',
    meta: 'Preschool series',
    credit: 'Executive Producer',
    palette: 'poster-moss',
    poster: tmdbImg('gFPAJVqZuzMaGu8CQKdGX0i9vUK.jpg', 'w500'),
    tmdb: '/tv/203803-gus-plus-us',
  },
  {
    id: 'the-arroyo',
    title: 'The Arroyo',
    year: 2014,
    kind: 'Film',
    tagline: 'Where the law ends, the land begins.',
    blurb: "A modern western about a rancher on the border who takes a stand when no one else will. Boreing's directorial feature debut.",
    meta: 'Feature film',
    credit: 'Director, Writer, Producer',
    palette: 'poster-ember',
    poster: tmdbImg('ecllGgfQsUkdBYSbDsFjTQ5wtUn.jpg', 'w500'),
    tmdb: '/movie/300255-the-arroyo',
  },
];

export const featuredTitle = titles.find((t) => t.featured) ?? titles[0];

export function byKind(kind: TitleKind): Title[] {
  return titles.filter((t) => t.kind === kind);
}

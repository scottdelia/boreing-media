export interface PressItem {
  outlet: string;
  date: string; // ISO date; day is approximate for month-only sources
  title: string;
  href: string;
  summary: string;
}

/** Public coverage of Boreing Media and The Jeremy Boreing Show. Newest first. */
export const press: PressItem[] = [
  {
    outlet: 'Semafor',
    date: '2026-07-08',
    title: "The Daily Wire sells Jeremy's Razors to media company's former CEO",
    href: 'https://www.semafor.com/article/07/08/2026/the-daily-wire-sells-jeremys-razors-to-media-companys-former-ceo',
    summary: "Boreing Media acquires Jeremy's Razors and Jeremy's Chocolates. The razor brand has produced $55 million in sales since 2022.",
  },
  {
    outlet: 'Barrett Media',
    date: '2026-07-08',
    title: 'The Daily Wire Selling Consumer Brands to Jeremy Boreing',
    href: 'https://barrettmedia.com/2026/07/08/daily-wire-consumer-brands-jeremy-boreing/',
    summary: 'Daily Wire CEO Mike Richards calls the sale to Boreing "an easy decision."',
  },
  {
    outlet: 'Barrett Media',
    date: '2026-05-07',
    title: 'Why The Jeremy Boreing Show Arrived at the Best Possible Time',
    href: 'https://barrettmedia.com/2026/05/07/jeremy-boreing-show-best-possible-time/',
    summary: "A look at the show's early traction and where it fits in the podcast landscape.",
  },
  {
    outlet: 'Barrett Media',
    date: '2026-03-25',
    title: "Jeremy Boreing: 'I Never Wanted My Own Show' at The Daily Wire",
    href: 'https://barrettmedia.com/2026/03/25/jeremy-boreing-i-never-wanted-my-own-show-at-the-daily-wire/',
    summary: 'Boreing on why he stayed behind the camera for a decade, and what changed.',
  },
  {
    outlet: 'Deadline',
    date: '2026-03-17',
    title: "Jeremy Boreing, Daily Wire Founder, Launches 'The Jeremy Boreing Show'",
    href: 'https://deadline.com/2026/03/jeremy-boreing-daily-wire-launches-jeremy-boreing-show-1236758039/',
    summary: 'The talking-heads series covers culture, politics, tech, business, and faith on YouTube, Spotify, Apple, and Rumble.',
  },
  {
    outlet: 'Barrett Media',
    date: '2026-03-17',
    title: 'Former Daily Wire CEO Jeremy Boreing Launching Own Podcast',
    href: 'https://barrettmedia.com/2026/03/17/former-daily-wire-ceo-jeremy-boreing-launching-own-podcast/',
    summary: 'First full episode set for March 24, 2026.',
  },
  {
    outlet: 'Deadline',
    date: '2026-01-15',
    title: "'The Daily Wire' Co-Founder Jeremy Boreing On Hollywood, Candace Owens",
    href: 'https://deadline.com/2026/01/daily-wire-jeremy-boreing-candace-owens-ben-shapiro-1236692277/',
    summary: 'A wide-ranging interview on the studio years and what comes next.',
  },
  {
    outlet: 'Podcast News Daily',
    date: '2025-12-01',
    title: 'Jeremy Boreing Discusses Daily Wire Exit; Plans For New Creative Ventures',
    href: 'https://www.podcastnewsdaily.com/news/jeremy-boreing-discusses-daily-wire-exit-plans-for-new-creative-ventures/article_601f0949-3cd1-41f9-975a-539f7623ab5f.html',
    summary: 'Boreing outlines plans to produce podcasts and films through his own company.',
  },
  {
    outlet: 'The Daily Wire',
    date: '2025-03-18',
    title: 'Daily Wire Co-Founder Jeremy Boreing To Step Into New Role Focusing On Entertainment',
    href: 'https://www.dailywire.com/news/daily-wire-co-founder-jeremy-boreing-to-step-into-new-role-focusing-on-entertainment',
    summary: 'Boreing steps down as co-CEO to focus on creative projects.',
  },
];

export const pressOutlets = ['Deadline', 'Semafor', 'Barrett Media', 'Podcast News Daily', 'Yahoo Entertainment'];

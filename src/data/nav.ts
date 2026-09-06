export interface NavLink {
  label: string;
  href: string;
  external?: boolean;
}

export const primaryNav: NavLink[] = [
  { label: 'The Show', href: '/show' },
  { label: 'Watch', href: '/watch' },
  { label: 'Studios', href: '/studios' },
  { label: 'Brands', href: '/brands' },
  { label: 'About', href: '/about' },
  { label: 'News', href: '/news' },
];

export const footerColumns: { heading: string; links: NavLink[] }[] = [
  {
    heading: 'Company',
    links: [
      { label: 'About', href: '/about' },
      { label: 'News & Press', href: '/news' },
      { label: 'Advertise & Partner', href: '/advertise' },
      { label: 'Contact', href: '/contact' },
    ],
  },
  {
    heading: 'Content',
    links: [
      { label: 'The Jeremy Boreing Show', href: '/show' },
      { label: 'Watch', href: '/watch' },
      { label: 'Studios', href: '/studios' },
    ],
  },
  {
    heading: 'Brands',
    links: [
      { label: "Jeremy's Razors", href: 'https://www.jeremysrazors.com', external: true },
      { label: "Jeremy's Chocolates", href: 'https://www.jeremyschocolate.com', external: true },
    ],
  },
];

/** Where The Jeremy Boreing Show is distributed. Links verified Sept 2026. */
export const platforms: { name: string; href: string }[] = [
  { name: 'YouTube', href: 'https://www.youtube.com/@jeremyboreing' },
  { name: 'Spotify', href: 'https://open.spotify.com/show/2Mllk66sAANBub52uZ2N6n' },
  { name: 'Apple Podcasts', href: 'https://podcasts.apple.com/us/podcast/the-jeremy-boreing-show/id1885917003' },
  { name: 'Rumble', href: 'https://rumble.com/user/jeremyboreing' },
];

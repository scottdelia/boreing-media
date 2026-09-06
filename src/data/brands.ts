export interface Brand {
  id: string;
  name: string;
  category: string;
  founded: number;
  href: string;
  intro: string;
  story: string;
  stats: { value: string; label: string }[];
  products: { name: string; note: string }[];
  palette: string;
}

export const brands: Brand[] = [
  {
    id: 'razors',
    name: "Jeremy's Razors",
    category: 'Shave & Grooming',
    founded: 2022,
    href: 'https://www.jeremysrazors.com',
    intro: 'Premium razors, blades, and shave goods for people who would rather build than complain.',
    story:
      "Launched in 2022 after a major razor sponsor walked away from The Daily Wire, Jeremy's Razors did $10 million in its first year and has passed $55 million in lifetime sales. In July 2026 the brand came home to Boreing Media, with Jeremy back at the helm.",
    stats: [
      { value: '$55M+', label: 'Lifetime sales' },
      { value: '$10M', label: 'First-year revenue' },
      { value: '2022', label: 'Founded' },
    ],
    products: [
      { name: 'The Precision Razor', note: 'Weighted handle, five-blade cartridge' },
      { name: 'Cartridge Refills', note: 'Delivered on your schedule' },
      { name: 'Shave Cream', note: 'Rich lather, clean finish' },
      { name: 'Post-Shave Balm', note: 'Cool, calm, done' },
    ],
    palette: 'poster-ink',
  },
  {
    id: 'chocolates',
    name: "Jeremy's Chocolates",
    category: 'Confections',
    founded: 2023,
    href: 'https://www.jeremyschocolate.com',
    intro: 'Small-batch chocolate with a sense of humor and a serious cocoa bean.',
    story:
      "Born from the same instinct as the razors: if the big brands will not make what you want, make it yourself. Jeremy's Chocolates joined the Boreing Media portfolio alongside Jeremy's Razors in July 2026.",
    stats: [
      { value: '2023', label: 'Founded' },
      { value: 'USA', label: 'Made in' },
      { value: '2026', label: 'Joined Boreing Media' },
    ],
    products: [
      { name: 'Signature Bars', note: 'Milk, dark, and everything between' },
      { name: 'Gift Boxes', note: 'For people who deserve it' },
      { name: 'Seasonal Collections', note: 'Limited runs, once a year' },
      { name: 'Bundles', note: 'Pair with a razor. Trust us.' },
    ],
    palette: 'poster-ember',
  },
];

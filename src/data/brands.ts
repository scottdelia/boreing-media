import { youtubeThumb } from './episodes';

export interface BrandProduct {
  name: string;
  note: string;
  price?: string;
  image?: string;
  href?: string;
}

export interface Commercial {
  youtubeId: string;
  title: string;
  brand: string;
  views: string;
  year: number;
}

export interface Brand {
  id: string;
  name: string;
  category: string;
  founded: number;
  href: string;
  hrefLabel: string;
  intro: string;
  story: string;
  /** Large lifestyle image for the brand section. */
  hero: string;
  /** Image behind the Home page card. */
  card: string;
  stats: { value: string; label: string }[];
  products: BrandProduct[];
  palette: string;
}

const shop = 'https://www.jeremysrazors.com';
const cdn = 'https://cdn.shopify.com/s/files/1/0605/6489/8005';
/** Product renders from the Jeremy's Razors Shopify store. The width param resizes on their CDN. */
const render = (file: string, width = 700) => `${cdn}/files/${file}?width=${width}`;

export const brands: Brand[] = [
  {
    id: 'razors',
    name: "Jeremy's Razors",
    category: 'Shave & Grooming',
    founded: 2022,
    href: shop,
    hrefLabel: "Shop Jeremy's Razors",
    intro: 'Premium razors, blades, and shave goods for people who would rather build than complain.',
    story:
      "Launched in 2022 after a major razor sponsor walked away from The Daily Wire, Jeremy's Razors did $10 million in its first year and has passed $55 million in lifetime sales. The line now runs from the 2nd Gen Precision 5 razor to shave cream, body wash, deodorant, and home goods. In July 2026 the brand came home to Boreing Media, with Jeremy back at the helm.",
    hero: `${cdn}/collections/Shave_Collection_05.22.2024.jpg?width=1200`,
    card: `${shop}/cdn/shop/files/JR-brand-1200x628.jpg?width=1200`,
    stats: [
      { value: '$55M+', label: 'Lifetime sales' },
      { value: '$10M', label: 'First-year revenue' },
      { value: '24M', label: 'Views on the launch commercial' },
    ],
    products: [
      { name: 'Alpha Bundle', note: 'Razor, blades, cream, balm, and travel case', price: '$59.99', image: render('AlphaBundle.png'), href: `${shop}/products/mens-alpha-bundle` },
      { name: "Jeremy's Razor Handle", note: 'Weighted 2nd Gen handle', price: '$11.99', image: render('JR-razor-handle-hero.png'), href: `${shop}/products/mens-2gen-razor-handle` },
      { name: 'Precision 5 Blade Refill', note: 'Eight 2nd Gen cartridges', price: '$30.00', image: render('JR-P5-Blade-Refill-8ct.png'), href: `${shop}/products/p5-refill-value-pack` },
      { name: 'Shave Cream', note: 'Green tea and menthol', price: '$11.99', image: render('JR-ShaveCream-Pkg-Update-hero.png'), href: `${shop}/products/jeremys-shave-cream-1` },
      { name: 'Post Shave Balm', note: 'Green tea and menthol', price: '$11.99', image: render('PostShaveBalm_transparent_XLC.png'), href: `${shop}/products/post-shave-balm` },
      { name: "Women's Starter Set", note: 'Razor and blades for her', price: '$14.99', image: render('womensrazor_2ndgen.png'), href: `${shop}/products/womens-2nd-gen-1-1-starter-set` },
    ],
    palette: 'poster-ink',
  },
  {
    id: 'chocolates',
    name: "Jeremy's Chocolates",
    category: 'Confections',
    founded: 2023,
    href: 'https://www.youtube.com/watch?v=ww5Lf97hXQM',
    hrefLabel: 'Watch the launch ad',
    intro: 'Two milk chocolate bars with a sense of humor. One of them has nuts.',
    story:
      "Launched in 2023 as the second Jeremy's brand, with a launch ad that has passed 11 million views. Two bars: HeHim, with nuts, and SheHer, without. The brand joined Boreing Media alongside the razors in July 2026. Its standalone storefront is offline as of September 2026, so this page links to the launch ad and the brand story instead of a cart.",
    hero: youtubeThumb('ww5Lf97hXQM'),
    card: youtubeThumb('ww5Lf97hXQM'),
    stats: [
      { value: '2023', label: 'Founded' },
      { value: '2', label: 'Bars: HeHim and SheHer' },
      { value: '11M', label: 'Views on the launch ad' },
    ],
    products: [
      { name: 'HeHim', note: 'Milk chocolate. With nuts.' },
      { name: 'SheHer', note: 'Milk chocolate. Nutless.' },
    ],
    palette: 'poster-ember',
  },
];

/** The launch commercials, hosted on The Daily Wire's YouTube channel. View counts as of September 2026. */
export const commercials: Commercial[] = [
  { youtubeId: 's92UMJNjPIA', title: "Jeremy's Razors: The Greatest Commercial Ever", brand: "Jeremy's Razors", views: '24M', year: 2022 },
  { youtubeId: 'ww5Lf97hXQM', title: "Fine. I'll do it. Introducing Jeremy's Chocolate.", brand: "Jeremy's Chocolates", views: '11M', year: 2023 },
  { youtubeId: 'K_2_qgl_fpA', title: "Jeremy's Razors: The 2nd Greatest Commercial Ever", brand: "Jeremy's Razors", views: '10M', year: 2024 },
];

/** Brand story page on the razors site; the chocolate domain redirects here. */
export const brandStoryHref = `${shop}/pages/about`;

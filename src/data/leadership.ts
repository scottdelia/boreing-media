export interface Leader {
  name: string;
  role: string;
  initials: string;
  bio: string;
  palette: string;
  photo?: string;
  photoCredit?: string;
  photoCreditHref?: string;
}

export const leadership: Leader[] = [
  {
    name: 'Jeremy Boreing',
    role: 'Founder & Chief Executive Officer',
    initials: 'JB',
    bio: 'Filmmaker and entrepreneur from Slaton, Texas. Co-founded The Daily Wire in 2015 and served as co-CEO for a decade, building its film and television division from the ground up. Directed Lady Ballers and co-directed The Pendragon Cycle. Launched The Jeremy Boreing Show in March 2026 and founded Boreing Media the same year.',
    palette: 'poster-gold',
    photo: 'https://upload.wikimedia.org/wikipedia/commons/a/a8/Jeremy_Boreing.jpg',
    photoCredit: 'Pittstone, CC BY-SA 4.0, via Wikimedia Commons',
    photoCreditHref: 'https://commons.wikimedia.org/wiki/File:Jeremy_Boreing.jpg',
  },
  {
    name: 'Jon Lewis',
    role: 'President',
    initials: 'JL',
    bio: 'Former President of The Daily Wire, where he worked alongside Boreing for years before following him to the new company. A Hillsdale College graduate based in Franklin, Tennessee. Runs day-to-day operations across the show, the studio slate, and the brands.',
    palette: 'poster-steel',
  },
  {
    name: 'Alyssa Cordova',
    role: 'Executive Producer, The Jeremy Boreing Show',
    initials: 'AC',
    bio: "Joined as the show's first executive producer in April 2026. Started working for Boreing at The Daily Wire in 2021 and came aboard for, in her words, the next adventure.",
    palette: 'poster-wine',
  },
];

export const timeline: { year: string; title: string; text: string }[] = [
  { year: '2015', title: 'The Daily Wire is founded', text: 'Jeremy Boreing co-founds the company with Ben Shapiro and Caleb Robinson and leads it as co-CEO.' },
  { year: '2020', title: 'Into film and television', text: 'Boreing builds an entertainment division that produces features, documentaries, series, and kids programming.' },
  { year: '2022', title: "Jeremy's Razors launches", text: 'A sponsor walks away. A brand is born. $10 million in year one.' },
  { year: '2025', title: 'A new chapter', text: 'Boreing steps down as co-CEO in March to focus on creative work and returns to Hollywood.' },
  { year: '2026', title: 'Boreing Media', text: "The Jeremy Boreing Show premieres March 24. In July, Boreing Media acquires Jeremy's Razors and Jeremy's Chocolates." },
];

export const values: { title: string; text: string }[] = [
  { title: "Build, don't complain", text: 'If the institutions will not serve you, build your own. That instinct started a razor company and it drives everything here.' },
  { title: 'Craft over noise', text: 'Long-form conversation, real production values, and products that hold up. Nothing disposable.' },
  { title: 'Audience first', text: 'The people who show up every week are the business. Everything else is downstream of earning their trust.' },
  { title: 'Say the quiet part', text: 'The conversations everyone is thinking and nobody is saying out loud.' },
];

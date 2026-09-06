# Boreing Media — concept site

A concept website for **Boreing Media**, the company founded in 2026 by Jeremy Boreing (co-founder and former co-CEO of The Daily Wire). Built as a design proposal: dark, cinematic, and practical.

**Live:** https://scottdelia.github.io/boreing-media/

> **Concept site.** Not the official Boreing Media website and not affiliated with or endorsed by Boreing Media or Jeremy Boreing. Facts come from public reporting. Imagery is illustrative and generated with CSS. No trademarked logos are used.

## Pages

| Route | What it is |
|---|---|
| `/` | Home: cinematic hero, three pillars, latest episodes, catalog row, brands, partner call to action |
| `/show` | The Jeremy Boreing Show: platforms, cadence, latest eight episodes |
| `/watch` | Streaming-style catalog: billboard, poster rows, detail modal |
| `/studios` | Film and TV credits, in-development placeholders, submission filter |
| `/brands` | Jeremy's Razors and Jeremy's Chocolates |
| `/about` | Story, timeline, leadership, values |
| `/news` | Press coverage with links to the original outlets, press contact |
| `/advertise` | Sponsorship, brand partnership, co-production, media kit request form |
| `/contact` | Contact form (concept; not wired to a backend) |

## Stack

- [Astro](https://astro.build) 7, static output
- [Tailwind CSS](https://tailwindcss.com) 4 via `@tailwindcss/vite`
- Google Fonts: Fraunces (display) and Inter (body)
- No client framework. Small vanilla scripts for the header, poster rows, modal, and forms.
- Deployed to GitHub Pages by `.github/workflows/deploy.yml`

## Run it

```bash
npm install
npm run dev
```

Build and preview the production output:

```bash
npm run build
npm run preview
```

The site is configured as a GitHub Pages project site (`base: '/boreing-media'` in `astro.config.mjs`). Use `withBase()` from `src/lib/url.ts` for every internal link.

## Where the content lives

All copy that changes often is in `src/data/`:

- `episodes.ts` — latest episodes and show description
- `titles.ts` — the film and TV catalog used by Watch and Studios
- `press.ts` — news coverage
- `brands.ts` — brand stories, stats, product tiles
- `leadership.ts` — bios, timeline, values
- `nav.ts` — navigation, footer columns, platform links

## Sources

- Barrett Media, [The Daily Wire Selling Consumer Brands to Jeremy Boreing](https://barrettmedia.com/2026/07/08/daily-wire-consumer-brands-jeremy-boreing/) (July 2026)
- Semafor, [The Daily Wire sells Jeremy's Razors to media company's former CEO](https://www.semafor.com/article/07/08/2026/the-daily-wire-sells-jeremys-razors-to-media-companys-former-ceo) (July 2026)
- Deadline, [Jeremy Boreing, Daily Wire Founder, Launches 'The Jeremy Boreing Show'](https://deadline.com/2026/03/jeremy-boreing-daily-wire-launches-jeremy-boreing-show-1236758039/) (March 2026)
- Apple Podcasts, [The Jeremy Boreing Show](https://podcasts.apple.com/us/podcast/the-jeremy-boreing-show/id1885917003) (episode list)
- Wikipedia, [Jeremy Boreing](https://en.wikipedia.org/wiki/Jeremy_Boreing) (filmography)

## Follow-ups

Custom domain, a real form backend, an Open Graph image, approved photography and logos, analytics.

## Images

No image files live in this repo. Everything is hotlinked from its source and swaps out by editing one URL in `src/data/`.

- **Episode thumbnails and watch links** come from the Jeremy Boreing YouTube channel (`youtubeId` in `episodes.ts`). The channel id is `UCGHtep7hxIpz2D6RAQ8Kp0g`; its public feed is `https://www.youtube.com/feeds/videos.xml?channel_id=UCGHtep7hxIpz2D6RAQ8Kp0g`.
- **Show artwork** is the official cover art served by Apple Podcasts (`showArtwork` in `episodes.ts`).
- **Film and TV posters and stills** are hotlinked from [TMDB](https://www.themoviedb.org) (`poster`, `backdrop`, `tmdb` in `titles.ts`). This site uses TMDB images but is not endorsed or certified by TMDB. The artwork belongs to the studios that made the titles; replace it with approved key art before any official use.

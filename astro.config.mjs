// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// Deployed as a GitHub Pages project site, so every internal link is prefixed with `base`.
// Use `withBase()` from src/lib/url.ts for links and asset paths.
export default defineConfig({
  site: 'https://scottdelia.github.io',
  base: '/boreing-media',
  trailingSlash: 'ignore',
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [sitemap()],
});

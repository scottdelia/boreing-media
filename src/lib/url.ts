const base = import.meta.env.BASE_URL.replace(/\/$/, '');

/**
 * Prefix a site-relative path with the configured Astro `base`.
 * Directory routes get a trailing slash so GitHub Pages serves them without a redirect.
 * External, mailto, and hash links pass through unchanged.
 */
export function withBase(path: string): string {
  if (/^(https?:)?\/\//.test(path) || path.startsWith('mailto:') || path.startsWith('#')) return path;
  let clean = path.startsWith('/') ? path : `/${path}`;
  const isFile = /\.[a-z0-9]+$/i.test(clean);
  if (!isFile && !clean.endsWith('/')) clean += '/';
  return `${base}${clean}`;
}

/** Strip the base prefix and trailing slash so paths compare the same in dev and build. */
export function sitePath(pathname: string): string {
  let out = pathname;
  if (base && out.startsWith(base)) out = out.slice(base.length);
  out = out.replace(/\/$/, '');
  return out || '/';
}

/** True when the current page path is the given site-relative href or lives under it. */
export function isActive(currentPathname: string, href: string): boolean {
  const current = sitePath(currentPathname);
  const target = sitePath(href);
  if (target === '/') return current === '/';
  return current === target || current.startsWith(`${target}/`);
}

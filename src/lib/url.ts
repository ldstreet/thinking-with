// Base-aware URL helper for internal links and public assets.
// Works under a GitHub Pages subpath (e.g. /thinking-with/) and at root.
export function u(path = ''): string {
  if (/^([a-z]+:|\/\/|#|mailto:|tel:)/i.test(path)) return path; // external / anchors
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const p = path.startsWith('/') ? path : '/' + path;
  return base + p;
}

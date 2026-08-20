# Smashed Fribourg

Marketing website for **Smashed** (Smashed Sàrl), the smash-burger
restaurant at Rue du Criblet 5 in Fribourg, Switzerland — [smashed.ch](https://smashed.ch/).

Built with:

- [Next.js](https://nextjs.org) (App Router) + TypeScript
- [Tailwind CSS v4](https://tailwindcss.com)
- [shadcn/ui](https://ui.shadcn.com) conventions (`components.json`, `src/components/ui`)
- [Framer Motion](https://motion.dev) for the scroll-driven hero
- [lucide-react](https://lucide.dev) for iconography

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Project structure

- `src/app` — routes, layout, global styles
- `src/components/ui` — shadcn-style primitives (`button.tsx`,
  `scroll-expansion-hero.tsx`)
- `src/components/site` — page sections (navbar, hero content, philosophy,
  menu, gallery, location, footer)
- `src/lib` — shared utilities and content data (menu items)
- `public/brand` — the real Smashed logo, plus a cutout wordmark (transparent,
  cream) used in the nav and footer
- `public/hero` — the real product photo used in the hero and gallery

## Notes on the content

Business details (address, phone, hours, menu items and prices) were pulled
from Smashed's own site, Instagram (`@smashed_fribourg`), Uber Eats and
Just Eat listings. A few things are worth double-checking before launch:

- **Opening hours** — sources agree on 11h00–21h30 daily, but this wasn't
  confirmed against an official, always-current source. Verify before publishing.
- **Photography** — only one real product photo was available (in
  `public/hero/burger-spread.webp`, also used for the gallery's lead tile).
  The other gallery tiles are crafted textures rather than photography —
  drop in real shots (dining room, plancha, individual burgers) as they
  become available.
- **Menu descriptions** — item names and prices are verified (Uber Eats),
  but most descriptions beyond the flagship Smashed Burger are written from
  the item name alone. Adjust wording once you have this from the source
  business.
- The Google Maps embed in the location section points at the real address
  and works without an API key.

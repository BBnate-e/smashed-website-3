# Smashed Fribourg

Marketing website for **Smashed Fribourg**, a premium smash-burger
restaurant concept in Fribourg, Switzerland.

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
  `scroll-expansion-hero.tsx`, `fallback-image.tsx`)
- `src/components/site` — page sections (navbar, hero content, philosophy,
  menu, gallery, location, footer)
- `src/lib` — shared utilities and content data (menu items)

## Notes

- Hero and gallery imagery is sourced from Unsplash via `next/image` with
  `images.unsplash.com` allow-listed in `next.config.ts`. Every image goes
  through `FallbackImage` (`src/components/ui/fallback-image.tsx`), which
  degrades gracefully to a styled placeholder if a photo fails to load.
- Address, phone, email and opening hours in `src/components/site/location.tsx`
  are placeholders — replace with the real business details before launch.
- The Google Maps embed in the location section works without an API key.

# wreis.rocks

Personal website (portfolio + blog) built with Next.js.

## What this is

This repository contains the source code for **wreis.rocks** — a dark-first, performance-focused personal website.

It includes:

- A landing page
- An About page
- Projects (MDX content + detail pages)
- Blog (MDX content + detail pages)
- Requests page (links to GitHub Issues)
- Contact page

## Tech stack

- **Next.js** (App Router) + **TypeScript**
- **Tailwind CSS v4** (CSS-first)
- **MDX** content stored in-repo
- Small UI primitives inspired by shadcn/ui patterns (local components)

## Project structure

- `src/app/*` — routes
- `src/components/*` — UI components and sections
- `src/content/posts/*.mdx` — blog posts
- `src/content/projects/*.mdx` — project pages
- `src/lib/*` — MDX compilation, content loaders, utilities
- `src/config/site.ts` — site metadata (social links, email)

## Requirements

- Node.js (recommended: latest LTS)
- pnpm

## Development

```bash
pnpm install
pnpm dev --webpack --hostname 0.0.0.0 --port 3002
```

Then open:

- http://localhost:3002
- or from your LAN: `http://<your-vm-ip>:3002`

> Note: `--webpack` is used to avoid Turbopack issues on some CPUs.

## Scripts

- `pnpm lint` — ESLint
- `pnpm typecheck` — TypeScript (no emit)
- `pnpm build` — production build

## Content

### Blog posts

Add a new file under `src/content/posts/`.

### Projects

Add a new file under `src/content/projects/`.

Both support frontmatter fields used across pages (title/summary/date/tags/stack/links/featured, etc.).

## Requests

The `/requests` page points to GitHub Issues, so suggestions and public feedback can be tracked in one place.

## Contact

Email and social links are configured in `src/config/site.ts`.

## Deployment

Recommended: **Vercel**.

- Build command: `pnpm build`
- Install command: `pnpm install`

## License

MIT (unless changed in the future).

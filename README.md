# NUMSMU Labs Website

Production-ready static website for NUMSMU Labs, India's innovation-to-industry ecosystem. The site is configured for GitHub Pages using Next.js static export.

## Stack

- Next.js App Router with React Server Components
- TypeScript
- Tailwind CSS
- Framer Motion
- Shadcn-style component primitives
- Lucide Icons
- Static export for GitHub Pages

## Run locally

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
```

The static output is generated in `out/` and can be hosted by GitHub Pages or any static host.

## Deploy on GitHub Pages

1. Push this repository to GitHub.
2. In **Settings → Pages**, set **Source** to **GitHub Actions**.
3. Push to `main` or run the **Deploy to GitHub Pages** workflow manually.
4. The workflow builds with `DEPLOY_TARGET=github-pages`, runs `next build`, and uploads the `out/` folder.

### Project pages vs custom domains

- For a repository site such as `https://username.github.io/UDYAMX/`, the workflow automatically uses the repository name as the base path.
- For a custom domain or user/organization site, set `NEXT_PUBLIC_BASE_PATH` to an empty value in the workflow or repository environment.

## Analytics and visitor data

The website includes privacy-respecting analytics consent. It does **not** track visitors silently. Analytics events are sent only after the visitor clicks **Allow analytics**.

To collect analytics events, configure an endpoint before building:

```bash
NEXT_PUBLIC_ANALYTICS_ENDPOINT="https://your-analytics-endpoint.example/events" npm run build
```

Payload fields include event name, page path, referrer, anonymous visitor ID, timestamp, user agent, language, and screen size. Do not use this to collect sensitive personal data without a clear privacy policy and user consent.

## Pages

- `/` landing page with hero, animated network, India innovation map, divisions, platform, products, impact and founder sections.
- `/co-founder` recruitment page with roles and application form.
- `/msme-services` detailed MSME offerings.
- `/innovation-platform` AI education platform.
- `/product-development` product studio lifecycle.
- `/resources` resource listing with search/filter UI.
- `/contact` segmented contact form.

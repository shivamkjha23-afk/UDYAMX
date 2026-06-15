# NUMSMU Labs Website

A concise pitch website for NUMSMU Labs, designed for GitHub Pages and scaffolded as a Next.js project for future development.

## What to deploy on GitHub Pages

If you want the site to work immediately from **Settings → Pages → Deploy from a branch**, choose:

- Branch: `main`
- Folder: `/ (root)`

The root `index.html` is a complete production-style landing page, so GitHub Pages will show the website instead of this README.

## Optional Next.js workflow

The repository also includes a Next.js App Router implementation and a GitHub Actions workflow for static export. To use that path, set **Settings → Pages → Source** to **GitHub Actions** and run the deploy workflow.

## Local development

```bash
npm install
npm run dev
```

## Static build

```bash
npm run build
```

Next.js export output is generated in `out/`.

## Analytics

The site includes consent-based analytics only. It does not silently track visitors. Configure your analytics endpoint before deployment if you want to collect anonymous events.


## Current site direction

- Short pitch-first copy for cofounders and investors.
- MSME problem intake form as the primary call to action.
- Live-style India map for MSME clusters and pilot signals.
- No product claims; current sections describe pilot themes to validate.

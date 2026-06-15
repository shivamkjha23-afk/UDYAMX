# NUMSMU Labs Website

A premium static website for NUMSMU Labs, designed for GitHub Pages and also scaffolded as a Next.js project for future development.

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

# learning-blog

Minimalist personal blog for publishing notes about things learned in software, operations, and reliability.

Live site:
- `https://wvides.github.io/learning-blog/`

## Stack

- Astro (static output)
- Markdown content collections
- GitHub Actions + GitHub Pages deployment

## Local Development

From the repository root:

```bash
npm install
npm run dev
```

Production build:

```bash
npm run build
npm run preview
```

## Content Workflow

Posts live in:
- `src/content/blog/`

Create a new post scaffold:

```bash
npm run new-post -- "Your post title"
```

This command:
- Generates a slug from the title.
- Creates `src/content/blog/<slug>.md`.
- Creates `docs/checklists/<slug>.md` from `templates/post-checklist.md`.
- Prefills date/title fields from `templates/blog-post.md`.
- Starts new posts as drafts (`draft: true`).
- Gives you an authoring QA checklist for SEO/social/content/link quality.

Required frontmatter fields:

```md
---
title: "Post title"
description: "Longer description used on detail page"
summary: "Short listing summary"
pubDate: "2026-02-21"
updatedDate: "2026-02-21"
tags:
  - topic-a
  - topic-b
draft: true
---
```

Publish flow:
- Keep `draft: true` while writing.
- Switch to `draft: false` when ready to publish.
- Run `npm run build` before pushing.

## Routing

- Home: `/`
- Blog index: `/blog`
- Post detail: `/blog/<slug>/`
- Tags: `/tags` and `/tags/<tag>/`
- RSS: `/rss.xml/`

## Deployment

Deployment workflow:
- `.github/workflows/deploy.yml`
- `.github/workflows/deploy-cloudflare.yml`

Trigger:
- Push to `main`

Deploy target:
- GitHub Pages (Actions build type)
- Cloudflare Pages (via GitHub Actions)

### Cloudflare Setup

Configure these GitHub repository secrets:
- `CLOUDFLARE_API_TOKEN`
- `CLOUDFLARE_ACCOUNT_ID`
- `CLOUDFLARE_PROJECT_NAME`
- Optional: `CLOUDFLARE_PAGES_SITE_URL` (example: `https://your-project.pages.dev`)

Cloudflare build behavior:
- `npm run build:cloudflare`
- Uses base path `/` and Cloudflare site URL context.

GitHub Pages build behavior:
- `npm run build:github`
- Uses base path `/learning-blog`.

## Analytics (Optional)

Analytics is disabled by default. Enable it with environment variables:

- `PUBLIC_ANALYTICS_PROVIDER`: `plausible` or `umami`
- Plausible:
  - `PUBLIC_PLAUSIBLE_DOMAIN` (example: `wvides.github.io`)
  - Optional override: `PUBLIC_PLAUSIBLE_SCRIPT_URL`
- Umami:
  - `PUBLIC_UMAMI_SCRIPT_URL`
  - `PUBLIC_UMAMI_WEBSITE_ID`

Outbound click tracking:
- Plausible: use `script.outbound-links.js` (default in this repo config).
- Umami: outbound clicks are tracked via a small inline click listener.

## Notes

- Internal links are base-path aware for project pages deployment (`/learning-blog`).
- SEO metadata, Open Graph, Twitter cards, RSS feed, sitemap, and robots.txt are included.

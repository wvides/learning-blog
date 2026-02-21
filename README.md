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

Each post uses frontmatter like:

```md
---
title: "Post title"
description: "Longer description used on detail page"
summary: "Short listing summary"
pubDate: "2026-02-21"
updatedDate: "2026-02-21" # optional
tags:
  - topic-a
  - topic-b
draft: false
---
```

Draft behavior:
- `draft: true` keeps the post out of listing pages and static routes.

## Routing

- Home: `/`
- Blog index: `/blog`
- Post detail: `/blog/<slug>/`
- Tags: `/tags` and `/tags/<tag>/`
- RSS: `/rss.xml`

## Deployment

Deployment workflow:
- `.github/workflows/deploy.yml`

Trigger:
- Push to `main`

Deploy target:
- GitHub Pages (Actions build type)

## Notes

- Internal links are base-path aware for project pages deployment (`/learning-blog`).
- SEO metadata, Open Graph, Twitter cards, RSS feed, and sitemap are included.

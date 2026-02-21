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

Trigger:
- Push to `main`

Deploy target:
- GitHub Pages (Actions build type)

## Notes

- Internal links are base-path aware for project pages deployment (`/learning-blog`).
- SEO metadata, Open Graph, Twitter cards, RSS feed, sitemap, and robots.txt are included.

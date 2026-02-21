# Launch Checklist

Date:
- 2026-02-21

Repository:
- `wvides/learning-blog`

Production URL:
- `https://wvides.github.io/learning-blog/`

## Build Verification

- [x] `npm run build` completes locally without errors.
- [x] Static output includes homepage, blog pages, tags pages, sitemap, and RSS.

## Deployment Verification

- [x] GitHub Pages is enabled with Actions build type.
- [x] Deploy workflow exists at `.github/workflows/deploy.yml`.
- [x] Latest deploy workflow run completed successfully.

## Smoke Checks

- [x] Home: `/learning-blog/`
- [x] Blog index: `/learning-blog/blog/`
- [x] Tags index: `/learning-blog/tags/`
- [x] About page: `/learning-blog/about/`
- [x] RSS feed: `/learning-blog/rss.xml/`

## Notes

- Base-path-aware links are enabled for project pages deployment.
- `404.html` is present for custom not-found handling.

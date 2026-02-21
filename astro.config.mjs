// @ts-check

import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

function normalizeBasePath(rawBasePath) {
	if (!rawBasePath || rawBasePath === '/') return '/';
	const withLeadingSlash = rawBasePath.startsWith('/') ? rawBasePath : `/${rawBasePath}`;
	return withLeadingSlash.endsWith('/') ? withLeadingSlash.slice(0, -1) : withLeadingSlash;
}

const deployTarget = process.env.DEPLOY_TARGET || (process.env.CF_PAGES ? 'cloudflare' : 'github');
const isCloudflareTarget = deployTarget === 'cloudflare';
const site =
	process.env.SITE_URL ||
	(isCloudflareTarget ? process.env.CF_PAGES_URL || 'https://example.pages.dev' : 'https://wvides.github.io');
const base = normalizeBasePath(process.env.BASE_PATH || (isCloudflareTarget ? '/' : '/learning-blog'));

// https://astro.build/config
export default defineConfig({
	output: 'static',
	site,
	base,
	integrations: [sitemap()],
	markdown: {
		syntaxHighlight: 'shiki',
		shikiConfig: {
			theme: 'github-dark',
		},
	},
});

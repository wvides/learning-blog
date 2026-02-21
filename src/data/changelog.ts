export type ChangelogEntry = {
	date: string;
	title: string;
	summary: string;
	highlights: string[];
};

export const changelogEntries: ChangelogEntry[] = [
	{
		date: '2026-02-21',
		title: 'Search and discoverability upgrades',
		summary: 'Added on-site search, related posts, JSON-LD metadata, and stronger tag hub navigation.',
		highlights: [
			'New /search experience across titles, summaries, and tags.',
			'Related posts and topic hub links on post detail pages.',
			'Structured data for WebSite and BlogPosting.',
		],
	},
	{
		date: '2026-02-21',
		title: 'Quality and regression safety rails',
		summary: 'Introduced Lighthouse CI checks and visual regression snapshots for key pages.',
		highlights: [
			'Lighthouse assertions on home, blog, and article routes.',
			'Playwright baseline screenshots for /, /blog, /now, /uses, /about.',
			'CI workflows added for quality + visual regression.',
		],
	},
	{
		date: '2026-02-21',
		title: 'Authoring workflow refinements',
		summary: 'New-post scaffolding now generates a QA checklist for publishing discipline.',
		highlights: [
			'Reusable checklist template for SEO, metadata, links, and content quality.',
			'Automatic checklist creation per new post in docs/checklists.',
		],
	},
	{
		date: '2026-02-21',
		title: 'Social preview and analytics groundwork',
		summary: 'Added dedicated OG images and optional privacy-friendly analytics integration.',
		highlights: [
			'Dedicated OG images for home, blog, and posts.',
			'Optional Plausible/Umami integration via environment variables.',
			'Outbound click tracking support.',
		],
	},
	{
		date: '2026-02-21',
		title: 'Secondary page simplification',
		summary: 'Now, Work, and About pages were simplified to title-first cards and cleaner structure.',
		highlights: [
			'Title-only card sections for quick scanning.',
			'Visual consistency pass for card surfaces.',
		],
	},
];

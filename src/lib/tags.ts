import { getPublishedPosts } from './posts';

export function tagToSlug(tag: string): string {
	return tag.trim().toLowerCase().replace(/\s+/g, '-');
}

type TagSummary = {
	name: string;
	slug: string;
	count: number;
	description: string;
};

const TAG_DESCRIPTIONS: Record<string, string> = {
	ai: 'Practical notes on applying AI in engineering work.',
	'ai-agents': 'Agent-building patterns, tooling, and lessons from implementation.',
	'build-log': 'Execution notes and iterative project updates.',
	'github-pages': 'Static deployment and GitHub Pages operational details.',
	'platform-engineering': 'Platform reliability, delivery quality, and infrastructure patterns.',
};

export function getTagDescription(tag: string): string {
	const slug = tagToSlug(tag);
	return TAG_DESCRIPTIONS[slug] || `Posts related to ${tag}.`;
}

export async function getTagSummaries(): Promise<TagSummary[]> {
	const posts = await getPublishedPosts();
	const counts = new Map<string, number>();

	for (const post of posts) {
		for (const tag of post.data.tags) {
			counts.set(tag, (counts.get(tag) || 0) + 1);
		}
	}

	return Array.from(counts.entries())
		.map(([name, count]) => ({
			name,
			slug: tagToSlug(name),
			count,
			description: getTagDescription(name),
		}))
		.sort((a, b) => a.name.localeCompare(b.name));
}

export async function getPostsForTagSlug(slug: string) {
	const posts = await getPublishedPosts();
	const filtered = posts.filter((post) => post.data.tags.some((tag) => tagToSlug(tag) === slug));

	const tagName = filtered
		.flatMap((post) => post.data.tags)
		.find((tag) => tagToSlug(tag) === slug);

	return {
		tagName: tagName || slug,
		posts: filtered,
	};
}

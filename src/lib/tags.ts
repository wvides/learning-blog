import { getPublishedPosts } from './posts';

export function tagToSlug(tag: string): string {
	return tag.trim().toLowerCase().replace(/\s+/g, '-');
}

type TagSummary = {
	name: string;
	slug: string;
	count: number;
};

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

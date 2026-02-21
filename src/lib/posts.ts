import { getCollection, type CollectionEntry } from 'astro:content';

type BlogEntry = CollectionEntry<'blog'>;

export function slugFromPostId(id: string): string {
	return id.replace(/\.md$/, '');
}

export function postPathFromId(id: string): string {
	return `/blog/${slugFromPostId(id)}/`;
}

export function estimateReadingTimeMinutes(body: string, wordsPerMinute = 220): number {
	const words = body
		.trim()
		.split(/\s+/)
		.filter(Boolean).length;
	return Math.max(1, Math.ceil(words / wordsPerMinute));
}

export async function getPublishedPosts(): Promise<BlogEntry[]> {
	const posts = await getCollection('blog');
	return posts
		.filter((post) => !post.data.draft)
		.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}

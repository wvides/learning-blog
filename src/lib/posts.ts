import { getCollection, type CollectionEntry } from 'astro:content';

type BlogEntry = CollectionEntry<'blog'>;

export function slugFromPostId(id: string): string {
	return id.replace(/\.md$/, '');
}

export function postPathFromId(id: string): string {
	return `/blog/${slugFromPostId(id)}/`;
}

export async function getPublishedPosts(): Promise<BlogEntry[]> {
	const posts = await getCollection('blog');
	return posts
		.filter((post) => !post.data.draft)
		.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}

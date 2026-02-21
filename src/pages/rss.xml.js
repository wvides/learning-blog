import rss from '@astrojs/rss';
import { SITE_DESCRIPTION, SITE_TITLE } from '../consts';
import { getPublishedPosts, postPathFromId } from '../lib/posts';

export async function GET(context) {
	const posts = await getPublishedPosts();
	const basePath = import.meta.env.BASE_URL.replace(/\/$/, '');

	return rss({
		title: SITE_TITLE,
		description: SITE_DESCRIPTION,
		site: context.site,
		items: posts.map((post) => ({
			title: post.data.title,
			description: post.data.summary || post.data.description,
			pubDate: post.data.pubDate,
			link: `${basePath}${postPathFromId(post.id)}`,
		})),
		customData: '<language>en-us</language>',
	});
}

import type { APIRoute } from 'astro';

export const GET: APIRoute = ({ site }) => {
	const origin = site?.toString().replace(/\/$/, '') ?? '';
	const basePath = import.meta.env.BASE_URL.replace(/\/$/, '');
	const sitemap = `${origin}${basePath}/sitemap-index.xml`;

	const body = [`User-agent: *`, `Allow: /`, `Sitemap: ${sitemap}`].join('\n');

	return new Response(body, {
		headers: {
			'Content-Type': 'text/plain; charset=utf-8',
		},
	});
};

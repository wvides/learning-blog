import { expect, test } from '@playwright/test';

const routes = [
	{ name: 'home', path: '/' },
	{ name: 'blog', path: '/blog/' },
	{ name: 'now', path: '/now/' },
	{ name: 'uses', path: '/uses/' },
	{ name: 'about', path: '/about/' },
];

for (const route of routes) {
	test(`visual: ${route.name}`, async ({ page }) => {
		await page.addInitScript(() => {
			localStorage.setItem('learning-blog-theme', 'dark');
		});
		await page.goto(route.path, { waitUntil: 'networkidle' });
		await page.evaluate(async () => {
			if (document.fonts && document.fonts.ready) {
				await document.fonts.ready;
			}
		});
		await expect(page).toHaveScreenshot(`${route.name}.png`, {
			fullPage: true,
			maxDiffPixelRatio: 0.01,
			animations: 'disabled',
		});
	});
}

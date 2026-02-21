import { defineConfig } from '@playwright/test';

export default defineConfig({
	testDir: './tests',
	testMatch: 'visual-regression.spec.ts',
	timeout: 60_000,
	expect: {
		timeout: 10_000,
	},
	use: {
		baseURL: 'http://127.0.0.1:4321/learning-blog',
		viewport: { width: 1365, height: 900 },
		ignoreHTTPSErrors: true,
	},
	snapshotPathTemplate: '{testDir}/__screenshots__/{arg}{ext}',
	webServer: {
		command: 'npm run preview -- --host 127.0.0.1 --port 4321',
		url: 'http://127.0.0.1:4321/learning-blog/',
		reuseExistingServer: true,
		timeout: 120_000,
	},
});

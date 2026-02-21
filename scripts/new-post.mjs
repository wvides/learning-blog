import fs from 'node:fs/promises';
import path from 'node:path';

const ROOT = process.cwd();
const TEMPLATE_PATH = path.join(ROOT, 'templates', 'blog-post.md');
const CHECKLIST_TEMPLATE_PATH = path.join(ROOT, 'templates', 'post-checklist.md');
const CONTENT_DIR = path.join(ROOT, 'src', 'content', 'blog');
const CHECKLIST_DIR = path.join(ROOT, 'docs', 'checklists');

function toSlug(input) {
	return input
		.toLowerCase()
		.normalize('NFKD')
		.replace(/[\u0300-\u036f]/g, '')
		.replace(/[^a-z0-9]+/g, '-')
		.replace(/^-+|-+$/g, '')
		.slice(0, 80);
}

function todayIsoDate() {
	return new Date().toISOString().slice(0, 10);
}

function usage() {
	console.log('Usage: npm run new-post -- "Post title"');
}

const rawTitle = process.argv.slice(2).join(' ').trim();
if (!rawTitle || rawTitle === '--help' || rawTitle === '-h') {
	usage();
	process.exit(rawTitle ? 0 : 1);
}

const slug = toSlug(rawTitle);
if (!slug) {
	console.error('Could not generate a valid slug from the title.');
	process.exit(1);
}

const filePath = path.join(CONTENT_DIR, `${slug}.md`);
const checklistPath = path.join(CHECKLIST_DIR, `${slug}.md`);
const date = todayIsoDate();

let template;
try {
	template = await fs.readFile(TEMPLATE_PATH, 'utf8');
} catch {
	template = `---
title: "__TITLE__"
description: "__TITLE__"
summary: "One-line summary for card previews."
pubDate: "__DATE__"
updatedDate: "__DATE__"
tags:
  - learning
draft: true
---
`;
}

const output = template
	.replace(/__TITLE__/g, rawTitle)
	.replace(/__DATE__/g, date);

try {
	await fs.access(filePath);
	console.error(`Post already exists: ${filePath}`);
	process.exit(1);
} catch {
	await fs.mkdir(CONTENT_DIR, { recursive: true });
	await fs.writeFile(filePath, output, 'utf8');
	console.log(`Created: ${path.relative(ROOT, filePath)}`);

	try {
		const checklistTemplate = await fs.readFile(CHECKLIST_TEMPLATE_PATH, 'utf8');
		const checklistOutput = checklistTemplate
			.replace(/__TITLE__/g, rawTitle)
			.replace(/__SLUG__/g, slug)
			.replace(/__DATE__/g, date);
		await fs.mkdir(CHECKLIST_DIR, { recursive: true });
		await fs.writeFile(checklistPath, checklistOutput, 'utf8');
		console.log(`Created: ${path.relative(ROOT, checklistPath)}`);
	} catch {
		console.log('Checklist template not found, skipping checklist generation.');
	}
}

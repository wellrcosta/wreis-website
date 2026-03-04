import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';

import type { Post, PostFrontmatter } from './types';

const POSTS_DIR = path.join(process.cwd(), 'src', 'content', 'posts');

export function getAllPostSlugs() {
  if (!fs.existsSync(POSTS_DIR)) return [];

  return fs
    .readdirSync(POSTS_DIR)
    .filter((f) => f.endsWith('.mdx'))
    .map((f) => f.replace(/\.mdx$/, ''));
}

export function getPostBySlug(slug: string): Post {
  const fullPath = path.join(POSTS_DIR, `${slug}.mdx`);
  const raw = fs.readFileSync(fullPath, 'utf8');
  const parsed = matter(raw);

  const frontmatter = parsed.data as PostFrontmatter;
  if (!frontmatter?.title || !frontmatter?.date || !frontmatter?.summary) {
    throw new Error(`Invalid frontmatter in ${slug}.mdx`);
  }

  return {
    slug,
    frontmatter,
    content: parsed.content,
  };
}

export function getAllPosts(): Post[] {
  return getAllPostSlugs()
    .map((slug) => getPostBySlug(slug))
    .sort((a, b) => (a.frontmatter.date < b.frontmatter.date ? 1 : -1));
}

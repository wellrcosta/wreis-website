import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';

import type { Project, ProjectFrontmatter } from './types';

const PROJECTS_DIR = path.join(process.cwd(), 'src', 'content', 'projects');

export function getAllProjectSlugs() {
  if (!fs.existsSync(PROJECTS_DIR)) return [];

  return fs
    .readdirSync(PROJECTS_DIR)
    .filter((f) => f.endsWith('.mdx'))
    .map((f) => f.replace(/\.mdx$/, ''));
}

export function getProjectBySlug(slug: string): Project {
  const fullPath = path.join(PROJECTS_DIR, `${slug}.mdx`);
  const raw = fs.readFileSync(fullPath, 'utf8');
  const parsed = matter(raw);

  const frontmatter = parsed.data as ProjectFrontmatter;
  if (!frontmatter?.title || !frontmatter?.summary) {
    throw new Error(`Invalid frontmatter in ${slug}.mdx`);
  }

  return {
    slug,
    frontmatter,
    content: parsed.content,
  };
}

function safeDate(dateStr: string | undefined) {
  if (!dateStr) return new Date(0);
  const d = new Date(dateStr);
  return Number.isNaN(d.getTime()) ? new Date(0) : d;
}

export function getAllProjects(): Project[] {
  return getAllProjectSlugs()
    .map((slug) => getProjectBySlug(slug))
    .sort((a, b) => {
      const ad = safeDate(a.frontmatter.date);
      const bd = safeDate(b.frontmatter.date);
      return bd.getTime() - ad.getTime();
    });
}

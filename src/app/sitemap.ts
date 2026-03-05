import type { MetadataRoute } from 'next';

import { getAllPosts } from '@/lib/blog/posts';
import { site } from '@/config/site';
import { getAllProjects } from '@/lib/projects/projects';

function safeDate(dateStr: string | undefined) {
  if (!dateStr) return new Date();
  const d = new Date(dateStr);
  return Number.isNaN(d.getTime()) ? new Date() : d;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ['/', '/about', '/blog', '/projects', '/requests', '/contact'].map(
    (p) => ({
      url: `${site.url}${p}`,
      lastModified: new Date(),
    }),
  );

  const posts = getAllPosts().map((p) => ({
    url: `${site.url}/blog/${p.slug}`,
    lastModified: safeDate(p.frontmatter.date),
  }));

  const projects = getAllProjects().map((p) => ({
    url: `${site.url}/projects/${p.slug}`,
    lastModified: safeDate(p.frontmatter.date),
  }));

  return [...pages, ...posts, ...projects];
}

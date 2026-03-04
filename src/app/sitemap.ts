import type { MetadataRoute } from 'next';

import { site } from '@/config/site';
import { getAllPostSlugs } from '@/lib/blog/posts';
import { getAllProjectSlugs } from '@/lib/projects/projects';

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ['/', '/blog', '/projects', '/requests', '/contact'].map((p) => ({
    url: `${site.url}${p}`,
    lastModified: new Date(),
  }));

  const posts = getAllPostSlugs().map((slug) => ({
    url: `${site.url}/blog/${slug}`,
    lastModified: new Date(),
  }));

  const projects = getAllProjectSlugs().map((slug) => ({
    url: `${site.url}/projects/${slug}`,
    lastModified: new Date(),
  }));

  return [...pages, ...posts, ...projects];
}

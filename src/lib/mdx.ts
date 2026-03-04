import fs from 'node:fs';

import matter from 'gray-matter';
import { compileMDX } from 'next-mdx-remote/rsc';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';

export async function compileMdx<TFrontmatter extends Record<string, unknown>>(
  fullPath: string,
) {
  const raw = fs.readFileSync(fullPath, 'utf8');
  const parsed = matter(raw);

  const { content } = await compileMDX<TFrontmatter>({
    source: parsed.content,
    options: {
      parseFrontmatter: false,
      mdxOptions: {
        remarkPlugins: [remarkGfm],
        rehypePlugins: [rehypeSlug, [rehypeAutolinkHeadings, { behavior: 'wrap' }]],
      },
    },
  });

  return {
    content,
    frontmatter: parsed.data as TFrontmatter,
  };
}

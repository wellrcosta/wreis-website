import fs from 'node:fs';

import matter from 'gray-matter';
import { compileMDX } from 'next-mdx-remote/rsc';
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
      },
    },
  });

  return {
    content,
    frontmatter: parsed.data as TFrontmatter,
  };
}

import path from 'node:path';

import { notFound } from 'next/navigation';

import { getAllPostSlugs } from '@/lib/blog/posts';
import type { PostFrontmatter } from '@/lib/blog/types';
import { compileMdx } from '@/lib/mdx';

export function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({ slug }));
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const fullPath = path.join(
    process.cwd(),
    'src',
    'content',
    'posts',
    `${params.slug}.mdx`,
  );

  let compiled: Awaited<ReturnType<typeof compileMdx<PostFrontmatter>>>;
  try {
    compiled = await compileMdx<PostFrontmatter>(fullPath);
  } catch {
    notFound();
  }

  const { content, frontmatter } = compiled;

  return (
    <main className="mx-auto max-w-3xl space-y-8 px-6 py-16">
      <header className="space-y-2">
        <h1 className="text-3xl font-bold">{frontmatter.title}</h1>
        <p className="text-muted-foreground">{frontmatter.summary}</p>
        <time className="text-muted-foreground text-xs">{frontmatter.date}</time>
      </header>

      <article className="prose prose-neutral max-w-none">{content}</article>
    </main>
  );
}

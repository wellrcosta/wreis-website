import path from 'node:path';

import { notFound } from 'next/navigation';

import { Toc } from '@/components/toc';
import { getAllPostSlugs } from '@/lib/blog/posts';
import type { PostFrontmatter } from '@/lib/blog/types';
import { compileMdx } from '@/lib/mdx';
import { extractTocFromMdx } from '@/lib/toc';

export function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({ slug }));
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const fullPath = path.join(process.cwd(), 'src', 'content', 'posts', `${slug}.mdx`);

  let compiled: Awaited<ReturnType<typeof compileMdx<PostFrontmatter>>>;
  try {
    compiled = await compileMdx<PostFrontmatter>(fullPath);
  } catch {
    notFound();
  }

  const { content, frontmatter, source } = compiled;
  const toc = extractTocFromMdx(source);

  return (
    <main className="mx-auto max-w-5xl space-y-8 px-6 py-16">
      <div className="grid gap-8 lg:grid-cols-[1fr_260px]">
        <div className="space-y-8">
          <header className="space-y-2">
            <h1 className="text-3xl font-bold">{frontmatter.title}</h1>
            <p className="text-muted-foreground">{frontmatter.summary}</p>
            <time className="text-muted-foreground text-xs">{frontmatter.date}</time>
          </header>

          <article className="prose prose-neutral max-w-none">{content}</article>
        </div>

        <aside className="hidden lg:block">
          <div className="sticky top-6">
            <Toc items={toc} />
          </div>
        </aside>
      </div>
    </main>
  );
}

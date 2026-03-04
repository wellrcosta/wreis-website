import { notFound } from 'next/navigation';

import { getAllPostSlugs, getPostBySlug } from '@/lib/blog/posts';

export function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({ slug }));
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  let post: ReturnType<typeof getPostBySlug>;

  try {
    post = getPostBySlug(params.slug);
  } catch {
    notFound();
  }

  return (
    <main className="mx-auto max-w-3xl space-y-8 px-6 py-16">
      <header className="space-y-2">
        <h1 className="text-3xl font-bold">{post.frontmatter.title}</h1>
        <p className="text-muted-foreground">{post.frontmatter.summary}</p>
        <time className="text-muted-foreground text-xs">{post.frontmatter.date}</time>
      </header>

      <article className="prose prose-neutral max-w-none">
        <div>{post.content}</div>
      </article>
    </main>
  );
}

import Link from 'next/link';

import { getAllPosts } from '@/lib/blog/posts';

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <main className="mx-auto max-w-5xl space-y-6 px-6 py-16">
      <header className="space-y-2">
        <h1 className="text-2xl font-bold">Blog</h1>
        <p className="text-muted-foreground">Writing, notes, and deep dives.</p>
      </header>

      <div className="space-y-4">
        {posts.map((p) => (
          <article key={p.slug} className="rounded-xl border p-6">
            <div className="flex items-start justify-between gap-4">
              <div className="space-y-1">
                <h2 className="text-lg font-semibold">
                  <Link className="underline" href={`/blog/${p.slug}`}>
                    {p.frontmatter.title}
                  </Link>
                </h2>
                <p className="text-muted-foreground text-sm">{p.frontmatter.summary}</p>
              </div>
              <time className="text-muted-foreground text-xs">{p.frontmatter.date}</time>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}

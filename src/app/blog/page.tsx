import Link from 'next/link';

import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { getAllPosts } from '@/lib/blog/posts';

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <main className="mx-auto max-w-5xl space-y-6 px-6 py-16">
      <header className="space-y-2">
        <h1 className="text-2xl font-bold">Blog</h1>
        <p className="text-muted-foreground">Writing, notes, and deep dives.</p>
      </header>

      <div className="grid gap-4">
        {posts.map((p) => (
          <Card key={p.slug}>
            <CardHeader className="space-y-2">
              <div className="flex items-start justify-between gap-4">
                <CardTitle className="text-base">
                  <Link className="underline" href={`/blog/${p.slug}`}>
                    {p.frontmatter.title}
                  </Link>
                </CardTitle>
                <time className="text-muted-foreground text-xs">
                  {p.frontmatter.date}
                </time>
              </div>
              <p className="text-muted-foreground text-sm">{p.frontmatter.summary}</p>
            </CardHeader>

            {p.frontmatter.tags?.length ? (
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {p.frontmatter.tags.map((t) => (
                    <Badge key={t} variant="secondary">
                      {t}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            ) : null}
          </Card>
        ))}
      </div>
    </main>
  );
}

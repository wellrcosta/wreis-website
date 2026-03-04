import Link from 'next/link';

import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { getAllPosts } from '@/lib/blog/posts';

export default function BlogPage() {
  const posts = getAllPosts();

  const featured = posts.find((p) => p.frontmatter.featured);
  const rest = posts.filter((p) => p.slug !== featured?.slug);

  return (
    <main className="mx-auto max-w-5xl space-y-8 px-6 py-16">
      <header className="space-y-2">
        <h1 className="text-2xl font-bold">Blog</h1>
        <p className="text-muted-foreground">Writing, notes, and deep dives.</p>
      </header>

      {featured ? (
        <Card className="overflow-hidden">
          <CardHeader className="space-y-2">
            <p className="text-muted-foreground text-xs font-medium">Featured</p>
            <CardTitle className="text-lg">
              <Link className="underline" href={`/blog/${featured.slug}`}>
                {featured.frontmatter.title}
              </Link>
            </CardTitle>
            <p className="text-muted-foreground text-sm">
              {featured.frontmatter.summary}
            </p>
          </CardHeader>
          <CardContent className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex flex-wrap gap-2">
              {featured.frontmatter.tags?.map((t) => (
                <Badge key={t} variant="secondary">
                  {t}
                </Badge>
              ))}
            </div>
            <time className="text-muted-foreground text-xs">
              {featured.frontmatter.date}
            </time>
          </CardContent>
        </Card>
      ) : null}

      <div className="grid gap-4">
        {rest.map((p) => (
          <Card key={p.slug} className="hover:bg-accent/30 transition-colors">
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

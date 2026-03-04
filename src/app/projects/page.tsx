import Link from 'next/link';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { getAllProjects } from '@/lib/projects/projects';

export default function ProjectsPage() {
  const projects = getAllProjects();

  return (
    <main className="mx-auto max-w-5xl space-y-8 px-6 py-16">
      <header className="space-y-2">
        <h1 className="text-2xl font-bold">Projects</h1>
        <p className="text-muted-foreground">
          A curated list of projects I&apos;ve shipped and learned from.
        </p>
      </header>

      <div className="grid gap-4 sm:grid-cols-2">
        {projects.map((p) => (
          <Card key={p.slug} className="hover:bg-accent/30 transition-colors">
            <CardHeader className="space-y-2">
              <CardTitle className="text-base">
                <Link className="underline" href={`/projects/${p.slug}`}>
                  {p.frontmatter.title}
                </Link>
              </CardTitle>
              <p className="text-muted-foreground text-sm">{p.frontmatter.summary}</p>
            </CardHeader>

            <CardContent className="space-y-4">
              {p.frontmatter.stack?.length ? (
                <div className="flex flex-wrap gap-2">
                  {p.frontmatter.stack.map((s) => (
                    <Badge key={s} variant="secondary">
                      {s}
                    </Badge>
                  ))}
                </div>
              ) : null}

              {p.frontmatter.highlights?.length ? (
                <ul className="text-muted-foreground list-disc space-y-1 pl-5 text-sm">
                  {p.frontmatter.highlights.slice(0, 3).map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>
              ) : null}

              <div className="flex flex-wrap gap-2">
                <Button asChild size="sm" variant="outline">
                  <Link href={`/projects/${p.slug}`}>Details</Link>
                </Button>
                {p.frontmatter.links?.repo ? (
                  <Button asChild size="sm" variant="secondary">
                    <a href={p.frontmatter.links.repo} target="_blank">
                      Repo
                    </a>
                  </Button>
                ) : null}
                {p.frontmatter.links?.live ? (
                  <Button asChild size="sm" variant="secondary">
                    <a href={p.frontmatter.links.live} target="_blank">
                      Live
                    </a>
                  </Button>
                ) : null}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </main>
  );
}

import Link from 'next/link';

import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { getAllProjects } from '@/lib/projects/projects';

export default function ProjectsPage() {
  const projects = getAllProjects();

  return (
    <main className="mx-auto max-w-5xl space-y-6 px-6 py-16">
      <header className="space-y-2">
        <h1 className="text-2xl font-bold">Projects</h1>
        <p className="text-muted-foreground">A curated list of work and experiments.</p>
      </header>

      <div className="grid gap-4 sm:grid-cols-2">
        {projects.map((p) => (
          <Card key={p.slug}>
            <CardHeader>
              <CardTitle className="text-base">
                <Link className="underline" href={`/projects/${p.slug}`}>
                  {p.frontmatter.title}
                </Link>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-muted-foreground text-sm">{p.frontmatter.summary}</p>
              {p.frontmatter.stack?.length ? (
                <div className="flex flex-wrap gap-2">
                  {p.frontmatter.stack.map((s) => (
                    <Badge key={s} variant="secondary">
                      {s}
                    </Badge>
                  ))}
                </div>
              ) : null}
            </CardContent>
          </Card>
        ))}
      </div>
    </main>
  );
}

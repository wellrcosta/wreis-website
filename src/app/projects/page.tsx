import Link from 'next/link';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { getAllProjects } from '@/lib/projects/projects';

export default function ProjectsPage() {
  const projects = getAllProjects();

  const featured = projects.find((p) => p.frontmatter.featured);
  const rest = projects.filter((p) => p.slug !== featured?.slug);

  return (
    <main className="mx-auto max-w-5xl space-y-8 px-6 py-16">
      <header className="space-y-2">
        <h1 className="text-2xl font-bold">Projects</h1>
        <p className="text-muted-foreground">
          A curated list of projects I&apos;ve shipped, maintained, and learned from.
        </p>
      </header>

      {featured ? (
        <Card className="overflow-hidden">
          <CardHeader className="space-y-2">
            <p className="text-muted-foreground text-xs font-medium">Featured</p>
            <CardTitle className="text-lg">
              <Link className="underline" href={`/projects/${featured.slug}`}>
                {featured.frontmatter.title}
              </Link>
            </CardTitle>
            {featured.frontmatter.role ? (
              <p className="text-muted-foreground text-xs">{featured.frontmatter.role}</p>
            ) : null}
            <p className="text-muted-foreground text-sm">
              {featured.frontmatter.summary}
            </p>
          </CardHeader>

          <CardContent className="space-y-4">
            {featured.frontmatter.stack?.length ? (
              <div className="flex flex-wrap gap-2">
                {featured.frontmatter.stack.map((s) => (
                  <Badge key={s} variant="secondary">
                    {s}
                  </Badge>
                ))}
              </div>
            ) : null}

            {featured.frontmatter.highlights?.length ? (
              <ul className="text-muted-foreground list-disc space-y-1 pl-5 text-sm">
                {featured.frontmatter.highlights.slice(0, 4).map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
            ) : null}

            <div className="flex flex-wrap gap-2">
              <Button asChild size="sm" variant="outline">
                <Link href={`/projects/${featured.slug}`}>Details</Link>
              </Button>
              {featured.frontmatter.links?.repo ? (
                <Button asChild size="sm" variant="secondary">
                  <a href={featured.frontmatter.links.repo} target="_blank">
                    Repo
                  </a>
                </Button>
              ) : null}
              {featured.frontmatter.links?.live ? (
                <Button asChild size="sm" variant="secondary">
                  <a href={featured.frontmatter.links.live} target="_blank">
                    Live
                  </a>
                </Button>
              ) : null}
            </div>
          </CardContent>
        </Card>
      ) : null}

      <section className="space-y-3">
        <h2 className="text-lg font-semibold">More projects</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {rest.map((p) => (
            <Card key={p.slug} className="hover:bg-accent/30 transition-colors">
              <CardHeader className="space-y-2">
                <CardTitle className="text-base">
                  <Link className="underline" href={`/projects/${p.slug}`}>
                    {p.frontmatter.title}
                  </Link>
                </CardTitle>
                {p.frontmatter.role ? (
                  <p className="text-muted-foreground text-xs">{p.frontmatter.role}</p>
                ) : null}
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
      </section>
    </main>
  );
}

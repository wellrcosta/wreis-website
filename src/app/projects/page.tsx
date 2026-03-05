import Link from 'next/link';

import { ArrowRight, ExternalLink } from 'lucide-react';

import { PageHero } from '@/components/page-hero';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { getAllProjects } from '@/lib/projects/projects';

function ProjectActions({
  href,
  repo,
  live,
}: {
  href: string;
  repo?: string;
  live?: string;
}) {
  return (
    <div className="flex flex-wrap gap-2">
      <Button asChild size="sm" variant="outline">
        <Link href={href}>
          Details <ArrowRight className="h-4 w-4" />
        </Link>
      </Button>

      {repo ? (
        <Button asChild size="sm" variant="secondary">
          <a href={repo} target="_blank">
            Repo <ExternalLink className="h-4 w-4" />
          </a>
        </Button>
      ) : null}

      {live ? (
        <Button asChild size="sm" variant="secondary">
          <a href={live} target="_blank">
            Live <ExternalLink className="h-4 w-4" />
          </a>
        </Button>
      ) : null}
    </div>
  );
}

export default function ProjectsPage() {
  const projects = getAllProjects();

  const featured = projects.find((p) => p.frontmatter.featured);
  const rest = projects.filter((p) => p.slug !== featured?.slug);

  return (
    <main className="mx-auto max-w-5xl space-y-8 px-6 py-16">
      <PageHero
        title="Projects"
        subtitle="A curated list of projects I’ve shipped, maintained, and learned from."
        meta={
          <Badge variant="secondary">
            {projects.length} {projects.length === 1 ? 'project' : 'projects'}
          </Badge>
        }
      />

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

            <ProjectActions
              href={`/projects/${featured.slug}`}
              repo={featured.frontmatter.links?.repo}
              live={featured.frontmatter.links?.live}
            />
          </CardContent>
        </Card>
      ) : null}

      <section className="space-y-3">
        <h2 className="text-lg font-semibold">More projects</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {rest.map((p) => (
            <Card key={p.slug} className="hover:bg-accent/20 transition-colors">
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
                    {p.frontmatter.stack.slice(0, 8).map((s) => (
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

                <ProjectActions
                  href={`/projects/${p.slug}`}
                  repo={p.frontmatter.links?.repo}
                  live={p.frontmatter.links?.live}
                />
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </main>
  );
}

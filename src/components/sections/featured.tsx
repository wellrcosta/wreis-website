import Link from 'next/link';

import { ArrowRight, ExternalLink } from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { getAllPosts } from '@/lib/blog/posts';
import { getAllProjects } from '@/lib/projects/projects';

export function Featured() {
  const featuredPost = getAllPosts().find((p) => p.frontmatter.featured);
  const featuredProject = getAllProjects().find((p) => p.frontmatter.featured);

  if (!featuredPost && !featuredProject) return null;

  return (
    <section className="grid gap-4 md:grid-cols-2">
      {featuredProject ? (
        <Card>
          <CardHeader className="space-y-2">
            <p className="text-muted-foreground text-xs font-medium">Featured project</p>
            <CardTitle className="text-base">
              <Link className="underline" href={`/projects/${featuredProject.slug}`}>
                {featuredProject.frontmatter.title}
              </Link>
            </CardTitle>
            <p className="text-muted-foreground text-sm">
              {featuredProject.frontmatter.summary}
            </p>
          </CardHeader>
          <CardContent className="space-y-4">
            {featuredProject.frontmatter.stack?.length ? (
              <div className="flex flex-wrap gap-2">
                {featuredProject.frontmatter.stack.slice(0, 6).map((s) => (
                  <Badge key={s} variant="secondary">
                    {s}
                  </Badge>
                ))}
              </div>
            ) : null}

            <div className="flex flex-wrap gap-2">
              <Button asChild size="sm" variant="outline">
                <Link href={`/projects/${featuredProject.slug}`}>
                  Details <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              {featuredProject.frontmatter.links?.repo ? (
                <Button asChild size="sm" variant="secondary">
                  <a href={featuredProject.frontmatter.links.repo} target="_blank">
                    Repo <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
              ) : null}
            </div>
          </CardContent>
        </Card>
      ) : null}

      {featuredPost ? (
        <Card>
          <CardHeader className="space-y-2">
            <p className="text-muted-foreground text-xs font-medium">Featured post</p>
            <CardTitle className="text-base">
              <Link className="underline" href={`/blog/${featuredPost.slug}`}>
                {featuredPost.frontmatter.title}
              </Link>
            </CardTitle>
            <p className="text-muted-foreground text-sm">
              {featuredPost.frontmatter.summary}
            </p>
          </CardHeader>
          <CardContent className="space-y-4">
            {featuredPost.frontmatter.tags?.length ? (
              <div className="flex flex-wrap gap-2">
                {featuredPost.frontmatter.tags.slice(0, 6).map((t) => (
                  <Badge key={t} variant="secondary">
                    {t}
                  </Badge>
                ))}
              </div>
            ) : null}

            <Button asChild size="sm" variant="outline">
              <Link href={`/blog/${featuredPost.slug}`}>
                Read <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </CardContent>
        </Card>
      ) : null}
    </section>
  );
}

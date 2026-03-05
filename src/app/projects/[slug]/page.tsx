import path from 'node:path';

import { notFound } from 'next/navigation';

import { Toc } from '@/components/toc';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { getAllProjectSlugs } from '@/lib/projects/projects';
import type { ProjectFrontmatter } from '@/lib/projects/types';
import { compileMdx } from '@/lib/mdx';
import { extractTocFromMdx } from '@/lib/toc';

export function generateStaticParams() {
  return getAllProjectSlugs().map((slug) => ({ slug }));
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const fullPath = path.join(process.cwd(), 'src', 'content', 'projects', `${slug}.mdx`);

  let compiled: Awaited<ReturnType<typeof compileMdx<ProjectFrontmatter>>>;
  try {
    compiled = await compileMdx<ProjectFrontmatter>(fullPath);
  } catch {
    notFound();
  }

  const { content, frontmatter, source } = compiled;
  const toc = extractTocFromMdx(source);

  return (
    <main className="mx-auto max-w-5xl space-y-8 px-6 py-16">
      <div className="grid gap-8 lg:grid-cols-[1fr_260px]">
        <div className="space-y-8">
          <header className="space-y-3">
            <h1 className="text-3xl font-bold">{frontmatter.title}</h1>
            <p className="text-muted-foreground">{frontmatter.summary}</p>

            {frontmatter.stack?.length ? (
              <div className="flex flex-wrap gap-2">
                {frontmatter.stack.map((s) => (
                  <Badge key={s} variant="secondary">
                    {s}
                  </Badge>
                ))}
              </div>
            ) : null}

            {(frontmatter.links?.repo || frontmatter.links?.live) && (
              <div className="text-sm">
                {frontmatter.links?.repo ? (
                  <a className="underline" href={frontmatter.links.repo} target="_blank">
                    Repository
                  </a>
                ) : null}
                {frontmatter.links?.live ? (
                  <>
                    {' · '}
                    <a
                      className="underline"
                      href={frontmatter.links.live}
                      target="_blank"
                    >
                      Live
                    </a>
                  </>
                ) : null}
              </div>
            )}
          </header>

          {(frontmatter.role || frontmatter.scope?.length) && (
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Role & scope</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground space-y-2 text-sm">
                {frontmatter.role ? <p>Role: {frontmatter.role}</p> : null}
                {frontmatter.scope?.length ? (
                  <ul className="list-disc space-y-1 pl-5">
                    {frontmatter.scope.map((s) => (
                      <li key={s}>{s}</li>
                    ))}
                  </ul>
                ) : null}
              </CardContent>
            </Card>
          )}

          {frontmatter.keyDecisions?.length ? (
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Key decisions</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground text-sm">
                <ul className="list-disc space-y-1 pl-5">
                  {frontmatter.keyDecisions.map((d) => (
                    <li key={d}>{d}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ) : null}

          {frontmatter.highlights?.length ? (
            <section className="space-y-2">
              <h2 className="text-lg font-semibold">Highlights</h2>
              <ul className="text-muted-foreground list-disc space-y-1 pl-5 text-sm">
                {frontmatter.highlights.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
            </section>
          ) : null}

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

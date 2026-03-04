import { notFound } from 'next/navigation';

import { Badge } from '@/components/ui/badge';
import { getAllProjectSlugs, getProjectBySlug } from '@/lib/projects/projects';

export function generateStaticParams() {
  return getAllProjectSlugs().map((slug) => ({ slug }));
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  let project: ReturnType<typeof getProjectBySlug>;

  try {
    project = getProjectBySlug(params.slug);
  } catch {
    notFound();
  }

  return (
    <main className="mx-auto max-w-3xl space-y-8 px-6 py-16">
      <header className="space-y-3">
        <h1 className="text-3xl font-bold">{project.frontmatter.title}</h1>
        <p className="text-muted-foreground">{project.frontmatter.summary}</p>

        {project.frontmatter.stack?.length ? (
          <div className="flex flex-wrap gap-2">
            {project.frontmatter.stack.map((s) => (
              <Badge key={s} variant="secondary">
                {s}
              </Badge>
            ))}
          </div>
        ) : null}

        <div className="text-sm">
          {project.frontmatter.links?.repo ? (
            <a
              className="underline"
              href={project.frontmatter.links.repo}
              target="_blank"
            >
              Repository
            </a>
          ) : null}
          {project.frontmatter.links?.live ? (
            <>
              {' · '}
              <a
                className="underline"
                href={project.frontmatter.links.live}
                target="_blank"
              >
                Live
              </a>
            </>
          ) : null}
        </div>
      </header>

      {project.frontmatter.highlights?.length ? (
        <section className="space-y-2">
          <h2 className="text-lg font-semibold">Highlights</h2>
          <ul className="text-muted-foreground list-disc space-y-1 pl-5 text-sm">
            {project.frontmatter.highlights.map((h) => (
              <li key={h}>{h}</li>
            ))}
          </ul>
        </section>
      ) : null}

      <article className="prose prose-neutral max-w-none">
        <div>{project.content}</div>
      </article>
    </main>
  );
}

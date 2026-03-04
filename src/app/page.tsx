import Link from 'next/link';

import { site } from '@/config/site';

export default function HomePage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16">
      <div className="space-y-6">
        <p className="text-muted-foreground text-sm">{site.url}</p>
        <h1 className="text-4xl font-bold tracking-tight">{site.title}</h1>
        <p className="text-muted-foreground text-lg">{site.description}</p>

        <div className="flex flex-wrap gap-3">
          <Link
            className="bg-foreground text-background rounded-md px-4 py-2"
            href="/projects"
          >
            Projects
          </Link>
          <Link className="rounded-md border px-4 py-2" href="/blog">
            Blog
          </Link>
          <Link className="rounded-md border px-4 py-2" href="/requests">
            Requests
          </Link>
          <Link className="rounded-md border px-4 py-2" href="/contact">
            Contact
          </Link>
        </div>

        <div className="text-muted-foreground pt-10 text-sm">
          <p>
            GitHub:{' '}
            <a className="underline" href={site.links.github} target="_blank">
              {site.links.github}
            </a>
          </p>
        </div>
      </div>
    </main>
  );
}

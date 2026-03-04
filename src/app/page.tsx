import Link from 'next/link';

import { Bento } from '@/components/sections/bento';
import { Button } from '@/components/ui/button';
import { site } from '@/config/site';

export default function HomePage() {
  return (
    <main className="mx-auto max-w-5xl space-y-12 px-6 py-16">
      <section className="relative overflow-hidden rounded-2xl border p-10">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-transparent to-rose-500/10" />
        <div className="relative space-y-5">
          <p className="text-muted-foreground text-sm">{site.url}</p>
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl">{site.title}</h1>
          <p className="text-muted-foreground max-w-2xl text-lg">{site.description}</p>

          <div className="flex flex-wrap gap-3 pt-2">
            <Button asChild>
              <Link href="/projects">View projects</Link>
            </Button>
            <Button asChild variant="secondary">
              <Link href="/blog">Read the blog</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/contact">Contact</Link>
            </Button>
          </div>

          <div className="text-muted-foreground text-sm">
            <a className="underline" href={site.links.github} target="_blank">
              GitHub
            </a>{' '}
            ·{' '}
            <a className="underline" href={site.links.linkedin} target="_blank">
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      <Bento />
    </main>
  );
}

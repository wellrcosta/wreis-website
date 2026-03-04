import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { site } from '@/config/site';

export default function HomePage() {
  return (
    <main className="mx-auto max-w-5xl space-y-10 px-6 py-16">
      <section className="space-y-4">
        <p className="text-muted-foreground text-sm">{site.url}</p>
        <h1 className="text-4xl font-bold tracking-tight">{site.title}</h1>
        <p className="text-muted-foreground max-w-2xl text-lg">{site.description}</p>

        <div className="flex flex-wrap gap-3 pt-2">
          <Button asChild>
            <Link href="/projects">Projects</Link>
          </Button>
          <Button asChild variant="secondary">
            <Link href="/blog">Blog</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/requests">Requests</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/contact">Contact</Link>
          </Button>
        </div>
      </section>

      <section className="grid gap-4 sm:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>What I do</CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground space-y-2 text-sm">
            <p>Backend & full-stack engineering.</p>
            <p>APIs, CI/CD, and production hardening.</p>
            <p>Clean architecture and pragmatic DX.</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Links</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-sm">
            <a className="underline" href={site.links.github} target="_blank">
              GitHub
            </a>
            <br />
            <a className="underline" href={site.links.linkedin} target="_blank">
              LinkedIn
            </a>
            <br />
            <a className="underline" href={site.links.email}>
              Email
            </a>
          </CardContent>
        </Card>
      </section>
    </main>
  );
}

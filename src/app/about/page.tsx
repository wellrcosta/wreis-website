import Link from 'next/link';

import { PageHero } from '@/components/page-hero';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { site } from '@/config/site';

const coreStack = [
  'Node.js',
  'TypeScript',
  'NestJS',
  'Next.js',
  'Docker',
  'Azure',
  '.NET',
  'Go',
];

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-5xl space-y-8 px-6 py-16">
      <PageHero
        title="About"
        subtitle={
          'Backend & full-stack engineer building integration-heavy solutions with strong operational foundations.'
        }
        meta={
          <>
            <Badge variant="secondary">Integrations</Badge>
            <Badge variant="secondary">Observability</Badge>
            <Badge variant="secondary">Delivery</Badge>
          </>
        }
      />

      <section className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>What I do</CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground space-y-3 text-sm">
            <p>
              I build integrations and internal tools that reduce friction for teams and
              make operations predictable.
            </p>
            <ul className="list-disc space-y-2 pl-5">
              <li>Integration layers: APIs, webhooks, provider adapters.</li>
              <li>
                Solution development: shipping end-to-end features with clear boundaries.
              </li>
              <li>Observability: logs, metrics, traces, and practical alerting.</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Signals</CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground space-y-3 text-sm">
            <ul className="list-disc space-y-2 pl-5">
              <li>
                <strong>10+ CRM integrations</strong> delivered this year.
              </li>
              <li>
                Built <strong>internal tooling</strong> to improve company processes and
                delivery.
              </li>
              <li>
                Not “just Node”: I also ship with <strong>.NET</strong> and{' '}
                <strong>Go</strong>
                when they’re the right fit.
              </li>
            </ul>
          </CardContent>
        </Card>
      </section>

      <Card>
        <CardHeader>
          <CardTitle>Core stack</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {coreStack.map((s) => (
              <Badge key={s} variant="secondary">
                {s}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>

      <section className="grid gap-4 md:grid-cols-2">
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

        <Card>
          <CardHeader>
            <CardTitle>Next</CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground space-y-3 text-sm">
            <p>
              If you want to see the work, jump into the projects and pick a deep-dive.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button asChild>
                <Link href="/projects">View projects</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/contact">Contact</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>
    </main>
  );
}

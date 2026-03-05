import Link from 'next/link';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { site } from '@/config/site';

const coreStack = [
  'TypeScript',
  'Node.js',
  'NestJS',
  'PostgreSQL',
  'Prisma',
  'Next.js',
  'Docker',
  'GitHub Actions',
];

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-5xl space-y-8 px-6 py-16">
      <header className="space-y-2">
        <h1 className="text-2xl font-bold">About</h1>
        <p className="text-muted-foreground">
          I build integration-heavy systems with a focus on reliability and clean
          engineering.
        </p>
      </header>

      <section className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Who I am</CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground space-y-3 text-sm">
            <p>
              I&apos;m Wellington Reis, a software engineer focused on backend and
              full-stack delivery.
            </p>
            <p>
              My day-to-day work involves building integrations and messaging solutions
              (including WhatsApp APIs), designing reliable flows, and shipping
              maintainable code.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>What I do</CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground text-sm">
            <ul className="list-disc space-y-2 pl-5">
              <li>
                Design and implement integration layers (APIs, webhooks, queues,
                providers).
              </li>
              <li>
                Build messaging and automation workflows with strong operational
                guardrails.
              </li>
              <li>
                Improve DX and delivery: CI/CD, tests, observability, and safer deploys.
              </li>
              <li>
                Keep systems boring (in a good way): predictable behavior, clear
                boundaries, and good defaults.
              </li>
            </ul>
          </CardContent>
        </Card>
      </section>

      <Card>
        <CardHeader>
          <CardTitle>Highlights</CardTitle>
        </CardHeader>
        <CardContent className="text-muted-foreground text-sm">
          <ul className="list-disc space-y-2 pl-5">
            <li>Integration-heavy solutions (APIs, webhooks, providers)</li>
            <li>Messaging and automation flows (including WhatsApp APIs)</li>
            <li>Operational reliability: observability, safer deploys, CI/CD</li>
            <li>Clean code and maintainability under real constraints</li>
          </ul>
        </CardContent>
      </Card>

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
            <p>If you want to quickly see what I build, check the projects page.</p>
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

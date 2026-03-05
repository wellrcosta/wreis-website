import Link from 'next/link';

import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export function Bento() {
  return (
    <section className="grid gap-4 md:grid-cols-3">
      <Card className="hover:bg-accent/20 transition-colors md:col-span-2">
        <CardHeader>
          <CardTitle>Backend & full-stack delivery</CardTitle>
        </CardHeader>
        <CardContent className="text-muted-foreground space-y-3 text-sm">
          <p>
            I build solutions end-to-end: services, APIs, internal tooling, and the
            operational foundations to run them (observability, CI/CD, and reliability).
          </p>
          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary">Node.js / TypeScript</Badge>
            <Badge variant="secondary">.NET</Badge>
            <Badge variant="secondary">Go</Badge>
            <Badge variant="secondary">Azure</Badge>
            <Badge variant="secondary">Observability</Badge>
            <Badge variant="secondary">Integrations (current focus)</Badge>
          </div>
        </CardContent>
      </Card>

      <Card className="hover:bg-accent/20 transition-colors">
        <CardHeader>
          <CardTitle>Quick links</CardTitle>
        </CardHeader>
        <CardContent className="text-sm">
          <ul className="space-y-2">
            <li>
              <Link className="underline" href="/projects">
                Projects
              </Link>
            </li>
            <li>
              <Link className="underline" href="/blog">
                Blog
              </Link>
            </li>
            <li>
              <Link className="underline" href="/requests">
                Requests
              </Link>
            </li>
            <li>
              <Link className="underline" href="/about">
                About
              </Link>
            </li>
          </ul>
        </CardContent>
      </Card>

      <Card className="hover:bg-accent/20 transition-colors">
        <CardHeader>
          <CardTitle>What I value</CardTitle>
        </CardHeader>
        <CardContent className="text-muted-foreground space-y-2 text-sm">
          <p>Clarity over cleverness.</p>
          <p>Small, safe increments.</p>
          <p>Ownership and delivery.</p>
        </CardContent>
      </Card>

      <Card className="hover:bg-accent/20 transition-colors">
        <CardHeader>
          <CardTitle>Impact mindset</CardTitle>
        </CardHeader>
        <CardContent className="text-muted-foreground space-y-2 text-sm">
          <p>Make systems observable.</p>
          <p>Reduce operational surprises.</p>
          <p>Ship boring reliability.</p>
        </CardContent>
      </Card>

      <Card className="hover:bg-accent/20 transition-colors md:col-span-2">
        <CardHeader>
          <CardTitle>Writing</CardTitle>
        </CardHeader>
        <CardContent className="text-muted-foreground text-sm">
          Short posts about real problems: delivery constraints, CI friction, auth
          gotchas, and building maintainable systems.
        </CardContent>
      </Card>
    </section>
  );
}

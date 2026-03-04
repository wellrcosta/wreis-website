import Link from 'next/link';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export function Bento() {
  return (
    <section className="grid gap-4 md:grid-cols-3">
      <Card className="md:col-span-2">
        <CardHeader>
          <CardTitle>Building reliable systems</CardTitle>
        </CardHeader>
        <CardContent className="text-muted-foreground space-y-2 text-sm">
          <p>
            I focus on backend and full-stack work with strong fundamentals: clean
            boundaries, pragmatic DX, and production hardening.
          </p>
          <p>
            From auth and domain modeling to CI and observability — I like when the boring
            parts are rock-solid.
          </p>
        </CardContent>
      </Card>

      <Card>
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
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>What I value</CardTitle>
        </CardHeader>
        <CardContent className="text-muted-foreground space-y-2 text-sm">
          <p>Clarity over cleverness.</p>
          <p>Small, safe increments.</p>
          <p>Ownership and delivery.</p>
        </CardContent>
      </Card>

      <Card className="md:col-span-2">
        <CardHeader>
          <CardTitle>Writing</CardTitle>
        </CardHeader>
        <CardContent className="text-muted-foreground text-sm">
          Short posts about real problems: CI friction, auth gotchas, and building
          maintainable code.
        </CardContent>
      </Card>
    </section>
  );
}

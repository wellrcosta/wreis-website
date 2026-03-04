import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { site } from '@/config/site';

export default function NowPage() {
  return (
    <main className="mx-auto max-w-5xl space-y-6 px-6 py-16">
      <header className="space-y-2">
        <h1 className="text-2xl font-bold">Now</h1>
        <p className="text-muted-foreground">What I&apos;m focused on right now.</p>
      </header>

      <div className="grid gap-4 sm:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Work</CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground space-y-2 text-sm">
            <p>
              I&apos;m currently working as a software engineer, building and maintaining
              production systems.
            </p>
            <p>
              (We can tailor this section with your exact role/company and key
              highlights.)
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Focus</CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground space-y-2 text-sm">
            <ul className="list-disc space-y-1 pl-5">
              <li>Backend & full-stack delivery</li>
              <li>Auth, domain modeling, and APIs</li>
              <li>CI/CD and operational hardening</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="sm:col-span-2">
          <CardHeader>
            <CardTitle>Contact</CardTitle>
          </CardHeader>
          <CardContent className="text-sm">
            <a className="underline" href={site.links.email}>
              Email
            </a>{' '}
            ·{' '}
            <a className="underline" href={site.links.linkedin} target="_blank">
              LinkedIn
            </a>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}

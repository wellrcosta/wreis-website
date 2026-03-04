import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { site } from '@/config/site';

const topics = [
  'Integrations',
  'Messaging / WhatsApp APIs',
  'Backend systems',
  'CI/CD and automation',
  'Architecture and refactoring',
];

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-5xl space-y-6 px-6 py-16">
      <header className="space-y-2">
        <h1 className="text-2xl font-bold">Contact</h1>
        <p className="text-muted-foreground">
          The fastest way to reach me is email. You can also connect on LinkedIn.
        </p>
      </header>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Links</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-sm">
            <a className="underline" href={site.links.email}>
              Email
            </a>
            <br />
            <a className="underline" href={site.links.linkedin} target="_blank">
              LinkedIn
            </a>
            <br />
            <a className="underline" href={site.links.github} target="_blank">
              GitHub
            </a>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>What I can help with</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <p className="text-muted-foreground text-sm">
              If you&apos;re reaching out, adding context helps me respond faster.
            </p>
            <div className="flex flex-wrap gap-2">
              {topics.map((t) => (
                <Badge key={t} variant="secondary">
                  {t}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Notes</CardTitle>
        </CardHeader>
        <CardContent className="text-muted-foreground space-y-2 text-sm">
          <p>
            For public suggestions about the website, use the Requests page (GitHub
            Issues).
          </p>
          <p>For private topics (recruiting, partnerships, consulting), email is best.</p>
        </CardContent>
      </Card>
    </main>
  );
}

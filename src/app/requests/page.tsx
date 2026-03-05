import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { site } from '@/config/site';

const repoBase = `${site.links.github}/wreis-website`;
const choose = `${repoBase}/issues/new/choose`;
const requestTemplate = `${repoBase}/issues/new?template=request.yml`;

export default function RequestsPage() {
  return (
    <main className="mx-auto max-w-5xl space-y-6 px-6 py-16">
      <header className="space-y-2">
        <h1 className="text-2xl font-bold">Requests</h1>
        <p className="text-muted-foreground">
          Suggestions and improvements are tracked via GitHub Issues (public).
        </p>
      </header>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Public requests</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground text-sm">
              Use GitHub Issues for feature/content requests and bug reports.
            </p>
            <div className="flex flex-wrap gap-2">
              <Button asChild>
                <a href={requestTemplate} target="_blank">
                  New request
                </a>
              </Button>
              <Button asChild variant="outline">
                <a href={choose} target="_blank">
                  Choose a template
                </a>
              </Button>
              <Button asChild variant="secondary">
                <a href={`${repoBase}/issues`} target="_blank">
                  View issues
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Private contact</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground text-sm">
              Recruiting, partnerships, or anything sensitive: email is best.
            </p>
            <Button asChild variant="outline">
              <a href={site.links.email}>Email</a>
            </Button>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}

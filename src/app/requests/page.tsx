import { Button } from '@/components/ui/button';
import { site } from '@/config/site';

const issuesBase = `${site.links.github}/wreis-website/issues/new/choose`;

export default function RequestsPage() {
  return (
    <main className="mx-auto max-w-5xl space-y-6 px-6 py-16">
      <header className="space-y-2">
        <h1 className="text-2xl font-bold">Requests</h1>
        <p className="text-muted-foreground">
          Want to suggest an improvement or request a new section/post?
        </p>
      </header>

      <div className="space-y-3">
        <p className="text-muted-foreground text-sm">
          Requests are tracked via GitHub Issues (public). If you prefer a private
          message, use the Contact page.
        </p>

        <div className="flex flex-wrap gap-3">
          <Button asChild>
            <a href={issuesBase} target="_blank">
              Create a request
            </a>
          </Button>
          <Button asChild variant="outline">
            <a href={`${site.links.github}/wreis-website/issues`} target="_blank">
              View requests
            </a>
          </Button>
        </div>
      </div>
    </main>
  );
}

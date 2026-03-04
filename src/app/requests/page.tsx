import { site } from '@/config/site';

export default function RequestsPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16">
      <h1 className="text-2xl font-bold">Requests</h1>
      <p className="text-muted-foreground mt-2">Open a request on GitHub Issues.</p>

      <a
        className="mt-6 inline-block underline"
        href={`${site.links.github}/wreis-website/issues/new/choose`}
        target="_blank"
      >
        Create a request
      </a>
    </main>
  );
}

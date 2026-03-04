import { site } from '@/config/site';

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16">
      <h1 className="text-2xl font-bold">Contact</h1>
      <p className="text-muted-foreground mt-2">
        Reach out via email or connect on LinkedIn.
      </p>

      <ul className="mt-6 space-y-2">
        <li>
          <a className="underline" href={site.links.email}>
            Email
          </a>
        </li>
        <li>
          <a className="underline" href={site.links.linkedin} target="_blank">
            LinkedIn
          </a>
        </li>
        <li>
          <a className="underline" href={site.links.github} target="_blank">
            GitHub
          </a>
        </li>
      </ul>
    </main>
  );
}

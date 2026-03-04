import Link from 'next/link';

import { site } from '@/config/site';

export function SiteFooter() {
  return (
    <footer className="border-t">
      <div className="text-muted-foreground mx-auto flex max-w-5xl flex-col gap-3 px-6 py-10 text-sm md:flex-row md:items-center md:justify-between">
        <p>
          © {new Date().getFullYear()} {site.name}. Built with Next.js.
        </p>

        <div className="flex flex-wrap gap-4">
          <Link className="hover:underline" href="/requests">
            Requests
          </Link>
          <a className="hover:underline" href={site.links.github} target="_blank">
            GitHub
          </a>
          <a className="hover:underline" href={site.links.linkedin} target="_blank">
            LinkedIn
          </a>
          <a className="hover:underline" href={site.links.email}>
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}

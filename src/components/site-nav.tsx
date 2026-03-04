import Link from 'next/link';

import { site } from '@/config/site';
import { Button } from '@/components/ui/button';

const links = [
  { href: '/projects', label: 'Projects' },
  { href: '/blog', label: 'Blog' },
  { href: '/requests', label: 'Requests' },
  { href: '/contact', label: 'Contact' },
];

export function SiteNav() {
  return (
    <header className="border-b">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link href="/" className="font-semibold">
          {site.name}
        </Link>
        <nav className="flex gap-2">
          {links.map((l) => (
            <Button key={l.href} asChild variant="ghost" size="sm">
              <Link href={l.href}>{l.label}</Link>
            </Button>
          ))}
        </nav>
      </div>
    </header>
  );
}

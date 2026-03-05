'use client';

import { useState } from 'react';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const links = [
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Projects' },
  { href: '/blog', label: 'Blog' },
  { href: '/requests', label: 'Requests' },
  { href: '/contact', label: 'Contact' },
];

export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative md:hidden">
      <Button
        variant="outline"
        size="sm"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
      >
        Menu
      </Button>

      <div
        className={cn(
          'absolute top-full right-0 z-[60] mt-2 w-56 rounded-xl border bg-[hsl(var(--card)/0.96)] p-2 shadow-lg ring-1 shadow-black/40 ring-white/10 backdrop-blur',
          open ? 'block' : 'hidden',
        )}
      >
        <nav className="flex flex-col">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-muted-foreground hover:bg-accent/20 hover:text-foreground rounded-md px-3 py-2 text-sm"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
}

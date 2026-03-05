'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { cn } from '@/lib/utils';

export function NavLink({ href, label }: { href: string; label: string }) {
  const pathname = usePathname();
  const active = pathname === href || (href !== '/' && pathname.startsWith(href));

  return (
    <Link
      href={href}
      className={cn(
        'text-muted-foreground hover:bg-accent/20 hover:text-foreground rounded-md px-3 py-2 text-sm transition-colors',
        active && 'bg-accent/20 text-foreground',
      )}
    >
      {label}
    </Link>
  );
}

import Link from 'next/link';

import type { TocItem } from '@/lib/toc';
import { cn } from '@/lib/utils';

export function Toc({ items }: { items: TocItem[] }) {
  if (!items.length) return null;

  return (
    <nav className="bg-background/60 rounded-xl border p-4 backdrop-blur">
      <p className="text-muted-foreground text-xs font-medium">On this page</p>
      <ul className="mt-3 space-y-2 text-sm">
        {items.map((i) => (
          <li
            key={`${i.depth}:${i.id}`}
            className={cn(
              'leading-snug',
              i.depth === 3 ? 'text-muted-foreground pl-4' : 'text-foreground',
            )}
          >
            <Link className="hover:underline" href={`#${i.id}`}>
              {i.text}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

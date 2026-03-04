import Link from 'next/link';

import { cn } from '@/lib/utils';
import type { TocItem } from '@/lib/toc';

export function Toc({ items }: { items: TocItem[] }) {
  if (!items.length) return null;

  return (
    <nav className="rounded-xl border p-4">
      <p className="text-muted-foreground text-xs font-medium">On this page</p>
      <ul className="mt-3 space-y-2 text-sm">
        {items.map((i) => (
          <li
            key={`${i.depth}:${i.id}`}
            className={cn(i.depth === 3 ? 'text-muted-foreground pl-4' : '')}
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

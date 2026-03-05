import Image from 'next/image';
import Link from 'next/link';

import { cn } from '@/lib/utils';

export function Logo({ className }: { className?: string }) {
  return (
    <Link href="/" className={cn('inline-flex items-center gap-2', className)}>
      <Image src="/logo.svg" alt="WR" width={28} height={28} priority />
      <span className="hidden font-semibold tracking-tight sm:inline">
        Wellington Reis
      </span>
    </Link>
  );
}

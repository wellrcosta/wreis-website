'use client';

import { useEffect, useRef } from 'react';

import { cn } from '@/lib/utils';

export function Spotlight({ className }: { className?: string }) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    function onMove(e: PointerEvent) {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      el.style.setProperty('--x', `${x}px`);
      el.style.setProperty('--y', `${y}px`);
    }

    el.addEventListener('pointermove', onMove);
    return () => el.removeEventListener('pointermove', onMove);
  }, []);

  return (
    <div
      ref={ref}
      className={cn('pointer-events-none absolute inset-0 opacity-70', className)}
      style={{
        background:
          'radial-gradient(600px circle at var(--x) var(--y), rgba(99,102,241,0.18), transparent 55%)',
      }}
    />
  );
}

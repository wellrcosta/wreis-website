import * as React from 'react';

import { cn } from '@/lib/utils';

export function Card({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        // Base: no visible border. On hover: show a subtle gradient border (same palette used across the site).
        'bg-card/60 text-card-foreground hover:bg-card/70 relative rounded-xl border border-transparent backdrop-blur transition-all',
        // Gradient border via masked pseudo-element (only visible on hover)
        "before:pointer-events-none before:absolute before:inset-0 before:rounded-xl before:p-[1px] before:opacity-0 before:transition-opacity before:content-[''] hover:before:opacity-100",
        'before:bg-gradient-to-br before:from-indigo-500/55 before:via-sky-500/25 before:to-rose-500/50',
        // mask: keep only the 1px border (standard + webkit)
        'before:[mask-composite:exclude] before:[-webkit-mask-composite:xor] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)]',
        className,
      )}
      {...props}
    />
  );
}

export function CardHeader({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('flex flex-col space-y-1.5 p-6', className)} {...props} />;
}

export function CardTitle({
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3
      className={cn('leading-none font-semibold tracking-tight', className)}
      {...props}
    />
  );
}

export function CardContent({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('p-6 pt-0', className)} {...props} />;
}

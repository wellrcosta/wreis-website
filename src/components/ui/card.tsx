import * as React from 'react';

import { cn } from '@/lib/utils';

export function Card({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        // Always reserve 1px for the border, but keep it transparent until hover.
        // This avoids layout shift and guarantees the gradient is BORDER-ONLY.
        'rounded-xl p-px transition-colors',
        'bg-transparent hover:bg-gradient-to-br hover:from-indigo-500/55 hover:via-sky-500/25 hover:to-rose-500/50',
        className,
      )}
      {...props}
    >
      <div className="bg-card/60 text-card-foreground hover:bg-card/70 rounded-[11px] border border-transparent shadow-[0_0_0_1px_rgba(255,255,255,0.02)] backdrop-blur transition-colors">
        {children}
      </div>
    </div>
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

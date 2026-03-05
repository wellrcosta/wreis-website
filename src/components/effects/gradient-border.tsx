import { cn } from '@/lib/utils';

export function GradientBorder({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        'rounded-2xl bg-gradient-to-br from-indigo-500/40 via-transparent to-rose-500/35 p-[1px]',
        className,
      )}
    >
      <div className="bg-background/70 rounded-2xl backdrop-blur">{children}</div>
    </div>
  );
}

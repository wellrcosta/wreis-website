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
        'rounded-2xl bg-gradient-to-br from-indigo-500/30 via-transparent to-rose-500/30 p-[1px]',
        className,
      )}
    >
      <div className="bg-background rounded-2xl">{children}</div>
    </div>
  );
}

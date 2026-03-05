import { GradientBorder } from '@/components/effects/gradient-border';

export function PageHero({
  title,
  subtitle,
  meta,
}: {
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  meta?: React.ReactNode;
}) {
  return (
    <GradientBorder>
      <header className="space-y-4 rounded-2xl p-8 md:p-10">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight md:text-4xl">{title}</h1>
          {subtitle ? <p className="text-muted-foreground">{subtitle}</p> : null}
        </div>
        {meta ? <div className="flex flex-wrap items-center gap-3">{meta}</div> : null}
      </header>
    </GradientBorder>
  );
}

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
      <header className="rounded-2xl p-8 md:p-10">
        <div className="space-y-3">
          <h1 className="text-3xl font-bold tracking-tight md:text-5xl">{title}</h1>
          {subtitle ? (
            <p className="text-muted-foreground max-w-3xl text-base md:text-lg">
              {subtitle}
            </p>
          ) : null}
        </div>

        {meta ? (
          <div className="mt-5 flex flex-wrap items-center gap-2">{meta}</div>
        ) : null}
      </header>
    </GradientBorder>
  );
}

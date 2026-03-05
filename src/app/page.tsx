import Link from 'next/link';

import { ArrowRight, Mail } from 'lucide-react';

import { GradientBorder } from '@/components/effects/gradient-border';
import { Spotlight } from '@/components/effects/spotlight';
import { Bento } from '@/components/sections/bento';
import { Featured } from '@/components/sections/featured';
import { Button } from '@/components/ui/button';
import { site } from '@/config/site';

export default function HomePage() {
  return (
    <main className="mx-auto max-w-5xl space-y-12 px-6 py-16">
      <GradientBorder>
        <section className="relative overflow-hidden rounded-2xl p-10">
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-transparent to-rose-500/10" />
          <Spotlight />

          <div className="relative space-y-5">
            <p className="text-muted-foreground text-xs font-medium tracking-widest uppercase">
              Software Engineer
            </p>

            <p className="text-muted-foreground text-sm">{site.url}</p>

            <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
              Building integration-heavy systems.
            </h1>

            <p className="text-muted-foreground max-w-2xl text-lg">
              {site.name}. Backend & full-stack engineering — integrations, messaging
              (WhatsApp APIs), and production hardening.
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              <Button asChild>
                <Link href="/projects">
                  View projects <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="secondary">
                <Link href="/about">About</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/contact">
                  Contact <Mail className="h-4 w-4" />
                </Link>
              </Button>
            </div>

            <div className="text-muted-foreground text-sm">
              <a className="underline" href={site.links.github} target="_blank">
                GitHub
              </a>{' '}
              ·{' '}
              <a className="underline" href={site.links.linkedin} target="_blank">
                LinkedIn
              </a>
            </div>
          </div>
        </section>
      </GradientBorder>

      <Bento />

      <Featured />
    </main>
  );
}

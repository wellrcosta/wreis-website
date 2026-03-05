import { Logo } from '@/components/logo';
import { MobileNav } from '@/components/mobile-nav';
import { NavLink } from '@/components/nav-link';

const links = [
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Projects' },
  { href: '/blog', label: 'Blog' },
  { href: '/requests', label: 'Requests' },
  { href: '/contact', label: 'Contact' },
];

export function SiteNav() {
  return (
    <header className="bg-background/60 sticky top-0 z-50 border-b backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Logo />

        <nav className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <NavLink key={l.href} href={l.href} label={l.label} />
          ))}
        </nav>

        <MobileNav />
      </div>
    </header>
  );
}

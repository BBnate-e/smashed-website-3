'use client';

import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const NAV_LINKS = [
  { href: '#concept', label: 'Le Concept' },
  { href: '#menu', label: 'Menu' },
  { href: '#galerie', label: 'Galerie' },
  { href: '#adresse', label: 'Adresse' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-500',
        scrolled
          ? 'bg-ink/85 backdrop-blur-md border-b border-ink-line'
          : 'bg-gradient-to-b from-ink/50 to-transparent'
      )}
    >
      <nav className='mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-10'>
        <a href='#top' className='font-serif-display text-2xl tracking-wide text-cream'>
          Smashed<span className='text-gold italic'>.</span>
        </a>

        <div className='hidden items-center gap-10 md:flex'>
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className='text-sm tracking-wide text-cream-dim transition-colors hover:text-gold'
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className='hidden md:block'>
          <Button asChild size='sm'>
            <a href='#adresse'>Réserver une table</a>
          </Button>
        </div>

        <button
          type='button'
          aria-label='Ouvrir le menu'
          className='text-cream md:hidden'
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className='h-6 w-6' /> : <Menu className='h-6 w-6' />}
        </button>
      </nav>

      {open && (
        <div className='border-t border-ink-line bg-ink/95 backdrop-blur-md md:hidden'>
          <div className='flex flex-col gap-1 px-6 py-6'>
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className='py-3 text-base text-cream-dim transition-colors hover:text-gold'
              >
                {link.label}
              </a>
            ))}
            <Button asChild className='mt-4 w-full' onClick={() => setOpen(false)}>
              <a href='#adresse'>Réserver une table</a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}

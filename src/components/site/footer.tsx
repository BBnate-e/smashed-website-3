import { FacebookIcon, InstagramIcon } from '@/components/site/social-icons';

export function Footer() {
  return (
    <footer className='border-t border-ink-line bg-ink py-12'>
      <div className='mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 text-center md:flex-row md:justify-between md:text-left'>
        <div>
          <p className='font-serif-display text-xl text-cream'>
            Smashed<span className='text-gold italic'>.</span>
          </p>
          <p className='mt-1 text-xs text-cream-dim'>
            Smash burgers d&rsquo;exception — Fribourg, Suisse
          </p>
        </div>

        <div className='flex items-center gap-5 text-cream-dim'>
          <a
            href='https://instagram.com'
            target='_blank'
            rel='noreferrer'
            aria-label='Instagram'
            className='transition-colors hover:text-gold'
          >
            <InstagramIcon className='h-5 w-5' />
          </a>
          <a
            href='https://facebook.com'
            target='_blank'
            rel='noreferrer'
            aria-label='Facebook'
            className='transition-colors hover:text-gold'
          >
            <FacebookIcon className='h-5 w-5' />
          </a>
        </div>

        <p className='text-xs text-cream-dim'>
          © {new Date().getFullYear()} Smashed Fribourg. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
}

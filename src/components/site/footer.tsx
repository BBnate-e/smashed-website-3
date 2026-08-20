import Image from 'next/image';
import { InstagramIcon } from '@/components/site/social-icons';

export function Footer() {
  return (
    <footer className='border-t border-ink-line bg-ink py-12'>
      <div className='mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 text-center md:flex-row md:justify-between md:text-left'>
        <div>
          <Image
            src='/brand/smashed-wordmark-cream.png'
            alt='Smashed'
            width={718}
            height={130}
            className='h-6 w-auto'
          />
          <p className='mt-2 text-xs text-cream-dim'>
            Smash burgers — Rue du Criblet 5, Fribourg
          </p>
        </div>

        <div className='flex items-center gap-5 text-cream-dim'>
          <a
            href='https://www.instagram.com/smashed_fribourg/'
            target='_blank'
            rel='noreferrer'
            aria-label='Instagram'
            className='transition-colors hover:text-gold'
          >
            <InstagramIcon className='h-5 w-5' />
          </a>
          <a
            href='https://smashed.ch/'
            target='_blank'
            rel='noreferrer'
            className='text-xs transition-colors hover:text-gold'
          >
            smashed.ch
          </a>
        </div>

        <p className='text-xs text-cream-dim'>
          © {new Date().getFullYear()} Smashed. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
}

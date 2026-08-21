import Image from 'next/image';
import { SectionHeading } from '@/components/site/section-heading';
import { withBasePath } from '@/lib/utils';

const SMALL_TILES = [
  {
    label: 'La Plancha',
    photo: '/gallery/plancha-action.webp',
  },
  { label: 'La Croûte', className: 'tile-croute' },
  { label: 'Le Pain', className: 'tile-pain' },
  { label: 'Le Feu', className: 'tile-feu' },
  { label: 'Le Service', className: 'tile-salle' },
];

export function Gallery() {
  return (
    <section id='galerie' className='bg-ink py-24 md:py-32'>
      <div className='mx-auto max-w-6xl px-6 md:px-10'>
        <SectionHeading
          eyebrow='Galerie'
          title='Une ambiance, un geste, un produit'
        />

        <div className='mt-16 grid grid-cols-2 gap-4 sm:grid-cols-3'>
          <div className='group relative aspect-[4/5] overflow-hidden rounded-xl sm:col-span-2 sm:row-span-2'>
            <Image
              src={withBasePath('/hero/burger-spread.webp')}
              alt='Sélection de burgers Smashed avec frites'
              fill
              sizes='(max-width: 640px) 100vw, 66vw'
              className='object-cover transition-transform duration-700 group-hover:scale-105'
            />
            <div className='absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100' />
          </div>

          {SMALL_TILES.map((tile) =>
            tile.photo ? (
              <div
                key={tile.label}
                className='group relative aspect-[4/5] overflow-hidden rounded-xl'
              >
                <Image
                  src={withBasePath(tile.photo)}
                  alt={tile.label}
                  fill
                  sizes='(max-width: 640px) 50vw, 33vw'
                  className='object-cover transition-transform duration-700 group-hover:scale-110'
                />
                <div className='absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent' />
                <span className='absolute bottom-4 left-4 z-10 font-serif-display italic text-cream'>
                  {tile.label}
                </span>
              </div>
            ) : (
              <div
                key={tile.label}
                className={`gallery-texture relative flex aspect-[4/5] items-end overflow-hidden rounded-xl border border-ink-line p-4 ${tile.className}`}
              >
                <span className='relative z-10 font-serif-display italic text-cream'>
                  {tile.label}
                </span>
                <div className='absolute inset-0 bg-gradient-to-t from-ink/75 via-transparent to-transparent' />
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}

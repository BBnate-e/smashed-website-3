import { FallbackImage } from '@/components/ui/fallback-image';
import { SectionHeading } from '@/components/site/section-heading';

const GALLERY_IMAGES = [
  {
    src: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=1200&auto=format&fit=crop',
    alt: 'Smash burger servi sur planche de bois',
  },
  {
    src: 'https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?q=80&w=1200&auto=format&fit=crop',
    alt: 'Frites maison croustillantes',
  },
  {
    src: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop',
    alt: 'Intérieur chaleureux du restaurant Smashed Fribourg',
  },
  {
    src: 'https://images.unsplash.com/photo-1607013251379-e6eecfffe234?q=80&w=1200&auto=format&fit=crop',
    alt: 'Burger et accompagnements vus de dessus',
  },
  {
    src: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?q=80&w=1200&auto=format&fit=crop',
    alt: 'Milkshake artisanal',
  },
  {
    src: 'https://images.unsplash.com/photo-1543007630-9710e4a00a20?q=80&w=1200&auto=format&fit=crop',
    alt: 'Ambiance de salle en soirée',
  },
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
          {GALLERY_IMAGES.map((image) => (
            <div
              key={image.src}
              className='group relative aspect-[4/5] overflow-hidden rounded-xl'
            >
              <FallbackImage
                src={image.src}
                alt={image.alt}
                fill
                sizes='(max-width: 640px) 50vw, 33vw'
                className='object-cover transition-transform duration-700 group-hover:scale-110'
              />
              <div className='absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100' />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

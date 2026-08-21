import Image from 'next/image';
import { Flame } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SectionHeading } from '@/components/site/section-heading';
import { SIDES, SIGNATURE_BURGERS, VEGGIE_BURGERS } from '@/lib/menu-data';
import type { MenuItem } from '@/lib/menu-data';

function BurgerCard({ item }: { item: MenuItem }) {
  return (
    <article className='group flex gap-5 rounded-2xl border border-ink-line bg-ink p-5 transition-colors duration-300 hover:border-gold/40'>
      <div className='relative flex h-20 w-20 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-ink-line/60 via-ink-soft to-ink text-gold-dim sm:h-24 sm:w-24'>
        {item.image ? (
          <Image
            src={item.image}
            alt={item.name}
            fill
            sizes='96px'
            className='object-cover'
          />
        ) : (
          <Flame className='h-7 w-7' strokeWidth={1.25} />
        )}
      </div>
      <div className='flex flex-1 flex-col gap-2'>
        <div className='flex items-start justify-between gap-3'>
          <h3 className='font-serif-display text-lg text-cream'>{item.name}</h3>
          <span className='shrink-0 font-serif-display text-lg text-gold'>
            {item.price}
          </span>
        </div>
        {item.tag && (
          <span className='w-fit rounded-full border border-gold/30 px-2.5 py-0.5 text-[10px] uppercase tracking-wider text-gold'>
            {item.tag}
          </span>
        )}
        <p className='text-sm leading-relaxed text-cream-dim'>{item.description}</p>
      </div>
    </article>
  );
}

export function Menu() {
  return (
    <section id='menu' className='bg-ink-soft py-24 md:py-32'>
      <div className='mx-auto max-w-6xl px-6 md:px-10'>
        <SectionHeading
          eyebrow='Notre Menu'
          title='Les Smashed Burgers'
          description='Bœuf Black Angus suisse smashé sur plancha, pain potato bun ou kaiser, sauce signature maison.'
        />

        <div className='mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2'>
          {SIGNATURE_BURGERS.map((item) => (
            <BurgerCard key={item.name} item={item} />
          ))}
        </div>

        <div className='mt-20 border-t border-ink-line pt-14'>
          <h3 className='mb-8 text-center font-serif-display text-2xl text-cream'>
            Versions Végétariennes
          </h3>
          <div className='grid grid-cols-1 gap-8 sm:grid-cols-2'>
            {VEGGIE_BURGERS.map((item) => (
              <BurgerCard key={item.name} item={item} />
            ))}
          </div>
        </div>

        <div className='mt-20 border-t border-ink-line pt-14'>
          <h3 className='mb-8 text-center font-serif-display text-2xl text-cream'>
            Accompagnements
          </h3>
          <div className='mx-auto flex max-w-md flex-col gap-4'>
            {SIDES.map((item) => (
              <div
                key={item.name}
                className='flex items-baseline justify-between gap-4 border-b border-dashed border-ink-line pb-3'
              >
                <div>
                  <p className='text-sm text-cream'>{item.name}</p>
                  <p className='text-xs text-cream-dim'>{item.description}</p>
                </div>
                <span className='shrink-0 text-sm text-gold'>{item.price}</span>
              </div>
            ))}
          </div>
          <p className='mt-6 text-center text-sm text-cream-dim'>
            Menus burger + frites + boisson dès CHF 25.90 en livraison.
          </p>
        </div>

        <div className='mt-14 flex flex-wrap items-center justify-center gap-4'>
          <Button asChild size='lg'>
            <a href='https://www.ubereats.com/ch-fr/store/smashed-smashburger-fribourg/TCNuWA00WP-6QfLGozbopA' target='_blank' rel='noreferrer'>
              Commander sur Uber Eats
            </a>
          </Button>
          <Button asChild variant='outline' size='lg'>
            <a href='https://www.just-eat.ch/fr/menu/smashed' target='_blank' rel='noreferrer'>
              Commander sur Just Eat
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}

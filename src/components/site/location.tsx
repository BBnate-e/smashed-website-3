import { Clock, MapPin, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SectionHeading } from '@/components/site/section-heading';
import { InstagramIcon } from '@/components/site/social-icons';

export function Location() {
  return (
    <section id='adresse' className='bg-ink-soft py-24 md:py-32'>
      <div className='mx-auto max-w-6xl px-6 md:px-10'>
        <SectionHeading
          eyebrow='Nous trouver'
          title='En plein cœur de Fribourg'
          description='À deux pas du centre-ville, dans le quartier du Criblet.'
        />

        <div className='mt-16 grid grid-cols-1 gap-10 lg:grid-cols-5'>
          <div className='flex flex-col justify-between gap-10 rounded-2xl border border-ink-line bg-ink p-8 lg:col-span-2 md:p-10'>
            <div className='flex flex-col gap-8'>
              <div className='flex items-start gap-4'>
                <MapPin className='mt-0.5 h-5 w-5 shrink-0 text-gold' />
                <div>
                  <p className='text-cream'>Rue du Criblet 5</p>
                  <p className='text-cream-dim'>1700 Fribourg, Suisse</p>
                </div>
              </div>

              <div className='flex items-start gap-4'>
                <Clock className='mt-0.5 h-5 w-5 shrink-0 text-gold' />
                <div className='flex flex-col gap-1.5'>
                  <div className='flex gap-4 text-sm'>
                    <span className='w-40 text-cream-dim'>Tous les jours</span>
                    <span className='text-cream'>11h00 – 21h30</span>
                  </div>
                  <p className='text-xs text-cream-dim'>
                    Horaires à titre indicatif — merci de vérifier sur nos réseaux avant de vous déplacer.
                  </p>
                </div>
              </div>

              <div className='flex items-start gap-4'>
                <Phone className='mt-0.5 h-5 w-5 shrink-0 text-gold' />
                <a
                  href='tel:+41794315664'
                  className='text-cream transition-colors hover:text-gold'
                >
                  +41 79 431 56 64
                </a>
              </div>

              <div className='flex items-start gap-4'>
                <InstagramIcon className='mt-0.5 h-5 w-5 shrink-0 text-gold' />
                <a
                  href='https://www.instagram.com/smashed_fribourg/'
                  target='_blank'
                  rel='noreferrer'
                  className='text-cream transition-colors hover:text-gold'
                >
                  @smashed_fribourg
                </a>
              </div>
            </div>

            <div className='flex flex-col gap-3'>
              <Button asChild size='lg' className='w-full'>
                <a
                  href='https://www.ubereats.com/ch-fr/store/smashed-smashburger-fribourg/TCNuWA00WP-6QfLGozbopA'
                  target='_blank'
                  rel='noreferrer'
                >
                  Commander en livraison
                </a>
              </Button>
              <Button asChild variant='outline' size='lg' className='w-full'>
                <a href='tel:+41794315664'>Appeler le restaurant</a>
              </Button>
            </div>
          </div>

          <div className='relative min-h-[420px] overflow-hidden rounded-2xl border border-ink-line lg:col-span-3'>
            <iframe
              title='Localisation de Smashed Fribourg'
              src='https://www.google.com/maps?q=Rue+du+Criblet+5,+1700+Fribourg,+Suisse&output=embed'
              className='absolute inset-0 h-full w-full grayscale invert-[0.92] contrast-[1.05]'
              loading='lazy'
              referrerPolicy='no-referrer-when-downgrade'
            />
            <div className='pointer-events-none absolute inset-0 ring-1 ring-inset ring-ink-line' />
          </div>
        </div>
      </div>
    </section>
  );
}

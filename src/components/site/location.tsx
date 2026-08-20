import { Clock, Mail, MapPin, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SectionHeading } from '@/components/site/section-heading';
import { InstagramIcon } from '@/components/site/social-icons';

const HOURS = [
  { day: 'Lundi — Mercredi', time: '11h30 – 21h30' },
  { day: 'Jeudi — Samedi', time: '11h30 – 22h30' },
  { day: 'Dimanche', time: '12h00 – 21h00' },
];

export function Location() {
  return (
    <section id='adresse' className='bg-ink-soft py-24 md:py-32'>
      <div className='mx-auto max-w-6xl px-6 md:px-10'>
        <SectionHeading
          eyebrow='Nous trouver'
          title='En plein cœur de Fribourg'
          description='À deux pas de la cathédrale Saint-Nicolas, dans la basse-ville.'
        />

        <div className='mt-16 grid grid-cols-1 gap-10 lg:grid-cols-5'>
          <div className='flex flex-col justify-between gap-10 rounded-2xl border border-ink-line bg-ink p-8 lg:col-span-2 md:p-10'>
            <div className='flex flex-col gap-8'>
              <div className='flex items-start gap-4'>
                <MapPin className='mt-0.5 h-5 w-5 shrink-0 text-gold' />
                <div>
                  <p className='text-cream'>Rue de Lausanne 12</p>
                  <p className='text-cream-dim'>1700 Fribourg, Suisse</p>
                </div>
              </div>

              <div className='flex items-start gap-4'>
                <Clock className='mt-0.5 h-5 w-5 shrink-0 text-gold' />
                <div className='flex flex-col gap-1.5'>
                  {HOURS.map((h) => (
                    <div key={h.day} className='flex gap-4 text-sm'>
                      <span className='w-40 text-cream-dim'>{h.day}</span>
                      <span className='text-cream'>{h.time}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className='flex items-start gap-4'>
                <Phone className='mt-0.5 h-5 w-5 shrink-0 text-gold' />
                <a
                  href='tel:+41263210000'
                  className='text-cream transition-colors hover:text-gold'
                >
                  +41 26 321 00 00
                </a>
              </div>

              <div className='flex items-start gap-4'>
                <Mail className='mt-0.5 h-5 w-5 shrink-0 text-gold' />
                <a
                  href='mailto:bonjour@smashedfribourg.ch'
                  className='text-cream transition-colors hover:text-gold'
                >
                  bonjour@smashedfribourg.ch
                </a>
              </div>

              <div className='flex items-start gap-4'>
                <InstagramIcon className='mt-0.5 h-5 w-5 shrink-0 text-gold' />
                <a
                  href='https://instagram.com'
                  target='_blank'
                  rel='noreferrer'
                  className='text-cream transition-colors hover:text-gold'
                >
                  @smashed.fribourg
                </a>
              </div>
            </div>

            <Button asChild size='lg' className='w-full'>
              <a href='tel:+41263210000'>Réserver par téléphone</a>
            </Button>
          </div>

          <div className='relative min-h-[420px] overflow-hidden rounded-2xl border border-ink-line lg:col-span-3'>
            <iframe
              title='Localisation de Smashed Fribourg'
              src='https://www.google.com/maps?q=Rue+de+Lausanne+12,+1700+Fribourg,+Suisse&output=embed'
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

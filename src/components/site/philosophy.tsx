import Image from 'next/image';
import { SectionHeading } from '@/components/site/section-heading';

const STEPS = [
  {
    title: 'Bœuf Black Angus suisse',
    description:
      'Un steak Black Angus 100% suisse, façonné en boule, pour une viande généreuse en goût et en jutosité.',
  },
  {
    title: 'Smashé sur plancha',
    description:
      'La boule de viande est écrasée sur la plancha brûlante pour maximiser la réaction de Maillard — cette croûte dorée et croustillante, signature de la maison.',
  },
  {
    title: 'Potato bun ou kaiser',
    description:
      'Montés sur un pain moelleux potato bun, garnis de cheddar fondu, oignons croustillants assaisonnés et sauce signature Smashed.',
  },
];

export function Philosophy() {
  return (
    <section id='concept' className='relative overflow-hidden bg-ink py-24 md:py-32'>
      <div
        className='pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-ink-line to-transparent'
        aria-hidden
      />
      <div className='mx-auto max-w-6xl px-6 md:px-10'>
        <SectionHeading
          eyebrow='Le Concept'
          title='La rigueur du geste, la simplicité du produit'
          description="Aucune approximation. C'est cette discipline qui transforme un simple burger en expérience."
        />

        <div className='mt-16 grid grid-cols-1 gap-10 lg:grid-cols-5 lg:items-center'>
          <div className='relative mx-auto aspect-[579/831] w-full max-w-sm overflow-hidden rounded-2xl border border-ink-line lg:col-span-2'>
            <Image
              src='/concept/composition.webp'
              alt='Composition du Smashed Burger : potato bun, bœuf Black Angus suisse, cheddar, sauce signature, oignons croustillants assaisonnés'
              fill
              sizes='(max-width: 1024px) 90vw, 36vw'
              className='object-cover'
            />
          </div>

          <div className='flex flex-col gap-px overflow-hidden rounded-2xl border border-ink-line bg-ink-line lg:col-span-3'>
            {STEPS.map((step) => (
              <div
                key={step.title}
                className='flex flex-col gap-1.5 bg-ink-soft p-7 transition-colors duration-300 hover:bg-ink'
              >
                <h3 className='font-serif-display text-lg text-cream'>
                  {step.title}
                </h3>
                <p className='text-sm leading-relaxed text-cream-dim'>
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

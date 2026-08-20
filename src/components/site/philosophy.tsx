import { Flame, Beef, Wheat } from 'lucide-react';
import { SectionHeading } from '@/components/site/section-heading';

const STEPS = [
  {
    icon: Beef,
    title: 'Bœuf suisse sélectionné',
    description:
      "Épaule et poitrine hachées le matin même par notre boucher de Fribourg. Aucun additif, juste du bœuf et du sel.",
  },
  {
    icon: Flame,
    title: 'Smashé à 250°C',
    description:
      'La boule de viande est écrasée sur la plancha brûlante pour maximiser la réaction de Maillard — cette croûte dorée et croustillante, signature de la maison.',
  },
  {
    icon: Wheat,
    title: 'Pain brioché local',
    description:
      "Nos buns sont livrés chaque matin par une boulangerie du canton, légèrement toastés au beurre avant chaque montage.",
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
          description="Trois étapes, aucune approximation. C'est cette discipline qui transforme un simple burger en expérience."
        />

        <div className='mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-ink-line bg-ink-line md:grid-cols-3'>
          {STEPS.map((step, index) => (
            <div
              key={step.title}
              className='group relative flex flex-col gap-5 bg-ink-soft p-8 transition-colors duration-300 hover:bg-ink md:p-10'
            >
              <span className='font-serif-display text-sm text-gold-dim'>
                {String(index + 1).padStart(2, '0')}
              </span>
              <span className='flex h-12 w-12 items-center justify-center rounded-full border border-gold/30 bg-gold/5 text-gold transition-colors duration-300 group-hover:border-gold group-hover:bg-gold/10'>
                <step.icon className='h-5 w-5' strokeWidth={1.5} />
              </span>
              <h3 className='font-serif-display text-xl text-cream'>
                {step.title}
              </h3>
              <p className='text-sm leading-relaxed text-cream-dim'>
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

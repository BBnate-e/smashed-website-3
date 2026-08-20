import { Beef, Flame, Wheat } from 'lucide-react';

const STATS = [
  { value: '100%', label: 'Bœuf suisse, race à viande' },
  { value: '2019', label: "Depuis l'ouverture à Fribourg" },
  { value: '48h', label: 'Pains brioche maturés en boulangerie locale' },
];

export function HeroAbout() {
  return (
    <div className='mx-auto flex max-w-4xl flex-col items-center gap-10 text-center'>
      <p className='max-w-2xl text-lg leading-relaxed text-cream-dim md:text-xl'>
        Chez <span className='text-cream'>Smashed Fribourg</span>, chaque burger
        naît d&rsquo;un geste simple et précis&nbsp;: une boule de bœuf suisse
        écrasée sur plancha brûlante jusqu&rsquo;à obtenir cette croûte
        caramélisée qui fait toute la différence. Pas de raccourci, pas de
        surgelé&nbsp;— seulement des produits locaux, assemblés à la commande.
      </p>

      <div className='grid w-full grid-cols-1 gap-6 border-t border-ink-line pt-10 sm:grid-cols-3'>
        {STATS.map((stat) => (
          <div key={stat.label} className='flex flex-col items-center gap-2'>
            <span className='font-serif-display text-3xl text-gold md:text-4xl'>
              {stat.value}
            </span>
            <span className='text-xs uppercase tracking-wider text-cream-dim'>
              {stat.label}
            </span>
          </div>
        ))}
      </div>

      <div className='flex flex-wrap items-center justify-center gap-8 pt-2 text-cream-dim'>
        <div className='flex items-center gap-2 text-sm'>
          <Flame className='h-4 w-4 text-ember-light' />
          Smashé sur commande
        </div>
        <div className='flex items-center gap-2 text-sm'>
          <Beef className='h-4 w-4 text-ember-light' />
          Bœuf 100% suisse
        </div>
        <div className='flex items-center gap-2 text-sm'>
          <Wheat className='h-4 w-4 text-ember-light' />
          Pains artisanaux
        </div>
      </div>
    </div>
  );
}

import { Beef, Flame, Sandwich } from 'lucide-react';

const TENETS = [
  { icon: Flame, label: 'Smashé sur commande' },
  { icon: Beef, label: 'Bœuf Black Angus' },
  { icon: Sandwich, label: 'Sauce signature maison' },
];

export function HeroAbout() {
  return (
    <div className='mx-auto flex max-w-4xl flex-col items-center gap-10 text-center'>
      <p className='max-w-2xl text-lg leading-relaxed text-cream-dim md:text-xl'>
        Chez <span className='text-cream'>Smashed</span>, chaque burger naît d&rsquo;un
        geste simple et précis&nbsp;: un steak Black Angus écrasé sur plancha
        brûlante jusqu&rsquo;à obtenir cette croûte caramélisée qui fait toute
        la différence. Cheddar fondu, oignons frits croustillants et sauce
        signature maison, sur un pain potato bun ou kaiser, assemblés à la
        commande.
      </p>

      <div className='flex flex-wrap items-center justify-center gap-8 border-t border-ink-line pt-8 text-cream-dim'>
        {TENETS.map((tenet) => (
          <div key={tenet.label} className='flex items-center gap-2 text-sm'>
            <tenet.icon className='h-4 w-4 text-ember-light' strokeWidth={1.5} />
            {tenet.label}
          </div>
        ))}
      </div>
    </div>
  );
}

import { FallbackImage } from '@/components/ui/fallback-image';
import { SectionHeading } from '@/components/site/section-heading';
import { SIDES_AND_DRINKS, SIGNATURE_BURGERS } from '@/lib/menu-data';

export function Menu() {
  return (
    <section id='menu' className='bg-ink-soft py-24 md:py-32'>
      <div className='mx-auto max-w-6xl px-6 md:px-10'>
        <SectionHeading
          eyebrow='Notre Menu'
          title='Les Signatures Smashed'
          description='Quatre burgers, une exigence commune : le produit avant tout.'
        />

        <div className='mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2'>
          {SIGNATURE_BURGERS.map((item) => (
            <article
              key={item.name}
              className='group flex gap-5 rounded-2xl border border-ink-line bg-ink p-5 transition-colors duration-300 hover:border-gold/40'
            >
              <div className='relative h-28 w-28 shrink-0 overflow-hidden rounded-xl sm:h-32 sm:w-32'>
                {item.image && (
                  <FallbackImage
                    src={item.image}
                    alt={item.name}
                    fill
                    sizes='128px'
                    className='object-cover transition-transform duration-500 group-hover:scale-110'
                  />
                )}
              </div>
              <div className='flex flex-1 flex-col gap-2'>
                <div className='flex items-start justify-between gap-3'>
                  <h3 className='font-serif-display text-lg text-cream'>
                    {item.name}
                  </h3>
                  <span className='shrink-0 font-serif-display text-lg text-gold'>
                    {item.price}
                  </span>
                </div>
                {item.tag && (
                  <span className='w-fit rounded-full border border-gold/30 px-2.5 py-0.5 text-[10px] uppercase tracking-wider text-gold'>
                    {item.tag}
                  </span>
                )}
                <p className='text-sm leading-relaxed text-cream-dim'>
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className='mt-20 border-t border-ink-line pt-14'>
          <h3 className='mb-8 text-center font-serif-display text-2xl text-cream'>
            Accompagnements &amp; Boissons
          </h3>
          <div className='mx-auto grid max-w-3xl grid-cols-1 gap-x-10 gap-y-5 sm:grid-cols-2'>
            {SIDES_AND_DRINKS.map((item) => (
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
        </div>
      </div>
    </section>
  );
}

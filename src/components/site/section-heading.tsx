import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        'flex flex-col gap-4',
        align === 'center' ? 'items-center text-center' : 'items-start text-left',
        className
      )}
    >
      <span className='flex items-center gap-3 text-xs font-medium uppercase tracking-[0.35em] text-gold'>
        <span className='h-px w-8 bg-gold/60' />
        {eyebrow}
        <span className='h-px w-8 bg-gold/60' />
      </span>
      <h2 className='font-serif-display text-4xl text-cream text-balance md:text-5xl'>
        {title}
      </h2>
      {description && (
        <p className='max-w-xl text-base text-cream-dim md:text-lg'>
          {description}
        </p>
      )}
    </div>
  );
}

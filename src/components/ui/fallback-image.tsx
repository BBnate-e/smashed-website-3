'use client';

import { useState } from 'react';
import Image, { type ImageProps } from 'next/image';
import { Flame } from 'lucide-react';
import { cn } from '@/lib/utils';

type FallbackImageProps = ImageProps;

export function FallbackImage({ className, alt, ...props }: FallbackImageProps) {
  const [errored, setErrored] = useState(false);

  if (errored) {
    return (
      <div
        className={cn(
          'flex items-center justify-center bg-gradient-to-br from-ink-soft via-ink to-ink-line',
          className
        )}
      >
        <Flame className="h-8 w-8 text-gold-dim" strokeWidth={1.25} />
      </div>
    );
  }

  return (
    <Image
      className={className}
      alt={alt}
      onError={() => setErrored(true)}
      {...props}
    />
  );
}

import type { SVGProps } from 'react';

export function InstagramIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth={1.5}
      {...props}
    >
      <rect x='3' y='3' width='18' height='18' rx='5' />
      <circle cx='12' cy='12' r='4.2' />
      <circle cx='17.4' cy='6.6' r='1' fill='currentColor' stroke='none' />
    </svg>
  );
}

export function FacebookIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth={1.5}
      {...props}
    >
      <path d='M15 8.5h-2a2 2 0 0 0-2 2V13H9v3h2v6h3v-6h2.2l.8-3H14v-1.8c0-.5.3-.7.7-.7H16V8.6c-.1 0-.9-.1-1-.1Z' />
    </svg>
  );
}

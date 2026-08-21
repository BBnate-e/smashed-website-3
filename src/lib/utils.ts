import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// For static export builds (GitHub Pages) served from a repo subpath.
// next/image doesn't reliably prefix basePath for local srcs in this
// Next.js version, so local asset paths go through this explicitly.
// A no-op (NEXT_PUBLIC_BASE_PATH unset) on normal dev/Vercel builds.
export function withBasePath(src: string): string {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  return src.startsWith('/') ? `${basePath}${src}` : src;
}

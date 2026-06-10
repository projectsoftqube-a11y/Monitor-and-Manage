import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'M&M Guard App',
    short_name: 'M&M Security',
    description: 'Real-time guard patrolling and workforce management system.',
    start_url: '/',
    display: 'standalone',
    background_color: '#090d16',
    theme_color: '#2563eb',
    icons: [
      {
        src: '/icon.svg',
        sizes: 'any',
        type: 'image/svg+xml',
      },
    ],
  };
}

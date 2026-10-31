import type { MetadataRoute } from 'next';
import { portfolioConfig } from '@/data/portfolioConfig';

export default function manifest(): MetadataRoute.Manifest {
  return { name: `${portfolioConfig.fullName} - Portfolio`, short_name: portfolioConfig.fullName, description: portfolioConfig.summary, start_url: '/', display: 'standalone', background_color: '#07110F', theme_color: '#07110F', icons: [{ src: '/icon.svg', sizes: 'any', type: 'image/svg+xml', purpose: 'any' }] };
}
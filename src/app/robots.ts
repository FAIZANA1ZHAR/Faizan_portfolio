import type { MetadataRoute } from 'next';
import { portfolioConfig } from '@/data/portfolioConfig';

export default function robots(): MetadataRoute.Robots {
  return { rules: { userAgent: '*', allow: '/', disallow: ['/api/'] }, sitemap: portfolioConfig.siteUrl ? `${portfolioConfig.siteUrl}/sitemap.xml` : undefined };
}
import type { Metadata, Viewport } from 'next';
import { portfolioConfig } from '@/data/portfolioConfig';
import { careerTimeline } from '@/data/experience';
import { education } from '@/data/education';
import { technologies } from '@/data/technologies';
import { Analytics } from '@/components/analytics';
import './portfolio.css';

export const metadata: Metadata = {
  metadataBase: portfolioConfig.siteUrl ? new URL(portfolioConfig.siteUrl) : undefined,
  title: {
    default: `${portfolioConfig.fullName} | Azure, AI & Power Platform Consultant`,
    template: `%s | ${portfolioConfig.fullName}`
  },
  description: portfolioConfig.summary,
  alternates: { canonical: portfolioConfig.siteUrl },
  icons: { icon: '/icon.svg' },
  manifest: '/manifest.webmanifest',
  keywords: [
    'Full Stack Developer',
    'Azure Developer',
    'AI Engineer',
    'React Developer',
    'Next.js',
    'TypeScript',
    'Python',
    'Machine Learning',
    'Power Platform',
    'Microsoft Certified',
    'Software Engineer',
    'Technical Consultant'
  ],
  authors: [{ name: portfolioConfig.fullName, url: portfolioConfig.siteUrl }],
  creator: portfolioConfig.fullName,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: portfolioConfig.siteUrl,
    title: `${portfolioConfig.fullName} | Azure, AI & Power Platform Consultant`,
    description: portfolioConfig.summary,
    siteName: `${portfolioConfig.fullName} Portfolio`,
    images: [
      {
        url: portfolioConfig.ogImage,
        width: 1200,
        height: 630,
        alt: `${portfolioConfig.fullName} - ${portfolioConfig.role}`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${portfolioConfig.fullName} | Azure, AI & Power Platform Consultant`,
    description: portfolioConfig.summary,
    images: [portfolioConfig.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: portfolioConfig.fullName,
  url: portfolioConfig.siteUrl,
  jobTitle: portfolioConfig.role,
  worksFor: {
    '@type': 'Organization',
    name: careerTimeline.find((experience) => experience.current)?.company
  },
  alumniOf: {
    '@type': 'Organization',
    name: education.university
  },
  knowsAbout: technologies,
  sameAs: [
    portfolioConfig.socials.github,
    portfolioConfig.socials.linkedin
  ].filter((url): url is string => !!url),
  email: portfolioConfig.email
};

export const viewport: Viewport = { themeColor: '#07110F', width: 'device-width', initialScale: 1 };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-scroll-behavior="smooth" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body 
        className="font-sans antialiased"
        suppressHydrationWarning={true}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
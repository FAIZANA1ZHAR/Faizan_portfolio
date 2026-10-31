import type { Metadata } from 'next';
import { personalInfo } from '@/data/personal-info';
import { ThemeProvider } from '@/components/providers/theme-provider';
import { Analytics } from '@/components/analytics';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://faizanazhar.dev'),
  title: {
    default: 'Faizan Azhar - Azure, AI & Power Platform Consultant',
    template: '%s | Faizan Azhar'
  },
  description: personalInfo.summary,
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
  authors: [{ name: 'Faizan Azhar', url: 'https://faizanazhar.dev' }],
  creator: 'Faizan Azhar',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://faizanazhar.dev',
    title: 'Faizan Azhar - Azure, AI & Power Platform Consultant',
    description: personalInfo.summary,
    siteName: 'Faizan Azhar Portfolio',
    images: [
      {
        url: '/faizanpic.jpg',
        alt: 'Faizan Azhar - Senior Technical & Functional Consultant',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Faizan Azhar - Azure, AI & Power Platform Consultant',
    description: personalInfo.summary,
    images: ['/faizanpic.jpg'],
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
  name: 'Faizan Azhar',
  url: 'https://faizanazhar.dev',
  image: 'https://faizanazhar.dev/faizanpic.jpg',
  jobTitle: personalInfo.title,
  worksFor: {
    '@type': 'Organization',
    name: 'Tekenable Ltd'
  },
  alumniOf: {
    '@type': 'Organization',
    name: 'Air University Islamabad'
  },
  knowsAbout: [
    'Full Stack Development',
    'Azure Cloud Services',
    'Artificial Intelligence',
    'Machine Learning',
    'React',
    'Next.js',
    'TypeScript',
    'Python',
    'Power Platform',
    '.NET Core',
    'Node.js'
  ],
  sameAs: [
    personalInfo.socialLinks.github,
    personalInfo.socialLinks.linkedin
  ],
  telephone: '+923435391151',
  email: personalInfo.email
};

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
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
          storageKey="portfolio-theme"
        >
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import { ThemeProvider } from '@/components/providers/theme-provider';
import { Analytics } from '@/components/analytics';
import './globals.css';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://faizanazhar.dev'),
  title: {
    default: 'Faizan Azhar - Senior Full Stack Developer & AI Engineer',
    template: '%s | Faizan Azhar'
  },
  description: 'Senior Full Stack Developer specializing in Azure, AI solutions, and modern web technologies. Expert in React, Next.js, .NET, Python, and Power Platform with Microsoft certifications.',
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
    title: 'Faizan Azhar - Senior Full Stack Developer & AI Engineer',
    description: 'Senior Full Stack Developer specializing in Azure, AI solutions, and modern web technologies.',
    siteName: 'Faizan Azhar Portfolio',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Faizan Azhar - Senior Full Stack Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Faizan Azhar - Senior Full Stack Developer & AI Engineer',
    description: 'Senior Full Stack Developer specializing in Azure, AI solutions, and modern web technologies.',
    images: ['/og-image.jpg'],
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
  verification: {
    google: 'your-google-verification-code',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Faizan Azhar',
  url: 'https://faizanazhar.dev',
  image: 'https://faizanazhar.dev/faizanpic.jpg',
  jobTitle: 'Senior Full Stack Developer & Technical Consultant',
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
    'https://github.com/faizanazhar',
    'https://linkedin.com/in/faizanazhar'
  ],
  telephone: '+923435391151',
  email: 'faziazhar1@gmail.com'
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const theme = localStorage.getItem('portfolio-theme') || 'dark';
                document.documentElement.classList.toggle('dark', theme === 'dark');
              } catch (e) {
                document.documentElement.classList.add('dark');
              }
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body 
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}
        suppressHydrationWarning={true}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
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
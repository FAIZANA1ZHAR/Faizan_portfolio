import { notFound } from 'next/navigation';
import Link from 'next/link';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { blogPosts } from '@/data/blog';
import { Metadata } from 'next';
import { BackButton } from '@/components/ui/BackButton';

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  try {
    const resolvedParams = await params;
    const { slug } = resolvedParams;
    const post = blogPosts.find(post => post.slug === slug);
    
    if (!post) {
      return {
        title: 'Post Not Found | Faizan Azhar'
      };
    }

    return {
      title: `${post.title} | Faizan Azhar`,
      description: post.excerpt,
      openGraph: {
        title: post.title,
        description: post.excerpt,
        type: 'article',
      },
    };
  } catch (error) {
    console.error('Error generating metadata:', error);
    return {
      title: 'Blog Post | Faizan Azhar'
    };
  }
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const resolvedParams = await params;
  const { slug } = resolvedParams;
  const post = blogPosts.find(post => post.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-24 pb-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-4">
            <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded-full text-xs font-medium">
              {post.category}
            </span>
            <span className="mx-2">•</span>
            <span>{post.date}</span>
            <span className="mx-2">•</span>
            <span>{post.readTime}</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {post.title}
          </h1>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
            {post.excerpt}
          </p>
        </div>

        {/* Content */}
        <article className="prose prose-lg prose-gray dark:prose-invert max-w-none">
          <div className="whitespace-pre-line space-y-4">
            {post.content.split('\n\n').map((paragraph, index) => {
              if (paragraph.startsWith('#')) {
                const level = paragraph.match(/^#+/)?.[0]?.length || 1;
                const text = paragraph.replace(/^#+\s*/, '');
                const Tag = `h${Math.min(level, 6)}` as keyof JSX.IntrinsicElements;
                return (
                  <Tag key={index} className="font-bold text-gray-900 dark:text-white mt-8 mb-4">
                    {text}
                  </Tag>
                );
              }
              
              if (paragraph.startsWith('```')) {
                return (
                  <pre key={index} className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto">
                    <code className="text-sm">{paragraph.replace(/```\w*\n?|\n?```/g, '')}</code>
                  </pre>
                );
              }
              
              if (paragraph.startsWith('- ') || paragraph.startsWith('* ')) {
                const items = paragraph.split('\n').filter(line => line.startsWith('- ') || line.startsWith('* '));
                return (
                  <ul key={index} className="list-disc list-inside space-y-2">
                    {items.map((item, itemIndex) => (
                      <li key={itemIndex}>{item.replace(/^[-*]\s*/, '')}</li>
                    ))}
                  </ul>
                );
              }
              
              return (
                <p key={index} className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  {paragraph}
                </p>
              );
            })}
          </div>
        </article>

        {/* Navigation */}
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
          <BackButton />
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
}

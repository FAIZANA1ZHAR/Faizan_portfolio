'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaCalendarAlt, FaArrowRight, FaBookOpen, FaClock, FaBrain, FaCode, FaCloud, FaRocket } from 'react-icons/fa';
import Link from 'next/link';
import { blogPosts } from '@/data/blog';

// Map categories to icons and colors
const categoryConfig = {
  'Azure': {
    icon: FaCloud,
    color: 'from-blue-500 to-cyan-500',
    bgColor: 'bg-blue-50 dark:bg-blue-900/20'
  },
  'Power Platform': {
    icon: FaBrain,
    color: 'from-purple-500 to-pink-500',
    bgColor: 'bg-purple-50 dark:bg-purple-900/20'
  },
  'Development': {
    icon: FaCode,
    color: 'from-green-500 to-emerald-500',
    bgColor: 'bg-green-50 dark:bg-green-900/20'
  },
  'AI & Machine Learning': {
    icon: FaBrain,
    color: 'from-purple-500 to-pink-500',
    bgColor: 'bg-purple-50 dark:bg-purple-900/20'
  },
  'Web Development': {
    icon: FaCode,
    color: 'from-blue-500 to-cyan-500',
    bgColor: 'bg-blue-50 dark:bg-blue-900/20'
  }
};

// Transform blog posts to include visual elements
const enhancedBlogPosts = blogPosts.slice(0, 3).map((post, index) => {
  const config = categoryConfig[post.category as keyof typeof categoryConfig] || categoryConfig['Development'];
  return {
    ...post,
    featured: index === 0,
    icon: config.icon,
    color: config.color,
    bgColor: config.bgColor
  };
});

export default function BlogPreview() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="blog" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-gray-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-lg text-blue-600 dark:text-blue-400 font-semibold mb-2"
          >
            Knowledge Sharing & Thought Leadership
          </motion.p>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent mb-4">
            Latest <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">Insights</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Sharing knowledge about modern web development, AI, and cloud technologies to help developers build better solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {enhancedBlogPosts.map((post, index) => (
            <motion.article
              key={index}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className={`bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 overflow-hidden group ${
                post.featured ? 'lg:col-span-2 lg:row-span-1' : ''
              }`}
            >
              {/* Header with gradient */}
              <div className={`${post.bgColor} p-6 border-b border-gray-100 dark:border-gray-700`}>
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-r ${post.color} rounded-xl flex items-center justify-center`}>
                    <post.icon className="text-white text-xl" />
                  </div>
                  <span className={`text-sm font-semibold text-white bg-gradient-to-r ${post.color} px-3 py-1 rounded-full`}>
                    {post.category}
                  </span>
                </div>
                
                <h3 className={`font-bold text-gray-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300 ${
                  post.featured ? 'text-2xl' : 'text-xl'
                }`}>
                  {post.title}
                </h3>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className={`text-gray-600 dark:text-gray-400 leading-relaxed mb-6 ${
                  post.featured ? 'text-base' : 'text-sm'
                }`}>
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
                    <div className="flex items-center space-x-1">
                      <FaCalendarAlt className="w-3 h-3" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <FaClock className="w-3 h-3" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  
                  <Link
                    href={`/blog/${post.slug}`}
                    className={`flex items-center space-x-2 text-sm bg-gradient-to-r ${post.color} text-white px-4 py-2 rounded-lg hover:shadow-lg transition-all duration-300 group-hover:scale-105`}
                  >
                    <span>Read More</span>
                    <FaArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-200" />
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Enhanced CTA Section */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>
            
            <div className="relative z-10">
              <FaRocket className="text-4xl text-blue-200 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">Stay Updated with Latest Tech Insights</h3>
              <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                Get exclusive articles about cutting-edge technologies, best practices, and industry insights delivered to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/blog"
                  className="inline-flex items-center space-x-2 bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg"
                >
                  <FaBookOpen className="w-5 h-5" />
                  <span>View All Articles</span>
                </Link>
                <Link
                  href="/newsletter"
                  className="inline-flex items-center space-x-2 bg-white/20 text-white border border-white/30 px-6 py-3 rounded-xl font-semibold hover:bg-white/30 transition-all duration-300 hover:scale-105"
                >
                  <span>Subscribe to Newsletter</span>
                  <FaArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
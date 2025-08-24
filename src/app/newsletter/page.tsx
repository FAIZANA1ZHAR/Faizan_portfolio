'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaArrowLeft, FaEnvelope, FaRocket, FaCheckCircle } from 'react-icons/fa';

export default function NewsletterPage() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate subscription process
    setTimeout(() => {
      setIsSubscribed(true);
      setIsLoading(false);
    }, 2000);
  };

  if (isSubscribed) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-900 dark:to-blue-900 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center p-8"
        >
          <FaCheckCircle className="text-6xl text-green-500 mx-auto mb-6" />
          <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
            Welcome to the Community!
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl">
            Thank you for subscribing! You&apos;ll receive the latest insights about Azure, AI, and modern web development directly in your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/blog"
              className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300"
            >
              Read Latest Articles
            </Link>
            <Link 
              href="/"
              className="inline-flex items-center border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors duration-300"
            >
              <FaArrowLeft className="mr-2" />
              Back to Portfolio
            </Link>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900 dark:to-purple-900">
      {/* Header */}
      <div className="container mx-auto px-4 pt-24 pb-8">
        <Link 
          href="/"
          className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
        >
          <FaArrowLeft className="mr-2" />
          Back to Portfolio
        </Link>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <FaRocket className="text-6xl text-blue-600 mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
              Stay Ahead of the Curve
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
              Get exclusive insights about Azure, AI, and cutting-edge web development technologies delivered directly to your inbox.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border border-gray-200 dark:border-gray-700"
          >
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
              What You&apos;ll Get
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="text-left">
                <h3 className="font-semibold text-gray-800 dark:text-white mb-2">
                  🎯 Technical Deep Dives
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  In-depth tutorials and best practices for Azure AI solutions
                </p>
              </div>
              <div className="text-left">
                <h3 className="font-semibold text-gray-800 dark:text-white mb-2">
                  🚀 Performance Tips
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Optimization strategies for Next.js and modern web apps
                </p>
              </div>
              <div className="text-left">
                <h3 className="font-semibold text-gray-800 dark:text-white mb-2">
                  💡 Industry Insights
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Latest trends in cloud computing and AI development
                </p>
              </div>
              <div className="text-left">
                <h3 className="font-semibold text-gray-800 dark:text-white mb-2">
                  🔧 Code Examples
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Real-world implementation examples and snippets
                </p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-800 dark:text-white"
                  required
                />
                <button
                  type="submit"
                  disabled={isLoading}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:transform-none"
                >
                  {isLoading ? (
                    <div className="flex items-center">
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Subscribing...
                    </div>
                  ) : (
                    <div className="flex items-center">
                      <FaEnvelope className="mr-2" />
                      Subscribe
                    </div>
                  )}
                </button>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                No spam, unsubscribe at any time. I respect your privacy.
              </p>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 text-center"
          >
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Trusted by developers from companies like
            </p>
            <div className="flex flex-wrap justify-center items-center gap-6 opacity-60">
              <span className="text-lg font-semibold">Microsoft</span>
              <span className="text-lg font-semibold">Azure</span>
              <span className="text-lg font-semibold">Enterprise Clients</span>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

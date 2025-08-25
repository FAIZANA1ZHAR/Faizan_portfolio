'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import SocialLinks from '../ui/SocialLinks';
import { personalInfo } from '../../data/personal-info';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const handleNavigation = (href: string) => {
    if (href.startsWith('#')) {
      // If we're not on the home page, navigate to home first then scroll
      if (pathname !== '/') {
        router.push(`/${href}`);
        return;
      }
      
      // If we're on the home page, scroll to the section
      const element = document.getElementById(href.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
      return;
    }

    // Handle regular navigation
    router.push(href);
  };

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#tech-stack' },
    { name: 'Projects', href: '#projects' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-md shadow-sm z-50 dark:bg-gray-900/95 border-b border-gray-200/20 dark:border-gray-700/20">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
        <div className="flex justify-between items-center">
          {/* Logo/Name */}
          <Link href="/" className="text-xl sm:text-2xl font-bold text-gray-800 hover:text-blue-600 transition-colors dark:text-white dark:hover:text-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-lg px-2 py-1">
            {personalInfo.name.split(' ')[0]}
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavigation(item.href)}
                className="text-gray-600 hover:text-blue-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 font-medium px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {item.name}
              </button>
            ))}
            <SocialLinks className="flex items-center gap-2 ml-4" size="sm" />
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Menu"
            aria-expanded={isMenuOpen}
          >
            <div className="w-6 h-6 flex flex-col justify-center relative">
              <span className={`block h-0.5 w-6 bg-gray-600 dark:bg-gray-300 transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-0' : 'translate-y-[-6px]'}`} />
              <span className={`block h-0.5 w-6 bg-gray-600 dark:bg-gray-300 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`} />
              <span className={`block h-0.5 w-6 bg-gray-600 dark:bg-gray-300 transition-all duration-300 ${isMenuOpen ? '-rotate-45 translate-y-0' : 'translate-y-[6px]'}`} />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden mt-4 pb-6 border-t border-gray-200 dark:border-gray-700 pt-4"
          >
            <div className="space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => {
                    handleNavigation(item.href);
                    setIsMenuOpen(false);
                  }}
                  className="block w-full text-left py-3 px-4 text-gray-600 hover:text-blue-600 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors dark:text-gray-300 dark:hover:text-blue-400 rounded-lg font-medium"
                >
                  {item.name}
                </button>
              ))}
            </div>
            <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-3 px-4">Connect with me</p>
              <div className="px-4">
                <SocialLinks className="flex items-center gap-4" size="md" showLabels={true} />
              </div>
              
              {/* Contact Info in Mobile Menu */}
              <div className="mt-4 px-4 space-y-2">
                <a 
                  href={`mailto:${personalInfo.email}`}
                  className="flex items-center text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  {personalInfo.email}
                </a>
                <p className="text-sm text-gray-500 dark:text-gray-500 flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  {personalInfo.location}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </nav>
    </header>
  );
};

export default Header;

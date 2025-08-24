'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaCode, FaRocket, FaLightbulb } from 'react-icons/fa';
import { personalInfo } from '../../data/personal-info';
import SocialLinks from '../ui/SocialLinks';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 mb-6 text-white/80"
            >
              <FaLightbulb className="mr-2 text-yellow-400" />
              <span className="text-sm font-medium">Available for new opportunities</span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-purple-400 bg-clip-text text-transparent">
              {personalInfo.name}
            </h1>
            
            <h2 className="text-2xl md:text-3xl font-semibold text-purple-200 mb-6">
              {personalInfo.title}
            </h2>
            
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              {personalInfo.summary}
            </p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-3 gap-6 mb-8 max-w-md mx-auto lg:mx-0"
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-white">7+</div>
                <div className="text-sm text-purple-200">Years</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">50+</div>
                <div className="text-sm text-purple-200">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">5</div>
                <div className="text-sm text-purple-200">Companies</div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8"
            >
              <a 
                href="#contact" 
                className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-xl overflow-hidden transition-transform duration-300 hover:scale-105 shadow-lg hover:shadow-purple-500/25"
              >
                <span className="relative z-10 flex items-center justify-center">
                  <FaRocket className="mr-2" />
                  Let&apos;s Work Together
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-pink-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </a>
              
              <a 
                href={personalInfo.resumeUrl} 
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 border-2 border-purple-400 text-purple-200 font-semibold rounded-xl hover:bg-purple-400 hover:text-white transition-all duration-300 flex items-center justify-center backdrop-blur-sm"
              >
                <FaCode className="mr-2" />
                View Resume
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <SocialLinks />
            </motion.div>
          </motion.div>

          {/* Mobile Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex lg:hidden justify-center mb-8"
          >
            <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl">
              <Image
                src="/faizanpic.jpg"
                alt={personalInfo.name}
                width={192}
                height={192}
                className="w-full h-full object-cover"
                priority
              />
            </div>
          </motion.div>

          {/* Desktop Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:flex justify-center items-center"
          >
            <div className="relative">
              {/* Profile Image Container */}
              <div className="relative z-10 w-80 h-80 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl">
                <Image
                  src="/faizanpic.jpg"
                  alt={personalInfo.name}
                  width={320}
                  height={320}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
              
              {/* Floating Icons */}
              <motion.div
                animate={{ y: [-20, 20, -20] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -top-10 -right-10 bg-white/10 backdrop-blur-sm p-4 rounded-xl"
              >
                <FaCode className="text-3xl text-purple-300" />
              </motion.div>
              
              <motion.div
                animate={{ y: [20, -20, 20] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -bottom-10 -left-10 bg-white/10 backdrop-blur-sm p-4 rounded-xl"
              >
                <FaRocket className="text-3xl text-pink-300" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <a href="#about" className="text-white/60 hover:text-white transition-colors">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
          >
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2"></div>
          </motion.div>
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;

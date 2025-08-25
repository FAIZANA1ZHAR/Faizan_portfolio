'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaCode, FaRocket, FaLightbulb, FaBrain, FaDatabase, FaCloud } from 'react-icons/fa';
import { SiReact, SiNodedotjs, SiTypescript, SiAmazonaws } from 'react-icons/si';
import { personalInfo } from '../../data/personal-info';
import SocialLinks from '../ui/SocialLinks';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 px-4 sm:px-6 lg:px-8">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 -left-4 w-48 h-48 sm:w-72 sm:h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-48 h-48 sm:w-72 sm:h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-48 h-48 sm:w-72 sm:h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto z-10 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-start">
          
          {/* Mobile Profile Image - Enhanced positioning */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: -30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="flex lg:hidden justify-center order-first mb-8 pt-4"
          >
            <div className="relative">
              {/* Decorative background rings with glowing effect */}
              <div className="absolute inset-0 rounded-full">
                {/* Outer glow ring */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 p-1 animate-pulse opacity-80">
                  <div className="rounded-full bg-slate-900 p-2">
                    {/* Inner glow ring */}
                    <div className="absolute inset-2 rounded-full bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 animate-spin-slow opacity-60"></div>
                    <div className="relative z-10 w-40 h-40 sm:w-48 sm:h-48 rounded-full overflow-hidden border-4 border-white/30 shadow-2xl bg-slate-900">
                      <Image
                        src="/faizanpic.jpg"
                        alt={personalInfo.name}
                        width={192}
                        height={192}
                        className="w-full h-full object-cover transition-all duration-700 hover:scale-110 hover:brightness-110"
                        priority
                      />
                      {/* Professional overlay gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                      
                      {/* Hover effect overlay */}
                      <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 via-transparent to-blue-500/20 opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
                      
                      {/* Online status indicator */}
                      <div className="absolute bottom-3 right-3 flex items-center">
                        <div className="w-5 h-5 bg-green-500 rounded-full border-3 border-white shadow-lg animate-pulse">
                          <div className="w-2 h-2 bg-green-400 rounded-full absolute top-0.5 left-0.5"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Mobile Badge Section - Improved spacing */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex lg:hidden flex-col items-center order-2 mb-8"
          >
            {/* Location badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mb-6"
            >
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2 shadow-lg">
                <div className="flex items-center text-white text-xs sm:text-sm font-medium">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse"></div>
                  <span>{personalInfo.location}</span>
                </div>
              </div>
            </motion.div>

            {/* Technology badges in a grid */}
            <div className="grid grid-cols-3 gap-3 max-w-xs">
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="bg-blue-500/20 backdrop-blur-sm border border-blue-400/30 rounded-lg px-2 py-1 shadow-lg text-center"
              >
                <SiReact className="text-blue-300 text-lg mx-auto mb-1" />
                <span className="text-blue-200 text-xs font-medium block">React</span>
              </motion.div>
              
              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                className="bg-purple-500/20 backdrop-blur-sm border border-purple-400/30 rounded-lg px-2 py-1 shadow-lg text-center"
              >
                <FaCode className="text-purple-300 text-lg mx-auto mb-1" />
                <span className="text-purple-200 text-xs font-medium block">Next.js</span>
              </motion.div>
              
              <motion.div
                animate={{ y: [-5, 15, -5] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
                className="bg-green-500/20 backdrop-blur-sm border border-green-400/30 rounded-lg px-2 py-1 shadow-lg text-center"
              >
                <SiNodedotjs className="text-green-300 text-lg mx-auto mb-1" />
                <span className="text-green-200 text-xs font-medium block">Node.js</span>
              </motion.div>
              
              <motion.div
                animate={{ y: [8, -12, 8] }}
                transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut" }}
                className="bg-yellow-500/20 backdrop-blur-sm border border-yellow-400/30 rounded-lg px-2 py-1 shadow-lg text-center"
              >
                <SiTypescript className="text-yellow-300 text-lg mx-auto mb-1" />
                <span className="text-yellow-200 text-xs font-medium block">TypeScript</span>
              </motion.div>
              
              <motion.div
                animate={{ y: [12, -8, 12] }}
                transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut" }}
                className="bg-cyan-500/20 backdrop-blur-sm border border-cyan-400/30 rounded-lg px-2 py-1 shadow-lg text-center"
              >
                <FaBrain className="text-cyan-300 text-lg mx-auto mb-1" />
                <span className="text-cyan-200 text-xs font-medium block">AI</span>
              </motion.div>
              
              <motion.div
                animate={{ y: [-8, 12, -8] }}
                transition={{ duration: 3.7, repeat: Infinity, ease: "easeInOut" }}
                className="bg-orange-500/20 backdrop-blur-sm border border-orange-400/30 rounded-lg px-2 py-1 shadow-lg text-center"
              >
                <SiAmazonaws className="text-orange-300 text-lg mx-auto mb-1" />
                <span className="text-orange-200 text-xs font-medium block">AWS</span>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left order-3 lg:order-1 lg:col-span-2"
          >
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-white via-purple-200 to-purple-400 bg-clip-text text-transparent leading-tight">
              {personalInfo.name}
            </h1>
            
            <h2 className="text-lg sm:text-2xl md:text-3xl font-semibold text-purple-200 mb-4 sm:mb-6">
              {personalInfo.title}
            </h2>
            
            <p className="text-sm sm:text-lg text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              {personalInfo.summary}
            </p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8 max-w-xs sm:max-w-md mx-auto lg:mx-0"
            >
              <div className="text-center">
                <div className="text-xl sm:text-3xl font-bold text-white">7+</div>
                <div className="text-xs sm:text-sm text-purple-200">Years</div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-3xl font-bold text-white">50+</div>
                <div className="text-xs sm:text-sm text-purple-200">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-3xl font-bold text-white">5</div>
                <div className="text-xs sm:text-sm text-purple-200">Companies</div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start mb-6 sm:mb-8"
            >
              <a 
                href="#contact" 
                className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-xl overflow-hidden transition-transform duration-300 hover:scale-105 shadow-lg hover:shadow-purple-500/25 text-sm sm:text-base"
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
                className="px-6 sm:px-8 py-3 sm:py-4 border-2 border-purple-400 text-purple-200 font-semibold rounded-xl hover:bg-purple-400 hover:text-white transition-all duration-300 flex items-center justify-center backdrop-blur-sm text-sm sm:text-base"
              >
                <FaCode className="mr-2" />
                View Resume
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex justify-center lg:justify-start"
            >
              <SocialLinks className="flex gap-3 sm:gap-4" size="md" />
            </motion.div>

            {/* Quick Contact Info for Mobile */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="mt-6 sm:mt-8 lg:hidden bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10"
            >
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm">
                <a 
                  href={`mailto:${personalInfo.email}`}
                  className="flex items-center text-gray-300 hover:text-white transition-colors"
                >
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                  {personalInfo.email}
                </a>
                <span className="hidden sm:block text-gray-500">•</span>
                <span className="flex items-center text-gray-300">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                  {personalInfo.location}
                </span>
              </div>
            </motion.div>
          </motion.div>

          {/* Desktop Profile Image with badges positioned bottom right */}
          <motion.div
            initial={{ opacity: 0, x: 50, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            className="hidden lg:flex order-1 lg:order-2 relative w-full h-full min-h-[600px]"
          >
            {/* Profile Image - Top Center */}
            <div className="absolute top-8 left-1/2 transform -translate-x-1/2">
              {/* Enhanced decorative background rings with multiple layers */}
              <div className="absolute inset-0 rounded-full">
                {/* Outer rotating ring */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 p-2 animate-pulse">
                  {/* Middle rotating ring */}
                  <div className="absolute inset-2 rounded-full bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 animate-spin-slow opacity-60"></div>
                  {/* Profile Image Container */}
                  <div className="relative z-10 w-56 h-56 xl:w-64 xl:h-64 rounded-full overflow-hidden border-6 border-white/30 shadow-2xl bg-slate-900">
                    <Image
                      src="/faizanpic.jpg"
                      alt={personalInfo.name}
                      width={256}
                      height={256}
                      className="w-full h-full object-cover transition-all duration-700 hover:scale-110 hover:brightness-110 hover:contrast-110"
                      priority
                    />
                    {/* Professional overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                    
                    {/* Dynamic hover effect overlay */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 via-transparent to-blue-500/20 opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
                    
                    {/* Enhanced online indicator */}
                    <div className="absolute bottom-4 right-4 flex items-center">
                      <div className="w-6 h-6 bg-green-500 rounded-full border-3 border-white shadow-lg animate-pulse">
                        <div className="w-2 h-2 bg-green-400 rounded-full absolute top-1 left-1"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* All badges positioned at bottom right */}
            <div className="absolute bottom-8 right-0 flex flex-col items-end space-y-4">
              {/* Location Badge */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
              >
                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2 shadow-lg">
                  <div className="flex items-center text-white text-xs font-medium">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse"></div>
                    <span>Dublin, Ireland</span>
                  </div>
                </div>
              </motion.div>

              {/* Stats Badges */}
              <div className="flex gap-3">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 1.2 }}
                  className="bg-violet-500/20 backdrop-blur-sm border border-violet-400/30 rounded-xl p-3 shadow-lg text-center"
                >
                  <div className="text-xl font-bold text-violet-300 mb-1">7+</div>
                  <div className="text-violet-200 text-xs font-medium">Years</div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 1.4 }}
                  className="bg-teal-500/20 backdrop-blur-sm border border-teal-400/30 rounded-xl p-3 shadow-lg text-center"
                >
                  <div className="text-xl font-bold text-teal-300 mb-1">50+</div>
                  <div className="text-teal-200 text-xs font-medium">Projects</div>
                </motion.div>
              </div>

              {/* Technology badges in a horizontal 3x2 grid */}
              <div className="grid grid-cols-3 gap-2 max-w-xs">
                {/* React badge */}
                <motion.div
                  animate={{ y: [-1.15, 1.15, -1.15] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="bg-blue-500/20 backdrop-blur-sm border border-blue-400/30 rounded-lg p-2 shadow-lg hover:shadow-blue-400/30 transition-shadow duration-300"
                >
                  <SiReact className="text-lg text-blue-300 mb-1 mx-auto block" />
                  <span className="text-blue-200 text-xs font-medium block text-center">React</span>
                </motion.div>
                
                {/* Next.js badge */}
                <motion.div
                  animate={{ y: [5.6, -5.6, 5.6] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                  className="bg-purple-500/20 backdrop-blur-sm border border-purple-400/30 rounded-lg p-2 shadow-lg hover:shadow-purple-400/30 transition-shadow duration-300"
                >
                  <FaCode className="text-lg text-purple-300 mb-1 mx-auto block" />
                  <span className="text-purple-200 text-xs font-medium block text-center">Next.js</span>
                </motion.div>
                
                {/* Node.js badge */}
                <motion.div
                  animate={{ y: [0.45, -0.45, 0.45] }}
                  transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
                  className="bg-green-500/20 backdrop-blur-sm border border-green-400/30 rounded-lg p-2 shadow-lg hover:shadow-green-400/30 transition-shadow duration-300"
                >
                  <SiNodedotjs className="text-lg text-green-300 mb-1 mx-auto block" />
                  <span className="text-green-200 text-xs font-medium block text-center">Node.js</span>
                </motion.div>
                
                {/* TypeScript badge */}
                <motion.div
                  animate={{ y: [3.56, -3.56, 3.56] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="bg-yellow-500/20 backdrop-blur-sm border border-yellow-400/30 rounded-lg p-2 shadow-lg hover:shadow-yellow-400/30 transition-shadow duration-300"
                >
                  <SiTypescript className="text-lg text-yellow-300 mb-1 mx-auto block" />
                  <span className="text-yellow-200 text-xs font-medium block text-center">TypeScript</span>
                </motion.div>
                
                {/* AI/ML badge */}
                <motion.div
                  animate={{ y: [13.3, -13.3, 13.3] }}
                  transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut" }}
                  className="bg-cyan-500/20 backdrop-blur-sm border border-cyan-400/30 rounded-lg p-2 shadow-lg hover:shadow-cyan-400/30 transition-shadow duration-300"
                >
                  <FaBrain className="text-lg text-cyan-300 mb-1 mx-auto block" />
                  <span className="text-cyan-200 text-xs font-medium block text-center">AI/ML</span>
                </motion.div>
                
                {/* AWS badge */}
                <motion.div
                  animate={{ y: [-8.78, 8.78, -8.78] }}
                  transition={{ duration: 3.7, repeat: Infinity, ease: "easeInOut" }}
                  className="bg-orange-500/20 backdrop-blur-sm border border-orange-400/30 rounded-lg p-2 shadow-lg hover:shadow-orange-400/30 transition-shadow duration-300"
                >
                  <SiAmazonaws className="text-lg text-orange-300 mb-1 mx-auto block" />
                  <span className="text-orange-200 text-xs font-medium block text-center">AWS</span>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Available for new opportunities badge - Bottom center */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.2 }}
        className="absolute bottom-16 sm:bottom-20 left-1/2 transform -translate-x-1/2 z-20"
      >
        <div className="inline-flex items-center bg-green-500/20 backdrop-blur-sm rounded-full px-4 py-2 sm:px-6 sm:py-3 text-white border border-green-400/30 shadow-lg">
          <FaLightbulb className="mr-2 text-green-400 text-sm sm:text-base animate-pulse" />
          <span className="text-xs sm:text-sm font-medium text-green-100">Available for new opportunities</span>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <a href="#about" className="text-white/60 hover:text-white transition-colors">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-white/30 rounded-full flex justify-center"
          >
            <div className="w-1 h-2 sm:h-3 bg-white/60 rounded-full mt-1 sm:mt-2"></div>
          </motion.div>
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;

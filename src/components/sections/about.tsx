'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaUsers, FaLightbulb, FaRocket, FaAward, FaCloud, FaBrain, FaCertificate } from 'react-icons/fa';
import { personalInfo } from '../../data/personal-info';

const About: React.FC = () => {
  const keyAchievements = [
    {
      icon: FaRocket,
      title: "EPassport ERA Leadership",
      description: "Led development for international clients with weekly demos",
      highlight: "Enterprise Success"
    },
    {
      icon: FaBrain,
      title: "AI Innovation",
      description: "Built AI-powered chat with docs POC that converted to successful client",
      highlight: "Client Conversion"
    },
    {
      icon: FaCloud,
      title: "Azure Architecture",
      description: "Deployed CI/CD pipelines for Azure Functions and PCF controls",
      highlight: "Cloud Expertise"
    },
    {
      icon: FaAward,
      title: "ML Excellence",
      description: "73% F1-score in machine learning models for DDI detection",
      highlight: "Research Impact"
    }
  ];

  const highlights = [
    {
      icon: FaCode,
      title: "5+ Years Experience",
      description: "Building scalable applications with modern technologies",
      stat: "50+",
      statLabel: "Projects Delivered"
    },
    {
      icon: FaUsers,
      title: "Team Leadership",
      description: "Leading development teams and mentoring junior developers",
      stat: "10+",
      statLabel: "Developers Mentored"
    },
    {
      icon: FaCertificate,
      title: "Certified Professional",
      description: "Multiple Azure certifications and continuous learning",
      stat: "5",
      statLabel: "Azure Certifications"
    },
    {
      icon: FaLightbulb,
      title: "Passion for Innovation",
      description: "Always exploring new technologies and best practices",
      stat: "100%",
      statLabel: "Commitment"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1.5'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
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
            Passionate about creating innovative solutions that make a difference
          </motion.p>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent mb-4">
            Building the Future with Code
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6 rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-6">
              Your Trusted Technology Partner
            </h3>
            
            <div className="space-y-4 text-gray-600 dark:text-gray-400 leading-relaxed">
              <p>
                I&apos;m a dedicated software engineer with over <span className="font-semibold text-blue-600 dark:text-blue-400">5 years of experience</span> in 
                full-stack development, specializing in <span className="font-semibold text-blue-600 dark:text-blue-400">Azure cloud solutions</span> and 
                <span className="font-semibold text-blue-600 dark:text-blue-400"> AI integrations</span>. Currently serving as a Senior Software Engineer at 
                <span className="font-semibold text-purple-600 dark:text-purple-400"> Tekenable Ltd</span>, where I lead development teams and deliver 
                innovative solutions for enterprise clients.
              </p>
              
              <p>
                My expertise spans across modern web technologies, cloud platforms, and emerging AI technologies. 
                I&apos;m passionate about creating <span className="font-semibold text-green-600 dark:text-green-400">scalable, maintainable solutions</span> that 
                solve real-world problems and drive business value for my clients.
              </p>
              
              <p>
                When I&apos;m not coding, I enjoy exploring new technologies, contributing to open-source projects, and 
                sharing knowledge with the developer community. I believe in <span className="font-semibold text-orange-600 dark:text-orange-400">continuous learning</span> and 
                staying ahead of technology trends to deliver the best solutions for my clients.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="mt-8"
            >
              <a 
                href="#contact"
                className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Let&apos;s Build Something Amazing Together
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </motion.div>
          </motion.div>

          {/* Key Achievements */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h4 className="text-xl font-bold text-gray-800 dark:text-white mb-6">
              🏆 Key Achievements
            </h4>
            {keyAchievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 p-4 rounded-lg border-l-4 border-blue-500 hover:shadow-md transition-all duration-300 group"
              >
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <achievement.icon className="text-white text-sm" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <h5 className="font-semibold text-gray-800 dark:text-white text-sm">
                        {achievement.title}
                      </h5>
                      <span className="text-xs bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 px-2 py-1 rounded-full">
                        {achievement.highlight}
                      </span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Statistics Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {highlights.map((highlight, index) => (
            <motion.div
              key={highlight.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 p-6 rounded-xl border border-blue-100 dark:border-gray-600 hover:shadow-lg transition-all duration-300 group text-center"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                <highlight.icon className="text-white text-xl" />
              </div>
              
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                viewport={{ once: true }}
                className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-1"
              >
                {highlight.stat}
              </motion.div>
              
              <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">
                {highlight.statLabel}
              </p>
              
              <h4 className="text-lg font-bold text-gray-800 dark:text-white mb-2">
                {highlight.title}
              </h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                {highlight.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;

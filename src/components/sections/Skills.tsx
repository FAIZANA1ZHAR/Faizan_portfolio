'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { skillCategories } from '../../data/skills';

const Skills: React.FC = () => {
  const SkillBar = ({ skill, index }: { skill: any; index: number }) => (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="mb-4 group relative z-10"
    >
      <div className="flex justify-between items-center mb-2">
        <span className="text-gray-700 dark:text-gray-300 font-medium group-hover:text-cyan-400 transition-colors duration-300">{skill.name}</span>
        <span className="text-blue-600 dark:text-blue-400 text-sm font-bold group-hover:text-cyan-300 transition-colors duration-300">{skill.level * 20}%</span>
      </div>
      <div className="w-full bg-gray-200/30 dark:bg-gray-700/30 rounded-full h-3 overflow-hidden border border-white/10 backdrop-blur-sm relative">
        {/* Background grid pattern */}
        <div className="absolute inset-0 opacity-20"
             style={{
               backgroundImage: `
                 linear-gradient(90deg, rgba(139, 92, 246, 0.3) 1px, transparent 1px),
                 linear-gradient(rgba(139, 92, 246, 0.3) 1px, transparent 1px)
               `,
               backgroundSize: '8px 8px'
             }}>
        </div>
        
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level * 20}%` }}
          transition={{ duration: 1.5, delay: index * 0.1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="h-full relative overflow-hidden rounded-full"
          style={{
            background: `linear-gradient(90deg, 
              rgba(59, 130, 246, 0.8) 0%, 
              rgba(139, 92, 246, 0.9) 25%, 
              rgba(168, 85, 247, 0.9) 50%, 
              rgba(236, 72, 153, 0.8) 75%, 
              rgba(59, 130, 246, 0.8) 100%)`,
            backgroundSize: '200% 100%',
            animation: 'gradient-shift 3s ease infinite'
          }}
        >
          {/* Data flow animation */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent translate-x-[-100%] group-hover:translate-x-[400%] transition-transform duration-1000 ease-out"></div>
          
          {/* Neural network nodes */}
          <div className="absolute top-1/2 left-2 w-1 h-1 bg-cyan-300 rounded-full transform -translate-y-1/2 animate-ping"></div>
          <div className="absolute top-1/2 left-1/2 w-1 h-1 bg-blue-300 rounded-full transform -translate-y-1/2 -translate-x-1/2 animate-ping" style={{animationDelay: '0.5s'}}></div>
          <div className="absolute top-1/2 right-2 w-1 h-1 bg-purple-300 rounded-full transform -translate-y-1/2 animate-ping" style={{animationDelay: '1s'}}></div>
          
          {/* Holographic overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 via-transparent to-purple-400/20 animate-pulse"></div>
        </motion.div>
      </div>
    </motion.div>
  );

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Technical Skills
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Technologies and tools I&apos;ve mastered throughout my journey
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="ai-card group rounded-2xl p-8 relative overflow-hidden"
            >
              <div className="flex items-center mb-6 relative z-10">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 via-purple-600 to-pink-500 rounded-xl flex items-center justify-center mr-4 relative overflow-hidden group-hover:animate-pulse">
                  {/* Holographic effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 opacity-0 group-hover:opacity-80 transition-opacity duration-300 animate-pulse"></div>
                  {/* Neural network pattern */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-300">
                    <svg className="w-full h-full" viewBox="0 0 48 48">
                      <circle cx="12" cy="12" r="2" fill="currentColor" className="text-cyan-300 animate-ping">
                        <animate attributeName="r" values="1;3;1" dur="2s" repeatCount="indefinite"/>
                      </circle>
                      <circle cx="36" cy="12" r="2" fill="currentColor" className="text-blue-300 animate-ping" style={{animationDelay: '0.5s'}}>
                        <animate attributeName="r" values="1;3;1" dur="2s" repeatCount="indefinite"/>
                      </circle>
                      <circle cx="24" cy="36" r="2" fill="currentColor" className="text-purple-300 animate-ping" style={{animationDelay: '1s'}}>
                        <animate attributeName="r" values="1;3;1" dur="2s" repeatCount="indefinite"/>
                      </circle>
                      <line x1="12" y1="12" x2="36" y2="12" stroke="currentColor" strokeWidth="0.5" className="text-white" opacity="0.6"/>
                      <line x1="12" y1="12" x2="24" y2="36" stroke="currentColor" strokeWidth="0.5" className="text-white" opacity="0.6"/>
                      <line x1="36" y1="12" x2="24" y2="36" stroke="currentColor" strokeWidth="0.5" className="text-white" opacity="0.6"/>
                    </svg>
                  </div>
                  <span className="text-white font-bold text-lg relative z-10 group-hover:text-cyan-200 transition-colors duration-300">
                    {category.category.charAt(0)}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:via-blue-500 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-300">
                  {category.category}
                </h3>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <SkillBar key={skill.name} skill={skill} index={skillIndex} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

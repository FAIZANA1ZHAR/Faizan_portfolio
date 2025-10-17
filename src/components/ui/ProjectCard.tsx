'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub, FaPlay } from 'react-icons/fa';
import { Project } from '../../data/projects';

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group relative ai-card rounded-2xl overflow-hidden transform hover:-translate-y-3"
    >
      {/* Project Image */}
      <div className="relative h-64 bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 overflow-hidden">
        {/* Animated background pattern */}
        <div className="absolute inset-0 opacity-30"
             style={{
               backgroundImage: `
                 linear-gradient(45deg, rgba(255,255,255,0.1) 25%, transparent 25%),
                 linear-gradient(-45deg, rgba(255,255,255,0.1) 25%, transparent 25%),
                 linear-gradient(45deg, transparent 75%, rgba(255,255,255,0.1) 75%),
                 linear-gradient(-45deg, transparent 75%, rgba(255,255,255,0.1) 75%)
               `,
               backgroundSize: '20px 20px',
               backgroundPosition: '0 0, 0 10px, 10px -10px, -10px 0px',
               animation: 'grid-move 20s linear infinite'
             }}>
        </div>
        
        {/* Holographic overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-transparent to-purple-500/20 group-hover:opacity-80 transition-opacity duration-500 animate-pulse"></div>
        
        {/* Neural network visualization */}
        <svg className="absolute inset-0 w-full h-full opacity-0 group-hover:opacity-40 transition-opacity duration-500">
          <defs>
            <linearGradient id={`neuralGradient${index}`} x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#06b6d4"/>
              <stop offset="50%" stopColor="#8b5cf6"/>
              <stop offset="100%" stopColor="#ec4899"/>
            </linearGradient>
          </defs>
          <circle cx="20%" cy="30%" r="3" fill={`url(#neuralGradient${index})`} className="animate-ping"/>
          <circle cx="80%" cy="30%" r="3" fill={`url(#neuralGradient${index})`} className="animate-ping" style={{animationDelay: '0.5s'}}/>
          <circle cx="50%" cy="70%" r="3" fill={`url(#neuralGradient${index})`} className="animate-ping" style={{animationDelay: '1s'}}/>
          <line x1="20%" y1="30%" x2="80%" y2="30%" stroke={`url(#neuralGradient${index})`} strokeWidth="1" opacity="0.6">
            <animate attributeName="stroke-dasharray" values="0,300;300,0;0,300" dur="3s" repeatCount="indefinite"/>
          </line>
          <line x1="20%" y1="30%" x2="50%" y2="70%" stroke={`url(#neuralGradient${index})`} strokeWidth="1" opacity="0.6">
            <animate attributeName="stroke-dasharray" values="0,300;300,0;0,300" dur="4s" repeatCount="indefinite"/>
          </line>
          <line x1="80%" y1="30%" x2="50%" y2="70%" stroke={`url(#neuralGradient${index})`} strokeWidth="1" opacity="0.6">
            <animate attributeName="stroke-dasharray" values="0,300;300,0;0,300" dur="3.5s" repeatCount="indefinite"/>
          </line>
        </svg>
        
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300"></div>
        <div className="absolute inset-0 flex items-center justify-center text-white text-lg font-semibold relative z-10">
          <span className="group-hover:text-cyan-200 transition-colors duration-300">{project.title}</span>
        </div>
        
        {/* Overlay with Actions */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
          <div className="flex gap-4">
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/20 backdrop-blur-sm p-3 rounded-full hover:bg-white/30 transition-all duration-300"
              >
                <FaPlay className="text-white text-xl" />
              </a>
            )}
            {project.codeUrl && (
              <a
                href={project.codeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/20 backdrop-blur-sm p-3 rounded-full hover:bg-white/30 transition-all duration-300"
              >
                <FaGithub className="text-white text-xl" />
              </a>
            )}
            <button className="bg-white/20 backdrop-blur-sm p-3 rounded-full hover:bg-white/30 transition-all duration-300">
              <FaExternalLinkAlt className="text-white text-lg" />
            </button>
          </div>
        </div>

        {/* Featured Badge */}
        {project.featured && (
          <div className="absolute top-4 left-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
            ⭐ Featured
          </div>
        )}
      </div>

      {/* Project Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
          {project.title}
        </h3>
        
        <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, i) => (
            <span
              key={i}
              className="bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm font-medium border border-blue-200 dark:border-blue-700"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3">
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 px-4 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 text-center"
            >
              Live Demo
            </a>
          )}
          {project.codeUrl && (
            <a
              href={project.codeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 py-2 px-4 rounded-lg font-medium hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 text-center"
            >
              Code
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;

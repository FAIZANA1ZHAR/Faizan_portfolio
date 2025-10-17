'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, Calendar, ExternalLink, CheckCircle, Star } from 'lucide-react';
import Link from 'next/link';

const certifications = [
  {
    title: 'PL-200: Power Platform Functional Consultant Associate',
    issuer: 'Microsoft',
    date: 'Oct 2025',
    status: 'Current',
    level: 'Associate',
    description: 'Advanced certification for designing, developing, and configuring Power Platform solutions',
    skills: ['Power Apps', 'Power Automate', 'Power BI', 'Dataverse', 'Power Platform Administration', 'Business Process Flows'],
    badge: '/badges/pl-200.png',
    verifyLink: 'https://learn.microsoft.com/en-us/certifications/power-platform-functional-consultant-associate/',
    color: 'from-purple-600 to-indigo-700'
  },
  {
    title: 'DP-100: Azure Data Scientist Associate',
    issuer: 'Microsoft',
    date: 'Jan 2025',
    status: 'Current',
    level: 'Associate',
    description: 'Advanced certification in Azure machine learning and data science workflows',
    skills: ['Azure Machine Learning', 'MLOps', 'Data Science', 'Python', 'Azure AI'],
    badge: '/badges/dp-100.png',
    verifyLink: 'https://learn.microsoft.com/en-us/certifications/azure-data-scientist/',
    color: 'from-blue-500 to-blue-700'
  },
  {
    title: 'AI-102: Designing and Implementing Azure AI Solution',
    issuer: 'Microsoft',
    date: 'Jun 2023',
    status: 'Active',
    level: 'Associate',
    description: 'Expertise in building, managing, and deploying AI solutions using Azure AI services',
    skills: ['Azure AI Services', 'Computer Vision', 'Natural Language Processing', 'Speech Services', 'Azure OpenAI'],
    badge: '/badges/ai-102.png',
    verifyLink: 'https://learn.microsoft.com/en-us/certifications/azure-ai-engineer/',
    color: 'from-purple-500 to-purple-700'
  },
  {
    title: 'AI-900: Microsoft Azure AI Fundamentals',
    issuer: 'Microsoft',
    date: 'Jul 2023',
    status: 'Active',
    level: 'Fundamentals',
    description: 'Foundation knowledge of machine learning and AI concepts on Azure',
    skills: ['AI Fundamentals', 'Machine Learning', 'Azure AI', 'Cognitive Services'],
    badge: '/badges/ai-900.png',
    verifyLink: 'https://learn.microsoft.com/en-us/certifications/azure-ai-fundamentals/',
    color: 'from-green-500 to-green-700'
  },
  {
    title: 'PL-900: Microsoft Power Platform Fundamentals',
    issuer: 'Microsoft',
    date: 'Aug 2023',
    status: 'Active',
    level: 'Fundamentals',
    description: 'Comprehensive understanding of Power Platform capabilities and business value',
    skills: ['Power Apps', 'Power Automate', 'Power BI', 'Power Virtual Agents', 'Dataverse'],
    badge: '/badges/pl-900.png',
    verifyLink: 'https://learn.microsoft.com/en-us/certifications/power-platform-fundamentals/',
    color: 'from-orange-500 to-orange-700'
  },
  {
    title: 'AZ-900: Microsoft Azure Fundamentals',
    issuer: 'Microsoft',
    date: 'Jul 2023',
    status: 'Active',
    level: 'Fundamentals',
    description: 'Foundational knowledge of cloud services and Azure platform',
    skills: ['Azure Services', 'Cloud Computing', 'Azure Security', 'Azure Pricing', 'SLA'],
    badge: '/badges/az-900.png',
    verifyLink: 'https://learn.microsoft.com/en-us/certifications/azure-fundamentals/',
    color: 'from-blue-500 to-cyan-600'
  }
];

const additionalSkills = [
  'Azure Architecture',
  'DevOps & CI/CD',
  'Microservices',
  'API Development',
  'Database Design',
  'Security Best Practices',
  'Agile Methodologies',
  'Team Leadership'
];

export function Certifications() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="certifications" className="section-padding bg-background">
      <div className="container-padding mx-auto max-w-7xl" ref={ref}>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4 mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            <span className="text-primary">Certifications</span> & Skills
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Microsoft certified professional with expertise across Azure, AI, and Power Platform
          </p>
        </motion.div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ y: 20, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-card/80 backdrop-blur-sm border border-transparent rounded-xl p-6 hover:shadow-2xl transition-all duration-500 group relative overflow-hidden"
              style={{
                background: `linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)`,
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255,255,255,0.2)'
              }}
            >
              {/* Animated AI Grid Background */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0" 
                     style={{
                       backgroundImage: `
                         linear-gradient(rgba(139, 92, 246, 0.1) 1px, transparent 1px),
                         linear-gradient(90deg, rgba(139, 92, 246, 0.1) 1px, transparent 1px)
                       `,
                       backgroundSize: '20px 20px',
                       animation: 'grid-move 10s linear infinite'
                     }}>
                </div>
              </div>
              
              {/* Holographic Border Effect */}
              <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                   style={{
                     background: `linear-gradient(45deg, 
                       rgba(139, 92, 246, 0.3) 0%, 
                       rgba(59, 130, 246, 0.3) 25%, 
                       rgba(168, 85, 247, 0.3) 50%, 
                       rgba(236, 72, 153, 0.3) 75%, 
                       rgba(139, 92, 246, 0.3) 100%)`,
                     backgroundSize: '400% 400%',
                     animation: 'gradient-shift 4s ease infinite',
                     mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                     maskComposite: 'xor',
                     padding: '2px'
                   }}>
              </div>
              
              {/* Floating Particles */}
              <div className="absolute inset-0 overflow-hidden rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute top-2 left-2 w-1 h-1 bg-blue-400 rounded-full animate-ping"></div>
                <div className="absolute top-4 right-8 w-1 h-1 bg-purple-400 rounded-full animate-ping" style={{animationDelay: '1s'}}></div>
                <div className="absolute bottom-4 left-6 w-1 h-1 bg-pink-400 rounded-full animate-ping" style={{animationDelay: '2s'}}></div>
              </div>
              
              {/* Glowing Corner Effect */}
              <div className="absolute top-0 right-0 w-20 h-20 opacity-0 group-hover:opacity-60 transition-opacity duration-500">
                <div className="absolute inset-0 bg-gradient-to-bl from-cyan-400 via-blue-500 to-transparent rounded-xl blur-xl"></div>
              </div>
              
              {/* Neural Network Lines */}
              <svg className="absolute inset-0 w-full h-full opacity-0 group-hover:opacity-20 transition-opacity duration-500" style={{zIndex: 1}}>
                <line x1="0" y1="50%" x2="100%" y2="20%" stroke="url(#gradient)" strokeWidth="0.5">
                  <animate attributeName="stroke-dasharray" values="0,1000;1000,0;0,1000" dur="4s" repeatCount="indefinite"/>
                </line>
                <line x1="20%" y1="0" x2="80%" y2="100%" stroke="url(#gradient)" strokeWidth="0.5">
                  <animate attributeName="stroke-dasharray" values="0,1000;1000,0;0,1000" dur="3s" repeatCount="indefinite"/>
                </line>
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#8b5cf6"/>
                    <stop offset="50%" stopColor="#3b82f6"/>
                    <stop offset="100%" stopColor="#ec4899"/>
                  </linearGradient>
                </defs>
              </svg>
              
              <div className="relative z-10 space-y-4">
                {/* Header */}
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <Award className="w-5 h-5 text-primary" />
                      <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                        cert.level === 'Associate' ? 'bg-blue-500/20 text-blue-400' :
                        'bg-green-500/20 text-green-400'
                      }`}>
                        {cert.level}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold leading-tight group-hover:text-primary transition-colors duration-300">
                      {cert.title}
                    </h3>
                  </div>
                  
                  <div className={`w-2 h-2 rounded-full ${
                    cert.status === 'Current' ? 'bg-yellow-500' :
                    cert.status === 'Active' ? 'bg-green-500' :
                    'bg-gray-500'
                  }`}></div>
                </div>

                {/* Issuer and Date */}
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <span className="font-medium">{cert.issuer}</span>
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>{cert.date}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {cert.description}
                </p>

                {/* Skills */}
                <div>
                  <h4 className="text-sm font-medium mb-2">Key Skills:</h4>
                  <div className="flex flex-wrap gap-1">
                    {cert.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="bg-muted text-muted-foreground px-2 py-1 rounded text-xs border border-border"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Verify Link */}
                <Link
                  href={cert.verifyLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-sm text-primary hover:text-primary/80 transition-colors duration-200"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Verify Certification</span>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-card border border-border rounded-xl p-8"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-semibold mb-4">Additional Expertise</h3>
            <p className="text-muted-foreground">
              Beyond certifications, I bring extensive experience in these areas
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {additionalSkills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={inView ? { scale: 1, opacity: 1 } : {}}
                transition={{ duration: 0.3, delay: 0.8 + index * 0.05 }}
                className="flex items-center space-x-2 p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors duration-200"
              >
                <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                <span className="text-sm font-medium">{skill}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Certification Summary */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 text-center"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">6</div>
              <div className="text-muted-foreground">Microsoft Certifications</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">3</div>
              <div className="text-muted-foreground">Associate Level</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">100%</div>
              <div className="text-muted-foreground">Active Status</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
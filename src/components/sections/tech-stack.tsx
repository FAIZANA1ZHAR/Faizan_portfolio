'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Database, 
  Cloud, 
  Smartphone, 
  Code, 
  Brain,
  Settings,
  Server,
  Globe
} from 'lucide-react';

const technologies = {
  frontend: {
    icon: Globe,
    title: 'Frontend',
    color: 'text-blue-500',
    bgColor: 'bg-blue-500/10',
    borderColor: 'border-blue-500/20',
    skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Angular', 'HTML5/CSS3']
  },
  backend: {
    icon: Server,
    title: 'Backend',
    color: 'text-green-500',
    bgColor: 'bg-green-500/10',
    borderColor: 'border-green-500/20',
    skills: ['.NET Core', 'Node.js', 'Python', 'FastAPI', 'C#', 'GraphQL']
  },
  cloud: {
    icon: Cloud,
    title: 'Cloud & DevOps',
    color: 'text-purple-500',
    bgColor: 'bg-purple-500/10',
    borderColor: 'border-purple-500/20',
    skills: ['Azure', 'Docker', 'CI/CD', 'Azure Functions', 'DevOps', 'Serverless']
  },
  mobile: {
    icon: Smartphone,
    title: 'Mobile',
    color: 'text-orange-500',
    bgColor: 'bg-orange-500/10',
    borderColor: 'border-orange-500/20',
    skills: ['React Native', 'Cross-platform', 'Mobile App Development']
  },
  database: {
    icon: Database,
    title: 'Database',
    color: 'text-red-500',
    bgColor: 'bg-red-500/10',
    borderColor: 'border-red-500/20',
    skills: ['SQL Server', 'Firebase', 'Azure SQL', 'NoSQL', 'Database Design']
  },
  ai: {
    icon: Brain,
    title: 'AI & ML',
    color: 'text-pink-500',
    bgColor: 'bg-pink-500/10',
    borderColor: 'border-pink-500/20',
    skills: ['Azure AI', 'Machine Learning', 'Hugging Face', 'NLP', 'Computer Vision']
  },
  tools: {
    icon: Settings,
    title: 'Tools & Platforms',
    color: 'text-yellow-500',
    bgColor: 'bg-yellow-500/10',
    borderColor: 'border-yellow-500/20',
    skills: ['Power Platform', 'Dynamics 365', 'Git', 'Visual Studio', 'VS Code']
  },
  languages: {
    icon: Code,
    title: 'Languages',
    color: 'text-indigo-500',
    bgColor: 'bg-indigo-500/10',
    borderColor: 'border-indigo-500/20',
    skills: ['TypeScript', 'JavaScript', 'C#', 'Python', 'R', 'C++']
  }
};

export function TechStack() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="tech-stack" className="section-padding bg-muted/30">
      <div className="container-padding mx-auto max-w-7xl" ref={ref}>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4 mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            Tech <span className="text-primary">Stack</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Technologies and tools I use to bring ideas to life and solve complex problems
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {Object.entries(technologies).map(([key, tech], index) => {
            const Icon = tech.icon;
            return (
              <motion.div
                key={key}
                initial={{ y: 20, opacity: 0 }}
                animate={inView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`tech-card group border-l-4 ${tech.borderColor}`}
              >
                <div className="space-y-4">
                  <div className={`w-12 h-12 rounded-lg ${tech.bgColor} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`w-6 h-6 ${tech.color}`} />
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors duration-300">
                      {tech.title}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {tech.skills.map((skill, skillIndex) => (
                        <motion.div
                          key={skillIndex}
                          initial={{ scale: 0.8, opacity: 0 }}
                          animate={inView ? { scale: 1, opacity: 1 } : {}}
                          transition={{ duration: 0.3, delay: (index * 0.1) + (skillIndex * 0.05) }}
                          className="text-xs text-muted-foreground bg-background/50 px-2 py-1 rounded-full border border-border hover:border-primary/50 hover:text-primary transition-all duration-200"
                        >
                          {skill}
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Featured Technologies */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-semibold mb-8">Currently Focusing On</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'Azure AI Services',
              'Next.js 15',
              'Power Platform',
              'Machine Learning',
              'Microservices',
              'Cloud Architecture'
            ].map((tech, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={inView ? { scale: 1, opacity: 1 } : {}}
                transition={{ duration: 0.3, delay: 1 + index * 0.1 }}
                className="bg-primary/10 text-primary border border-primary/20 px-4 py-2 rounded-full font-medium hover:bg-primary/20 transition-all duration-300 cursor-default"
              >
                {tech}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
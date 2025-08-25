import React from 'react';
import { FaLinkedin, FaGithub, FaTwitter, FaGlobe, FaBriefcase } from 'react-icons/fa';
import { personalInfo } from '../../data/personal-info';

interface SocialLinksProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showLabels?: boolean;
}

const SocialLinks: React.FC<SocialLinksProps> = ({ 
  className = "flex justify-center gap-4", 
  size = 'md',
  showLabels = false 
}) => {
  const iconSizes = {
    sm: 20,
    md: 24,
    lg: 28
  };

  const iconSize = iconSizes[size];

  const socialPlatforms = [
    {
      name: 'LinkedIn',
      url: personalInfo.socialLinks.linkedin,
      icon: FaLinkedin,
      color: 'hover:text-blue-600 dark:hover:text-blue-400',
      bgColor: 'hover:bg-blue-50 dark:hover:bg-blue-900/20'
    },
    {
      name: 'GitHub',
      url: personalInfo.socialLinks.github,
      icon: FaGithub,
      color: 'hover:text-gray-900 dark:hover:text-white',
      bgColor: 'hover:bg-gray-50 dark:hover:bg-gray-700/20'
    },
    {
      name: 'Twitter',
      url: personalInfo.socialLinks.twitter,
      icon: FaTwitter,
      color: 'hover:text-blue-400 dark:hover:text-blue-400',
      bgColor: 'hover:bg-blue-50 dark:hover:bg-blue-900/20',
      optional: true
    },
    {
      name: 'Portfolio',
      url: personalInfo.socialLinks.portfolio,
      icon: FaGlobe,
      color: 'hover:text-purple-600 dark:hover:text-purple-400',
      bgColor: 'hover:bg-purple-50 dark:hover:bg-purple-900/20',
      optional: true
    },
    {
      name: 'Upwork',
      url: personalInfo.socialLinks.upwork,
      icon: FaBriefcase,
      color: 'hover:text-green-600 dark:hover:text-green-400',
      bgColor: 'hover:bg-green-50 dark:hover:bg-green-900/20',
      optional: true
    }
  ];

  return (
    <div className={className}>
      {socialPlatforms.map((platform) => {
        // Skip optional platforms if URL is not provided
        if (platform.optional && !platform.url) return null;
        
        const IconComponent = platform.icon;
        
        return (
          <a 
            key={platform.name}
            href={platform.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`
              group relative p-2 rounded-lg text-gray-600 dark:text-gray-400 
              ${platform.color} ${platform.bgColor}
              transition-all duration-300 transform hover:scale-110 
              focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2
              ${showLabels ? 'flex items-center gap-2' : ''}
            `}
            aria-label={`${platform.name} Profile`}
            title={`Visit my ${platform.name} profile`}
          >
            <IconComponent size={iconSize} className="transition-transform duration-300 group-hover:rotate-6" />
            {showLabels && (
              <span className="text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {platform.name}
              </span>
            )}
            
            {/* Tooltip for non-labeled version */}
            {!showLabels && (
              <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap z-10">
                {platform.name}
              </span>
            )}
          </a>
        );
      })}
    </div>
  );
};

export default SocialLinks;

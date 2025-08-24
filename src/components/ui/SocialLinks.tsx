import React from 'react';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
import { personalInfo } from '../../data/personal-info';

interface SocialLinksProps {
  className?: string;
}

const SocialLinks: React.FC<SocialLinksProps> = ({ className = "flex justify-center gap-6" }) => {
  return (
    <div className={className}>
      <a 
        href={personalInfo.socialLinks.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors transform hover:scale-110 duration-300"
        aria-label="LinkedIn Profile"
      >
        <FaLinkedin size={24} />
      </a>
      <a 
        href={personalInfo.socialLinks.github}
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors transform hover:scale-110 duration-300"
        aria-label="GitHub Profile"
      >
        <FaGithub size={24} />
      </a>
      {personalInfo.socialLinks.twitter && (
        <a 
          href={personalInfo.socialLinks.twitter}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-blue-400 dark:text-gray-400 dark:hover:text-blue-400 transition-colors transform hover:scale-110 duration-300"
          aria-label="Twitter Profile"
        >
          <FaTwitter size={24} />
        </a>
      )}
    </div>
  );
};

export default SocialLinks;

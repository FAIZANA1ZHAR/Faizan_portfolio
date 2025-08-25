'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';
import { personalInfo } from '../../data/personal-info';
import SocialLinks from '../ui/SocialLinks';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      alert('Thank you for your message! I\'ll get back to you soon.');
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 2000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-48 h-48 sm:w-72 sm:h-72 lg:w-96 lg:h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-48 h-48 sm:w-72 sm:h-72 lg:w-96 lg:h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Let&apos;s Work Together
          </h2>
          <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto mb-4 sm:mb-6 rounded-full"></div>
          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Ready to bring your ideas to life? Let&apos;s discuss your next project.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6 sm:space-y-8 order-2 lg:order-1"
          >
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 sm:mb-8">Get In Touch</h3>
            
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-center group">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mr-3 sm:mr-4 group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                  <FaEnvelope className="text-white text-sm sm:text-lg" />
                </div>
                <div className="min-w-0 flex-1">
                  <h4 className="text-white font-semibold text-sm sm:text-base">Email</h4>
                  <a 
                    href={`mailto:${personalInfo.email}`} 
                    className="text-gray-300 hover:text-purple-400 transition-colors text-sm sm:text-base break-all"
                  >
                    {personalInfo.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center group">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mr-3 sm:mr-4 group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                  <FaMapMarkerAlt className="text-white text-sm sm:text-lg" />
                </div>
                <div>
                  <h4 className="text-white font-semibold text-sm sm:text-base">Location</h4>
                  <p className="text-gray-300 text-sm sm:text-base">{personalInfo.location}</p>
                </div>
              </div>

              {personalInfo.phone && (
                <div className="flex items-center group">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-green-500 to-blue-500 rounded-xl flex items-center justify-center mr-3 sm:mr-4 group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                    <FaPhone className="text-white text-sm sm:text-lg" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-sm sm:text-base">Phone</h4>
                    <a 
                      href={`tel:${personalInfo.phone}`}
                      className="text-gray-300 hover:text-green-400 transition-colors text-sm sm:text-base"
                    >
                      {personalInfo.phone}
                    </a>
                  </div>
                </div>
              )}

              <div className="flex items-center group">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-xl flex items-center justify-center mr-3 sm:mr-4 group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                  <FaPhone className="text-white text-sm sm:text-lg" />
                </div>
                <div>
                  <h4 className="text-white font-semibold text-sm sm:text-base">Available For</h4>
                  <p className="text-gray-300 text-sm sm:text-base">Freelance & Full-time opportunities</p>
                </div>
              </div>
            </div>

            <div className="pt-6 sm:pt-8">
              <h4 className="text-white font-semibold mb-4 text-sm sm:text-base">Follow Me</h4>
              <SocialLinks className="flex gap-3 sm:gap-4" size="md" />
            </div>

            {/* Quick Response Time */}
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
              <div className="flex items-center mb-2">
                <div className="w-3 h-3 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                <span className="text-white font-medium text-sm">Quick Response Time</span>
              </div>
              <p className="text-gray-300 text-sm">
                I typically respond within 24 hours during business days.
              </p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/20 order-1 lg:order-2"
          >
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 lg:hidden">Send Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label htmlFor="name" className="block text-white font-medium mb-2 text-sm sm:text-base">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-white/20 border border-white/30 rounded-lg px-3 py-2 sm:px-4 sm:py-3 text-white placeholder-gray-300 focus:outline-none focus:border-purple-400 transition-colors text-sm sm:text-base"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-white font-medium mb-2 text-sm sm:text-base">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-white/20 border border-white/30 rounded-lg px-3 py-2 sm:px-4 sm:py-3 text-white placeholder-gray-300 focus:outline-none focus:border-purple-400 transition-colors text-sm sm:text-base"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-white font-medium mb-2 text-sm sm:text-base">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full bg-white/20 border border-white/30 rounded-lg px-3 py-2 sm:px-4 sm:py-3 text-white placeholder-gray-300 focus:outline-none focus:border-purple-400 transition-colors text-sm sm:text-base"
                  placeholder="Project Discussion"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-white font-medium mb-2 text-sm sm:text-base">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full bg-white/20 border border-white/30 rounded-lg px-3 py-2 sm:px-4 sm:py-3 text-white placeholder-gray-300 focus:outline-none focus:border-purple-400 transition-colors resize-none text-sm sm:text-base"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold py-3 sm:py-4 px-6 rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base"
              >
                {isSubmitting ? (
                  <div className="flex items-center">
                    <div className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div>
                    Sending...
                  </div>
                ) : (
                  <div className="flex items-center">
                    <FaPaperPlane className="mr-2" />
                    Send Message
                  </div>
                )}
              </motion.button>

              {/* Form Footer */}
              <p className="text-xs sm:text-sm text-gray-400 text-center mt-4">
                Your message is secure and confidential. I&apos;ll respond within 24 hours.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

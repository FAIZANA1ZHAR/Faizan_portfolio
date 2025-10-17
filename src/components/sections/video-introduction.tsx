'use client';

import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaPlay, FaPause, FaVolumeUp, FaVolumeMute, FaExpand } from 'react-icons/fa';

const VideoIntroduction: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false); // Changed to false to enable audio by default
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      const newMutedState = !isMuted;
      videoRef.current.muted = newMutedState;
      setIsMuted(newMutedState);
    }
  };

  const toggleFullscreen = () => {
    if (videoRef.current) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
      }
    }
  };

  return (
    <section id="video-intro" className="py-8 sm:py-12 lg:py-16 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8" // Reduced from mb-12 to mb-8
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
            Get to Know Me
          </h2>
          <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto mb-6 rounded-full"></div>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Watch my personal introduction and learn more about my journey as a developer
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto" // Changed from max-w-4xl to max-w-3xl for smaller container
        >
          <div className="relative bg-black rounded-2xl overflow-hidden shadow-2xl">
            {/* Video Element */}
            <video
              ref={videoRef}
              className="w-full h-auto" // Removed aspect-video to allow custom aspect ratio
              style={{ aspectRatio: '16/10' }} // Custom aspect ratio - shorter than 16:9
              muted={isMuted}
              playsInline
              preload="metadata"
              controls={false} // We'll use custom controls
              poster="/faizanpic.jpg" // Using your profile image as poster
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
              onEnded={() => setIsPlaying(false)}
              onLoadedData={() => {
                // Ensure audio is enabled when video loads
                if (videoRef.current) {
                  videoRef.current.muted = isMuted;
                  videoRef.current.volume = 1.0; // Set volume to 100%
                }
              }}
            >
              <source src="/f12eafa9ac154856908db86c95fddab9.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            {/* Video Controls Overlay */}
            <div className="absolute inset-0 bg-black/30 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <div className="flex items-center gap-4">
                {/* Play/Pause Button */}
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={togglePlay}
                  className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-full p-4 text-white hover:bg-white/30 transition-colors"
                >
                  {isPlaying ? <FaPause size={24} /> : <FaPlay size={24} />}
                </motion.button>

                {/* Mute/Unmute Button */}
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={toggleMute}
                  className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-full p-3 text-white hover:bg-white/30 transition-colors"
                  title={isMuted ? "Unmute" : "Mute"}
                >
                  {isMuted ? <FaVolumeMute size={20} /> : <FaVolumeUp size={20} />}
                </motion.button>

                {/* Fullscreen Button */}
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={toggleFullscreen}
                  className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-full p-3 text-white hover:bg-white/30 transition-colors"
                >
                  <FaExpand size={20} />
                </motion.button>
              </div>
            </div>

            {/* Play Button Overlay (when not playing) */}
            {!isPlaying && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="absolute inset-0 flex items-center justify-center bg-black/40"
              >
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={togglePlay}
                  className="bg-purple-600/80 backdrop-blur-sm border border-purple-400/30 rounded-full p-8 text-white hover:bg-purple-500/80 transition-colors shadow-2xl"
                >
                  <FaPlay size={32} className="ml-1" />
                </motion.button>
              </motion.div>
            )}
          </div>

          {/* Video Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-6 text-center" // Reduced from mt-8 to mt-6
          >
            <div className="bg-white/10 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-200/20 dark:border-gray-700/30">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                  Personal Introduction Video
                </h3>
                <div className="flex items-center gap-2">
                  {isMuted ? (
                    <div className="flex items-center text-orange-500 text-sm">
                      <FaVolumeMute className="mr-1" />
                      <span>Audio Muted</span>
                    </div>
                  ) : (
                    <div className="flex items-center text-green-500 text-sm">
                      <FaVolumeUp className="mr-1" />
                      <span>Audio Enabled</span>
                    </div>
                  )}
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                In this video, I introduce myself and share my passion for software development, 
                my expertise in Azure and AI technologies, and what drives me to create innovative solutions. 
                Get a glimpse of my personality and professional approach.
                {isMuted && (
                  <span className="block mt-2 text-orange-500 text-sm font-medium">
                    💡 Click the volume button in the video player to enable audio.
                  </span>
                )}
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default VideoIntroduction;
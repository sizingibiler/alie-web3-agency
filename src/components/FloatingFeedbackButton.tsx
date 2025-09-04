"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X } from 'lucide-react';

const FloatingFeedbackButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling 300px
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          className="fixed bottom-6 right-6 z-50"
        >
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 20, scale: 0.8 }}
                className="absolute bottom-16 right-0 w-72 p-4 bg-[#141414] border border-[#27272A] rounded-lg shadow-xl"
              >
                <button
                  onClick={() => setIsExpanded(false)}
                  className="absolute top-2 right-2 text-[#A1A1A1] hover:text-white"
                >
                  <X className="w-4 h-4" />
                </button>
                
                <h3 className="text-white font-semibold mb-2">Share Your Feedback</h3>
                <p className="text-[#A1A1A1] text-sm mb-4">
                  Help us improve our platform and analyses. Your feedback is valuable to us!
                </p>
                
                <a
                  href="https://forms.gle/k8KYD9QfkNkioRY77"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsExpanded(false)}
                  className="block w-full py-2 px-4 bg-[#00AAFF] text-white font-semibold rounded-lg text-center
                           hover:bg-[#0088CC] transition-all duration-300"
                >
                  Open Feedback Form
                </a>
              </motion.div>
            )}
          </AnimatePresence>

          <motion.button
            onClick={() => setIsExpanded(!isExpanded)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-14 h-14 bg-[#00AAFF] text-white rounded-full shadow-lg
                     flex items-center justify-center hover:bg-[#0088CC] 
                     transition-all duration-300"
          >
            <MessageCircle className="w-6 h-6" />
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FloatingFeedbackButton;

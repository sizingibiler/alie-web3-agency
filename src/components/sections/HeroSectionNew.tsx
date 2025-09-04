"use client";

import React from 'react';
import { motion } from 'framer-motion';
import IntelligenceOrb from '../IntelligenceOrb';
import dynamic from 'next/dynamic';

const VideoSphere3D = dynamic(() => import('../VideoSphere3D'), { ssr: false });

const HeroSection = () => {
  return (
    <section 
      id="hero" 
      className="relative w-full h-screen max-h-[900px] flex items-center justify-center overflow-hidden"
      style={{ backgroundColor: '#0A0A0A' }}
    >
      {/* 3D Background - Disabled to avoid conflicts with VideoSphere */}
      {/* <IntelligenceOrb /> */}

      {/* Content */}
      <div className="container mx-auto px-4 py-8 lg:py-0 h-full flex items-center">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4 lg:gap-8 w-full">
          
          {/* Left Side: Text and Buttons */}
          <motion.div 
            className="w-full lg:w-1/2 text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
            <motion.h1 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-1"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Stop Guessing.
            </motion.h1>
            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 md:mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <span className="gradient-text">Start Growing.</span>
            </motion.h1>
          
            <motion.h2
              className="text-lg sm:text-xl md:text-2xl font-light text-[#00FF88] mb-3 md:mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              The Intelligence Engine for Web3
            </motion.h2>
            
            <motion.p 
              className="text-sm md:text-base lg:text-lg text-[#A1A1A1] max-w-lg mx-auto lg:mx-0 mb-4 md:mb-6 px-4 lg:px-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
          >
            We are not a marketing agency. We are a technology-driven intelligence 
            partner that uses proprietary systems to find and grow high-potential 
            Web3 projects.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <a 
              href="#services"
              className="inline-block bg-[#00FF88] text-black font-bold py-2.5 px-6 md:py-3 md:px-8 rounded-lg text-sm md:text-base
                         hover:bg-opacity-90 hover:scale-105 transition-all duration-300 
                         shadow-lg shadow-[#00FF88]/20 hover:shadow-[#00FF88]/40"
            >
              Explore Our Services
            </a>
            <a 
              href="https://linktr.ee/alienetwork"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border-2 border-[#00FF88] text-[#00FF88] font-bold py-2.5 px-6 md:py-3 md:px-8 rounded-lg text-sm md:text-base
                         hover:bg-[#00FF88] hover:text-black hover:scale-105 
                         transition-all duration-300"
            >
              Schedule a Call
            </a>
          </motion.div>
          </motion.div>

          {/* Right Side: 3D Video Sphere - Properly sized */}
          <div className="w-full lg:w-1/2 flex items-center justify-center mt-8 lg:mt-0">
            <div className="relative w-full max-w-[360px] sm:max-w-[400px] md:max-w-[460px] lg:max-w-[520px] aspect-square">
              <VideoSphere3D />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <div className="w-6 h-10 border-2 border-[#00FF88] rounded-full flex justify-center">
          <div className="w-1 h-3 bg-[#00FF88] rounded-full mt-2" />
        </div>
      </motion.div>
    </section>
  )
}

export default HeroSection;

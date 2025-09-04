"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Clock, User } from 'lucide-react';

const InsightsSection = () => {
  // Medium yazılarınızı burada manuel olarak güncelleyebilirsiniz
  const insights = [
    {
      title: "The Future of Web3 Intelligence",
      description: "How AI and blockchain are converging to create autonomous market discovery systems that identify opportunities before they become mainstream.",
      link: "https://medium.com/@alienetwork",
      author: "Alie Network",
      date: "Jan 2025",
      readTime: "5 min read",
      category: "Technology"
    },
    {
      title: "From Noise to Signal: Data-Driven Growth",
      description: "Understanding how proprietary intelligence engines cut through market chaos to find true alpha in the Web3 ecosystem.",
      link: "https://medium.com/@alienetwork",
      author: "Alie Network",
      date: "Jan 2025",
      readTime: "7 min read",
      category: "Strategy"
    },
    {
      title: "Building Sustainable Web3 Communities",
      description: "A comprehensive guide to community-first growth strategies that create lasting value beyond temporary hype cycles.",
      link: "https://medium.com/@alienetwork",
      author: "Alie Network",
      date: "Dec 2024",
      readTime: "10 min read",
      category: "Growth"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section 
      id="insights" 
      className="relative py-16 md:py-24 overflow-hidden"
      style={{ backgroundColor: '#0A0A0A' }}
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#00FF88]/5 to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.span 
            className="text-[#00FF88] font-mono text-sm tracking-wider uppercase"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Latest Insights
          </motion.span>
          <motion.h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-4 mb-4 md:mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            Research & <span className="gradient-text">Thought Leadership</span>
          </motion.h2>
          <motion.p 
            className="text-base md:text-lg text-[#A1A1A1] max-w-3xl mx-auto px-4 md:px-0"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            Dive deep into our analysis of Web3 trends, growth strategies, and the future of decentralized intelligence.
          </motion.p>
        </motion.div>

        {/* Articles Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {insights.map((article, index) => (
            <motion.article
              key={index}
              variants={cardVariants}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="group"
            >
              <a 
                href={article.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block h-full"
              >
                <div className="relative h-full p-6 md:p-8 rounded-2xl border border-[#27272A] 
                              bg-gradient-to-b from-[#141414]/50 to-[#0A0A0A]/50 
                              backdrop-blur-sm overflow-hidden
                              hover:border-[#00FF88]/50 transition-all duration-500">
                  
                  {/* Category Badge */}
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 text-xs font-mono text-[#00FF88] 
                                   border border-[#00FF88]/30 rounded-full">
                      {article.category}
                    </span>
                  </div>
                  
                  {/* Content */}
                  <div className="mb-4">
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-3 
                                 group-hover:text-[#00FF88] transition-colors duration-300">
                      {article.title}
                    </h3>
                    <p className="text-[#A1A1A1] text-sm md:text-base leading-relaxed mb-6">
                      {article.description}
                    </p>
                  </div>

                  {/* Meta Info */}
                  <div className="flex items-center justify-between text-xs md:text-sm text-[#A1A1A1] mb-4">
                    <div className="flex items-center gap-4">
                      <span className="flex items-center gap-1">
                        <User className="w-3 h-3" />
                        {article.author}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {article.readTime}
                      </span>
                    </div>
                    <span>{article.date}</span>
                  </div>

                  {/* CTA */}
                  <div className="flex items-center text-[#00FF88] font-semibold 
                                group-hover:text-[#00AAFF] transition-colors duration-300">
                    <span>Read Article</span>
                    <ArrowUpRight className="w-4 h-4 ml-1 group-hover:translate-x-1 
                                          group-hover:-translate-y-1 transition-transform duration-300" />
                  </div>
                </div>
              </a>
            </motion.article>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div 
          className="text-center mt-12 md:mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <a 
            href="https://medium.com/@alienetwork"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 md:px-8 py-3 bg-[#00FF88] text-black font-bold rounded-lg 
                     hover:bg-opacity-90 hover:scale-105 transition-all duration-300 
                     shadow-lg shadow-[#00FF88]/20 hover:shadow-[#00FF88]/40">
            View All Articles on Medium
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default InsightsSection;

"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, TrendingUp, BarChart3, Zap } from 'lucide-react';
import { trackEvent } from '@/lib/gtm';

const services = [
  {
    id: 'launchpad',
    title: 'LAUNCHPAD Package',
    subtitle: 'For new projects preparing for TGE',
    description: 'A focused growth sprint to maximize launch impact. Our autonomous systems identify and engage high-value communities while building anticipation across the ecosystem.',
    icon: Rocket,
    features: ['KOL Network Activation', 'Strategic Partnerships', 'Community Building', 'Launch Optimization'],
    color: '#00FF88'
  },
  {
    id: 'ecosystem',
    title: 'ECOSYSTEM GROWTH Package',
    subtitle: 'For launched projects seeking scale',
    description: 'A monthly, continuous growth partnership to revive community and drive adoption. Our intelligence engine works 24/7 to identify growth opportunities.',
    icon: TrendingUp,
    features: ['Community Revival', 'Market Analysis', 'Growth Automation', 'Performance Tracking'],
    color: '#00AAFF'
  },
  {
    id: 'data',
    title: 'DATA & STRATEGY Module',
    subtitle: 'For projects with in-house teams',
    description: 'Access our market analysis and strategic insights. Get the same intelligence that powers our growth campaigns, delivered directly to your team.',
    icon: BarChart3,
    features: ['Market Intelligence', 'Competitor Analysis', 'Strategic Reports', 'Custom Analytics'],
    color: '#FF00FF'
  }
];

const ServicesSection = () => {
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
      id="services" 
      className="relative py-16 md:py-24 lg:py-32 overflow-hidden"
      style={{ backgroundColor: '#0A0A0A' }}
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#00FF88]/5 to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
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
            Our Services
          </motion.span>
          <motion.h2 
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-4 mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            Our Productized <span className="gradient-text">Solutions</span>
          </motion.h2>
          <motion.p 
            className="text-lg text-[#A1A1A1] max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            Choose the growth package that matches your project's current stage. 
            Each solution is powered by our proprietary technology stack.
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                variants={cardVariants}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                className="group"
              >
                <div className="relative h-full p-6 sm:p-7 md:p-8 rounded-2xl border border-[#27272A] 
                              bg-gradient-to-b from-[#141414]/50 to-[#0A0A0A]/50 
                              backdrop-blur-sm overflow-hidden flex flex-col
                              hover:border-[#00FF88]/50 transition-all duration-500">
                  
                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent 
                                via-[#00FF88]/0 to-[#00FF88]/0 
                                group-hover:via-[#00FF88]/10 group-hover:to-[#00FF88]/5 
                                transition-all duration-500" />
                  
                  {/* Icon */}
                  <div className="relative mb-6">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#00FF88]/20 to-[#00AAFF]/20 
                                  flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-7 h-7" style={{ color: service.color }} />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
                  <p className="text-[#00FF88] text-sm font-mono mb-4">{service.subtitle}</p>
                  <p className="text-[#A1A1A1] mb-6 leading-relaxed">{service.description}</p>

                  {/* Features */}
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-[#EAEAEA]">
                        <Zap className="w-4 h-4 mr-2 text-[#00FF88]" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <a 
                    href="https://linktr.ee/alienetwork"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => {
                      trackEvent.serviceInterest(service.title, 'learn_more_click');
                      trackEvent.outboundLink('https://linktr.ee/alienetwork', service.title);
                    }}
                    className="mt-auto block w-full min-h-[48px] py-3 md:py-3.5 rounded-lg border border-[#00FF88]/50 
                             text-[#00FF88] text-base font-semibold text-center
                             hover:bg-[#00FF88] hover:text-black 
                             transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00FF88]/60">
                    Learn More
                  </a>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <p className="text-[#A1A1A1] mb-6">
            Not sure which package is right for you?
          </p>
          <a 
            href="https://linktr.ee/alienetwork"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-[#00FF88] text-black font-bold rounded-lg 
                     hover:bg-opacity-90 hover:scale-105 transition-all duration-300 
                     shadow-lg shadow-[#00FF88]/20 hover:shadow-[#00FF88]/40">
            Schedule a Strategy Call
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;

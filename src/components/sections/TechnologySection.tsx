"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, BarChart, Sparkles } from 'lucide-react';

const TechnologySection = () => {
  const items = [
    {
      icon: Sparkles,
      title: 'The Phoenix Engine',
      desc: 'Our autonomous intelligence engine scans the market for alpha signals 24/7.'
    },
    {
      icon: Cpu,
      title: 'S.A.G.A. Analysis',
      desc: 'Our Strategic Analysis Gem scores projects against hundreds of data points to identify true potential.'
    },
    {
      icon: BarChart,
      title: 'X-Analyzer',
      desc: 'Our data-driven framework for selecting high-ROI KOLs and influencers, eliminating wasted marketing spend.'
    }
  ];

  return (
    <section id="technology" className="relative py-16 md:py-24 lg:py-28" style={{ backgroundColor: '#0A0A0A' }}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold">Our Proprietary <span className="gradient-text">Technology Stack</span></h2>
          <p className="text-[#A1A1A1] mt-4 max-w-2xl mx-auto">This section is a simple placeholder and will be replaced by an animated Bento Grid in the next step.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                className="p-6 rounded-2xl border border-[#27272A] bg-[#141414]/50 backdrop-blur-sm hover:-translate-y-1 hover:border-[#00FF88]/60 transition-all duration-300">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#00FF88]/20 to-[#00AAFF]/20 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-[#A1A1A1]">{item.desc}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default TechnologySection;


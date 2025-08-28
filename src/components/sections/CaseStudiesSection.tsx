'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const caseStudies = [
  {
    project: 'Polymarket',
    metric: '$1.1B Monthly Volume',
    description: 'Supported the launch and growth of the leading decentralized prediction platform, achieving 40% growth in Q2 2025.',
    tags: ['Launch Support', 'Community Growth', 'Platform Adoption'],
    color: 'tiffany-blue',
    glowColor: 'rgba(10, 186, 181, 0.1)'
  },
  {
    project: 'ITALIANOBRAIN',
    metric: '$611K Market Cap',
    description: 'Provided comprehensive support for this Solana-based token, including listing advisory, community building, and organic content strategies.',
    tags: ['Token Listing', 'Community Building', 'Content Strategy'],
    color: 'signal-gold',
    glowColor: 'rgba(255, 182, 0, 0.1)'
  },
  {
    project: 'OORT',
    metric: '+30x Token Growth on TGE',
    description: 'Achieved unprecedented growth through strategic KOL partnerships and data-driven campaigns across multiple regions.',
    tags: ['KOL Campaign', 'Token Launch', 'Community Building'],
    color: 'service-pink',
    glowColor: 'rgba(194, 30, 86, 0.1)'
  },
  {
    project: 'Polygon',
    metric: '1M+ New Users in 90 Days',
    description: 'Orchestrated a multi-channel growth strategy that expanded the ecosystem and attracted high-value developers.',
    tags: ['Ecosystem Growth', 'Developer Relations', 'Strategic Partnerships'],
    color: 'service-purple',
    glowColor: 'rgba(157, 78, 221, 0.1)'
  }
]

export default function CaseStudiesSection() {
  return (
    <section id="case-studies" className="py-32">
      <div className="container mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-satoshi font-black text-quantum-white mb-6">
            Proven Results
          </h2>
          <p className="text-xl text-neutral-gray max-w-3xl mx-auto">
            We don&apos;t just promise growth - we deliver it. See how we&apos;ve transformed ambitious projects into market leaders.
          </p>
        </motion.div>

        <div className="space-y-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative overflow-hidden"
            >
              <div className={`relative p-8 lg:p-12 rounded-2xl bg-void-black border border-neutral-gray/20 hover:border-${study.color}/50 transition-all duration-300`}>
                {/* Glow effect on hover */}
                <div 
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300"
                  style={{ backgroundColor: study.glowColor }}
                />
                
                <div className="relative grid lg:grid-cols-2 gap-8 items-center">
                  {/* Left side - Project info */}
                  <div>
                    <h3 className="text-3xl lg:text-4xl font-satoshi font-black text-quantum-white mb-4">
                      {study.project}
                    </h3>
                    <p className={`text-4xl lg:text-5xl font-satoshi font-black text-${study.color} mb-6`}>
                      {study.metric}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {study.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-3 py-1 text-sm font-inter text-neutral-gray border border-neutral-gray/30 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Right side - Description */}
                  <div>
                    <p className="text-lg text-neutral-gray mb-6 leading-relaxed">
                      {study.description}
                    </p>
                    <motion.a
                      href="#"
                      className={`inline-flex items-center gap-2 text-${study.color} font-semibold group/link`}
                      whileHover={{ x: 5 }}
                    >
                      Read Case Study
                      <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                    </motion.a>
                  </div>
                </div>

                {/* Background decoration */}
                <div 
                  className="absolute top-0 right-0 w-64 h-64 rounded-full blur-3xl transition-colors duration-500"
                  style={{ 
                    backgroundColor: study.glowColor.replace('0.1', '0.05'),
                    '--hover-bg': study.glowColor.replace('0.1', '0.1')
                  } as React.CSSProperties}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

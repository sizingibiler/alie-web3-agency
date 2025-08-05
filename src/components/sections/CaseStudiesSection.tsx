'use client'

import { motion } from 'framer-motion'

const caseStudies = [
  {
    title: 'DeFi Protocol Launch',
    description: 'Helped a DeFi protocol achieve 10x user growth in 3 months through strategic KOL partnerships.',
    metrics: ['10x User Growth', '$50M TVL', '500K+ Community']
  },
  {
    title: 'NFT Marketplace Success',
    description: 'Orchestrated a successful NFT marketplace launch with celebrity endorsements and viral campaigns.',
    metrics: ['$25M Volume', '100K+ Users', '50+ Partnerships']
  },
  {
    title: 'Layer 2 Adoption',
    description: 'Drove mainstream adoption for a Layer 2 solution through targeted developer and user acquisition.',
    metrics: ['1M+ Transactions', '200+ dApps', '5x Network Growth']
  }
]

export default function CaseStudiesSection() {
  return (
    <section id="case-studies" className="py-20">
      <div className="container mx-auto px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-satoshi font-black text-center text-quantum-white mb-16"
        >
          Success Stories
        </motion.h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="glass-effect p-8 rounded-lg"
            >
              <h3 className="text-2xl font-satoshi font-bold text-quantum-white mb-4">
                {study.title}
              </h3>
              <p className="text-neutral-gray mb-6">
                {study.description}
              </p>
              <div className="space-y-2">
                {study.metrics.map((metric, idx) => (
                  <div key={idx} className="text-signal-gold font-semibold">
                    {metric}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

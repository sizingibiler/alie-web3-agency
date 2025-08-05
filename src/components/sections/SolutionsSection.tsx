'use client'

import { motion } from 'framer-motion'

const solutions = [
  {
    title: 'Data-Driven KOL Campaigns',
    description: 'Leverage analytics to identify and engage the most effective Key Opinion Leaders for your project.',
    features: ['Audience Analysis', 'Performance Tracking', 'ROI Optimization']
  },
  {
    title: 'Angel Investor Matchmaking',
    description: 'Connect with the right investors who align with your vision and growth trajectory.',
    features: ['Investor Profiling', 'Pitch Optimization', 'Deal Structuring']
  },
  {
    title: 'Exchange Listing Support',
    description: 'Navigate the complex process of getting listed on major cryptocurrency exchanges.',
    features: ['Compliance Guidance', 'Documentation', 'Relationship Management']
  }
]

export default function SolutionsSection() {
  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-satoshi font-black text-center text-quantum-white mb-16"
        >
          Our Solutions
        </motion.h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="glass-effect p-8 rounded-lg"
            >
              <h3 className="text-2xl font-satoshi font-bold text-quantum-white mb-4">
                {solution.title}
              </h3>
              <p className="text-neutral-gray mb-6">
                {solution.description}
              </p>
              <ul className="space-y-2">
                {solution.features.map((feature, idx) => (
                  <li key={idx} className="text-signal-gold">
                    • {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

'use client'

import { motion } from 'framer-motion'

const partners = [
  'Binance',
  'Coinbase',
  'Polygon',
  'Arbitrum',
  'Optimism',
  'Avalanche',
  'Chainlink',
  'The Graph',
  // Duplicated for infinite scroll effect
  'Binance',
  'Coinbase',
  'Polygon',
  'Arbitrum',
  'Optimism',
  'Avalanche',
  'Chainlink',
  'The Graph'
]

export default function PartnersSection() {
  return (
    <section className="py-20 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-2xl md:text-3xl font-satoshi font-bold text-center text-quantum-white mb-12"
        >
          Trusted By The Industry&apos;s Best
        </motion.h2>
      </div>

      {/* Infinite scroll container */}
      <div className="relative">
        <div className="flex space-x-16">
          <motion.div
            animate={{ x: '-100%' }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: 'loop',
                duration: 25,
                ease: 'linear'
              }
            }}
            className="flex space-x-16 whitespace-nowrap"
          >
            {partners.map((partner, index) => (
              <div
                key={index}
                className="flex items-center justify-center"
              >
                <span className="text-2xl font-satoshi font-bold text-neutral-gray/60 hover:text-quantum-white transition-colors duration-300 cursor-pointer">
                  {partner}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

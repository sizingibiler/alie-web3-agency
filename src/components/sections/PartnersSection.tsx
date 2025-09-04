'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const partners = [
  { name: 'Binance', logo: '/icon/binance-Photoroom.png' },
  { name: 'Coinbase', logo: '/icon/coinbase-Photoroom (1).png' },
  { name: 'Polygon', logo: '/icon/polygon-Photoroom.png' },
  { name: 'Arbitrum', logo: '/icon/arbitrum-Photoroom.png' },
  { name: 'Optimism', logo: '/icon/Optimism-Photoroom.png' },
  { name: 'Avalanche', logo: '/icon/avalanchle-Photoroom.png' },
  { name: 'Chainlink', logo: '/icon/chainlink-Photoroom.png' },
  { name: 'The Graph', logo: '/icon/the graph-Photoroom.png' },
  // Duplicated for infinite scroll effect
  { name: 'Binance', logo: '/icon/binance-Photoroom.png' },
  { name: 'Coinbase', logo: '/icon/coinbase-Photoroom (1).png' },
  { name: 'Polygon', logo: '/icon/polygon-Photoroom.png' },
  { name: 'Arbitrum', logo: '/icon/arbitrum-Photoroom.png' },
  { name: 'Optimism', logo: '/icon/Optimism-Photoroom.png' },
  { name: 'Avalanche', logo: '/icon/avalanchle-Photoroom.png' },
  { name: 'Chainlink', logo: '/icon/chainlink-Photoroom.png' },
  { name: 'The Graph', logo: '/icon/the graph-Photoroom.png' }
]

export default function PartnersSection() {
  return (
    <section className="py-12 md:py-16 lg:py-20 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-xl sm:text-2xl md:text-3xl font-satoshi font-bold text-center text-white mb-8 md:mb-12"
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
                className="flex items-center justify-center min-w-[120px]"
              >
                <Image
                  src={partner.logo}
                  alt={`${partner.name} logo`}
                  width={120}
                  height={48}
                  className="h-12 w-auto object-contain filter grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-pointer"
                  priority={index < 8} // Preload first set of images
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

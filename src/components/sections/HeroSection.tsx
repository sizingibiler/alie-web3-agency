'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import VideoBackground from '../ui/VideoBackground'

export default function HeroSection() {
  const words = ['Web3', 'Growth,', 'Delivered.']
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  }

  const wordVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99] as const
      }
    }
  }

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Video Background */}
      <VideoBackground />
      
      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center pt-20 sm:pt-0">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-2xl"
        >
          {/* Main Heading */}
          <motion.h1 className="font-satoshi font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl tracking-tight leading-tight">
            {words.map((word, index) => (
              <motion.span
                key={index}
                variants={wordVariants}
                className={cn(
                  'inline-block mr-4',
                  word === 'Delivered.' ? 'text-tiffany-blue' : 'text-quantum-white'
                )}
              >
                {word}
                {index === 1 && <br />}
              </motion.span>
            ))}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={wordVariants}
            className="mt-6 text-lg sm:text-xl text-neutral-gray max-w-2xl font-inter leading-relaxed"
          >
            From data-driven KOL campaigns to angel investor matchmaking, we architect success for the most ambitious projects in Web3.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={wordVariants}
            className="mt-8 sm:mt-12 flex flex-col sm:flex-row gap-4"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <a
                href="https://linktr.ee/alienetwork"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block w-full sm:w-auto text-center px-6 sm:px-8 py-3 sm:py-4 bg-tiffany-blue text-void-black font-semibold rounded-full hover:glow transition-all duration-200"
              >
                Book a Call
              </a>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="#services"
                className="inline-block w-full sm:w-auto text-center px-6 sm:px-8 py-3 sm:py-4 border border-neutral-gray text-quantum-white font-semibold rounded-full hover:bg-neutral-gray/10 transition-all duration-200"
              >
                Explore Services
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
        
        {/* Video space - handled by VideoBackground */}
        <div className="hidden lg:block"></div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-neutral-gray rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-3 bg-tiffany-blue rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}

function cn(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

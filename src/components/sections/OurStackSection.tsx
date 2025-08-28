'use client'

import { motion } from 'framer-motion'
import { 
  BarChart3, 
  Users, 
  TrendingUp, 
  Handshake, 
  Megaphone, 
  Link2 
} from 'lucide-react'

const services = [
  {
    icon: BarChart3,
    title: 'Data-Driven KOL Campaigns',
    description: 'Leverage advanced analytics to identify and engage the most impactful Key Opinion Leaders for your project.',
    color: 'tiffany-blue', // Turkuaz - Data ve analitik için
    glowColor: 'rgba(10, 186, 181, 0.1)'
  },
  {
    icon: Users,
    title: 'Bespoke KOL Campaigns',
    description: 'Custom-tailored influencer strategies that align perfectly with your brand voice and target audience.',
    color: 'signal-gold', // Altın - Premium hizmet için
    glowColor: 'rgba(255, 182, 0, 0.1)'
  },
  {
    icon: TrendingUp,
    title: 'Exchange Listing Support',
    description: 'Navigate the complex world of CEX and DEX listings with our proven framework and relationships.',
    color: 'data-blue', // Mavi - Exchange ve büyüme için
    glowColor: 'rgba(0, 158, 255, 0.1)'
  },
  {
    icon: Handshake,
    title: 'Angel Investor Matchmaking',
    description: 'Connect with the right investors who understand your vision and can accelerate your growth.',
    color: 'service-pink', // Pembe - Yatırım ve ortaklık için
    glowColor: 'rgba(194, 30, 86, 0.1)'
  },
  {
    icon: Megaphone,
    title: 'High-Impact Ad Campaigns',
    description: 'Cut through the noise with precision-targeted advertising across Web3-native platforms.',
    color: 'service-orange', // Turuncu - Reklam ve pazarlama için
    glowColor: 'rgba(255, 107, 53, 0.1)'
  },
  {
    icon: Link2,
    title: 'Strategic Partnerships',
    description: 'Forge meaningful collaborations that expand your ecosystem and multiply your reach.',
    color: 'service-purple', // Mor - Stratejik ortaklıklar için
    glowColor: 'rgba(157, 78, 221, 0.1)'
  }
]

export default function OurStackSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
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
    <section id="services" className="py-32">
      <div className="container mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-satoshi font-black text-quantum-white mb-6">
            Our Stack for True Web3 Growth
          </h2>
          <p className="text-xl text-neutral-gray max-w-3xl mx-auto">
            A comprehensive suite of services designed to accelerate your project from concept to market leader
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className={`group relative p-8 rounded-2xl bg-void-black border border-neutral-gray/20 hover:border-${service.color}/50 transition-all duration-300`}
            >
              {/* Glow effect on hover */}
              <div 
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300"
                style={{ backgroundColor: service.glowColor }}
              />
              
              <div className="relative">
                {/* Icon */}
                <div 
                  className={`mb-6 inline-flex p-3 rounded-xl text-${service.color} group-hover:bg-opacity-20 transition-colors duration-300`}
                  style={{ 
                    backgroundColor: service.glowColor,
                    '--hover-bg': service.glowColor.replace('0.1', '0.2')
                  } as React.CSSProperties}
                >
                  <service.icon className="w-6 h-6" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-satoshi font-bold text-quantum-white mb-3">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-neutral-gray leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

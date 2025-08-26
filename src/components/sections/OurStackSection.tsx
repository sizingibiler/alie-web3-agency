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
    description: 'Leverage advanced analytics to identify and engage the most impactful Key Opinion Leaders for your project.'
  },
  {
    icon: Users,
    title: 'Bespoke KOL Campaigns',
    description: 'Custom-tailored influencer strategies that align perfectly with your brand voice and target audience.'
  },
  {
    icon: TrendingUp,
    title: 'Exchange Listing Support',
    description: 'Navigate the complex world of CEX and DEX listings with our proven framework and relationships.'
  },
  {
    icon: Handshake,
    title: 'Angel Investor Matchmaking',
    description: 'Connect with the right investors who understand your vision and can accelerate your growth.'
  },
  {
    icon: Megaphone,
    title: 'High-Impact Ad Campaigns',
    description: 'Cut through the noise with precision-targeted advertising across Web3-native platforms.'
  },
  {
    icon: Link2,
    title: 'Strategic Partnerships',
    description: 'Forge meaningful collaborations that expand your ecosystem and multiply your reach.'
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
              className="group relative p-8 rounded-2xl bg-void-black border border-neutral-gray/20 hover:border-signal-gold/50 transition-all duration-300"
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 rounded-2xl bg-signal-gold/10 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300" />
              
              <div className="relative">
                {/* Icon */}
                <div className="mb-6 inline-flex p-3 rounded-xl bg-signal-gold/10 text-signal-gold group-hover:bg-signal-gold/20 transition-colors duration-300">
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

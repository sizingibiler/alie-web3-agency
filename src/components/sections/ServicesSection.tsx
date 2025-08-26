'use client'

import { motion } from 'framer-motion'
import { 
  Users, 
  DollarSign, 
  MessageCircle,
  Activity
} from 'lucide-react'

const services = [
  {
    title: 'LISTING SERVICES',
    icon: Activity,
    iconBg: 'bg-gradient-to-br from-orange-500 to-amber-500',
    borderColor: 'border-orange-500/20 hover:border-orange-500/40',
    items: [
      {
        name: 'DEX Listing',
        highlight: true,
        description: 'Fast-track your token to decentralized exchanges with our proven framework and relationships.'
      },
      {
        name: 'CEX Listing',
        highlight: true,
        description: 'Navigate the complex world of centralized exchange listings with expert guidance and connections.'
      }
    ]
  },
  {
    title: 'KOL (INFLUENCER) SERVICE',
    icon: Users,
    iconBg: 'bg-gradient-to-br from-blue-500 to-cyan-500',
    borderColor: 'border-blue-500/20 hover:border-blue-500/40',
    items: [
      {
        name: 'X (Twitter) KOLs',
        highlight: true,
        description: 'Connect with specialized KOLs: DeFi focused, AI focused, RWA focused, Solana/Memecoin focused.'
      },
      {
        name: 'Streamers',
        highlight: true,
        description: 'Engage with top crypto streamers to showcase your project to live audiences.'
      },
      {
        name: 'Telegram KOLs & Channels',
        highlight: true,
        description: 'Leverage influential Telegram channels and thought leaders for maximum reach.'
      }
    ]
  },
  {
    title: 'ANGEL INVESTOR SERVICE',
    icon: DollarSign,
    iconBg: 'bg-gradient-to-br from-purple-500 to-pink-500',
    borderColor: 'border-purple-500/20 hover:border-purple-500/40',
    items: [
      {
        name: 'Investor Matchmaking',
        highlight: true,
        description: 'Connect with strategic angel investors who understand and can accelerate your vision.'
      },
      {
        name: 'Pitch Optimization',
        highlight: true,
        description: 'Craft compelling narratives that resonate with Web3 investors.'
      }
    ]
  },
  {
    title: 'TELEGRAM RAIDERS SERVICE',
    icon: MessageCircle,
    iconBg: 'bg-gradient-to-br from-green-500 to-teal-500',
    borderColor: 'border-green-500/20 hover:border-green-500/40',
    items: [
      {
        name: 'Community Raids',
        highlight: true,
        description: 'Coordinate strategic Telegram raids to boost visibility and engagement.'
      },
      {
        name: 'Organic Growth',
        highlight: true,
        description: 'Build authentic community presence through targeted raiding campaigns.'
      }
    ]
  }
]

export default function ServicesSection() {
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
        ease: "easeOut" as const
      }
    }
  }

  return (
    <section id="services" className="py-32 relative overflow-hidden bg-gradient-to-b from-void-black via-void-black/95 to-void-black">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, #FFB600 0%, transparent 50%),
                            radial-gradient(circle at 75% 75%, #009EFF 0%, transparent 50%)`
        }} />
      </div>
      
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.h2 
            className="text-5xl md:text-6xl lg:text-7xl font-satoshi font-black text-quantum-white mb-6 tracking-tight"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            SERVICES OF <span className="text-signal-gold">ALIE NETWORK</span>
          </motion.h2>
          <p className="text-xl text-neutral-gray/80 max-w-3xl mx-auto leading-relaxed">
            Comprehensive Web3 growth solutions tailored to elevate your project to the next level
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="group relative"
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-signal-gold/20 via-transparent to-transparent rounded-3xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />
              
              <div className={`relative p-8 rounded-3xl border ${service.borderColor} bg-gradient-to-br from-void-black/90 via-void-black/80 to-neutral-gray/5 backdrop-blur-xl transition-all duration-300 overflow-hidden`}>
                {/* Background Pattern */}
                <div className="absolute top-0 right-0 w-48 h-48 opacity-5">
                  <div className="absolute inset-0 rotate-45 transform" style={{
                    background: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,182,0,0.1) 10px, rgba(255,182,0,0.1) 20px)'
                  }} />
                </div>
                
                {/* Service Header */}
                <div className="flex items-center gap-4 mb-8">
                  <div className={`p-4 rounded-2xl ${service.iconBg} shadow-lg`}>
                    <service.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-satoshi font-black text-quantum-white uppercase tracking-wide">
                    {service.title}
                  </h3>
                </div>

                {/* Service Items */}
                <div className="space-y-5">
                  {service.items.map((item, itemIndex) => (
                    <motion.div 
                      key={itemIndex} 
                      className="group/item relative pl-4 border-l-2 border-neutral-gray/20 hover:border-signal-gold/50 transition-all duration-300"
                      whileHover={{ x: 5 }}
                    >
                      <h4 className="text-lg font-bold text-signal-gold mb-2 flex items-center gap-2">
                        {item.highlight && (
                          <span className="inline-block w-2 h-2 bg-signal-gold rounded-full animate-pulse" />
                        )}
                        {item.name}
                      </h4>
                      <p className="text-neutral-gray/90 leading-relaxed text-sm">
                        {item.description}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-20"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative inline-block group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-signal-gold to-orange-500 rounded-full blur-lg opacity-75 group-hover:opacity-100 transition-opacity duration-300" />
            <a
              href="https://linktr.ee/alienetwork"
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-block px-10 py-5 bg-gradient-to-r from-signal-gold to-orange-500 text-void-black font-bold text-lg rounded-full hover:shadow-2xl transition-all duration-300 uppercase tracking-wide"
            >
              Explore Our Services
            </a>
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

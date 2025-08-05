'use client'

import { motion } from 'framer-motion'

const team = [
  {
    name: 'Alex Chen',
    role: 'Founder & CEO',
    bio: 'Former Goldman Sachs, 10+ years in Web3 growth strategies.'
  },
  {
    name: 'Sarah Kim',
    role: 'Head of Partnerships',
    bio: 'Ex-Binance, expert in KOL networks and influencer marketing.'
  },
  {
    name: 'Marcus Rodriguez',
    role: 'Technical Director',
    bio: 'Blockchain architect with experience at Ethereum Foundation.'
  }
]

export default function TeamSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-satoshi font-black text-center text-quantum-white mb-16"
        >
          Meet Our Team
        </motion.h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="glass-effect p-8 rounded-lg text-center"
            >
              <div className="w-24 h-24 bg-gradient-to-br from-signal-gold to-data-blue rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-satoshi font-bold text-quantum-white mb-2">
                {member.name}
              </h3>
              <p className="text-signal-gold font-semibold mb-4">
                {member.role}
              </p>
              <p className="text-neutral-gray">
                {member.bio}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

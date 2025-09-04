'use client'

import { motion } from 'framer-motion'
import { Send } from 'lucide-react'

const teamMembers = [
  {
    name: 'Hamza Aktan',
    title: 'Founder',
    image: '/images/team/hamza-aktan.jpg',
    linkedin: 'https://www.linkedin.com/in/hamza-aktan-0274a8378/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
    telegram: 'https://t.me/D0v1D0f'
  },
  {
    name: 'Berkay Kaya',
    title: 'Founder',
    image: '/images/team/berkay-kaya.jpg',
    linkedin: 'https://www.linkedin.com/in/berkay-kaya-525511378',
    telegram: 'https://t.me/alieweb3'
  },
  {
    name: 'Ziya Eyüboğlu',
    title: 'Founder',
    image: '/images/team/ziya-eyuboglu.jpg',
    linkedin: 'https://www.linkedin.com/in/ziya-ey%C3%BCbo%C4%9Flu-1a0baa235?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    telegram: 'https://t.me/ziyaeyuboglu'
  }
]

export default function TeamSection() {
  return (
    <section id="team" className="py-16 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-satoshi font-black text-white mb-4 md:mb-6">
            Meet the Team
          </h2>

        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              className="group flex flex-col items-center bg-[#141414]/50 p-6 rounded-lg border border-[#27272A] hover:border-[#00FF88]/50 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <motion.div className="relative w-32 h-32 md:w-36 md:h-36 mb-4 overflow-hidden rounded-full border-4 border-[#00FF88]">
                <motion.img
                  src={member.image}
                  alt={member.name}
                  className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-300"
                />
              </motion.div>
              <h3 className="text-lg md:text-xl font-satoshi font-bold text-white mb-2">
                {member.name}
              </h3>
              <p className="text-[#A1A1A1] mb-4 text-sm md:text-base">
                {member.title}
              </p>
              <div className="flex gap-4">
                {member.linkedin && (
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#00AAFF]/70 hover:text-[#00AAFF] transition-colors duration-200"
                  >
                    LinkedIn
                  </a>
                )}
                {member.telegram && (
                  <a
                    href={member.telegram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-[#00AAFF]/70 hover:text-[#00AAFF] transition-colors duration-200"
                  >
                    <Send className="w-4 h-4" />
                    Telegram
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

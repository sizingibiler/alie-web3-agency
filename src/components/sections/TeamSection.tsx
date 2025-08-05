'use client'

import { motion } from 'framer-motion'

const teamMembers = [
  {
    name: 'Hamza Aktan',
    title: 'Founder',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
    linkedin: 'https://www.linkedin.com/in/hamza-aktan-0274a8378/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app'
  },
  {
    name: 'Berkay Kaya',
    title: 'Founder',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
    linkedin: 'https://www.linkedin.com/in/berkay-kaya-525511378'
  },
  {
    name: 'Ziya Eyüboğlu',
    title: 'Founder',
    image: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?w=400&h=400&fit=crop&crop=face',
    linkedin: 'https://www.linkedin.com/in/ziya-ey%C3%BCbo%C4%9Flu-1a0baa235?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
  }
]

export default function TeamSection() {
  return (
    <section className="py-32">
      <div className="container mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-satoshi font-black text-quantum-white mb-6">
            Meet the Team
          </h2>
          <p className="text-xl text-neutral-gray max-w-3xl mx-auto">
            Our talented team of professionals is dedicated to driving success and innovation
          </p>
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
              className="group flex flex-col items-center bg-void-black p-6 rounded-lg border border-neutral-gray/20 hover:border-signal-gold/50 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <motion.div className="relative w-36 h-36 mb-4 overflow-hidden rounded-full border-4 border-signal-gold">
                <motion.img
                  src={member.image}
                  alt={member.name}
                  className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-300"
                />
              </motion.div>
              <h3 className="text-xl font-satoshi font-bold text-quantum-white mb-2">
                {member.name}
              </h3>
              <p className="text-neutral-gray mb-4">
                {member.title}
              </p>
              {member.linkedin ? (
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-signal-gold/70 hover:text-signal-gold transition-colors duration-200"
                >
                  LinkedIn
                </a>
              ) : (
                <span className="text-neutral-gray/50">
                  -
                </span>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

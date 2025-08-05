'use client'

import { motion } from 'framer-motion'

const stackItems = [
  { name: 'React', category: 'Frontend' },
  { name: 'Next.js', category: 'Framework' },
  { name: 'TypeScript', category: 'Language' },
  { name: 'Tailwind CSS', category: 'Styling' },
  { name: 'Three.js', category: '3D Graphics' },
  { name: 'Framer Motion', category: 'Animation' }
]

export default function OurStackSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-satoshi font-black text-center text-quantum-white mb-16"
        >
          Our Tech Stack
        </motion.h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {stackItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-effect p-6 rounded-lg text-center"
            >
              <h3 className="text-xl font-satoshi font-bold text-quantum-white mb-2">
                {item.name}
              </h3>
              <p className="text-neutral-gray">{item.category}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

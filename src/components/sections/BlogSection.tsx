'use client'

import { motion } from 'framer-motion'

const blogPosts = [
  {
    title: 'The Future of Web3 Marketing',
    excerpt: 'Exploring emerging trends and strategies in the evolving Web3 landscape.',
    date: 'Jan 15, 2025',
    readTime: '5 min read'
  },
  {
    title: 'KOL Campaign Best Practices',
    excerpt: 'How to identify, engage, and measure the success of Key Opinion Leader partnerships.',
    date: 'Jan 10, 2025',
    readTime: '7 min read'
  },
  {
    title: 'Navigating Exchange Listings',
    excerpt: 'A comprehensive guide to getting your token listed on major exchanges.',
    date: 'Jan 5, 2025',
    readTime: '10 min read'
  }
]

export default function BlogSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-satoshi font-black text-center text-quantum-white mb-16"
        >
          Latest Insights
        </motion.h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="glass-effect p-8 rounded-lg hover:border-signal-gold/50 transition-colors cursor-pointer"
            >
              <div className="flex justify-between items-center text-sm text-neutral-gray mb-4">
                <span>{post.date}</span>
                <span>{post.readTime}</span>
              </div>
              <h3 className="text-xl font-satoshi font-bold text-quantum-white mb-4">
                {post.title}
              </h3>
              <p className="text-neutral-gray">
                {post.excerpt}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

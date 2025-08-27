'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Calendar, Clock, ArrowUpRight } from 'lucide-react'

const blogPosts = [
  {
    title: 'The Future of Web3 Marketing: Data-Driven Strategies',
    excerpt: 'Discover how advanced analytics and AI are reshaping the way Web3 projects approach growth and community building.',
    date: 'Dec 15, 2024',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=400&fit=crop',
    category: 'Strategy'
  },
  {
    title: 'KOL Marketing in Asia: A Comprehensive Guide',
    excerpt: 'Learn the nuances of working with Key Opinion Leaders in different Asian markets and how to maximize your ROI.',
    date: 'Dec 10, 2024',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1622186477895-f2af6a0f5a97?w=800&h=400&fit=crop',
    category: 'Marketing'
  },
  {
    title: 'Token Launch Playbook: From Zero to Hero',
    excerpt: 'A step-by-step guide to launching your token successfully, avoiding common pitfalls, and achieving sustainable growth.',
    date: 'Dec 5, 2024',
    readTime: '10 min read',
    image: 'https://images.unsplash.com/photo-1640340434855-6084b1f4901c?w=800&h=400&fit=crop',
    category: 'Launch Strategy'
  }
]

export default function BlogSection() {
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
            Educate Yourself with Alie
          </h2>
          <p className="text-xl text-neutral-gray max-w-3xl mx-auto">
            Stay ahead of the curve with insights from our team of Web3 growth experts
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.1 }
            }
          }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch"
        >
          {blogPosts.map((post, index) => (
            <motion.article
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              whileHover={{ y: -8 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-2xl bg-void-black border border-neutral-gray/20 hover:border-tiffany-blue/50 transition-all duration-300 h-full flex flex-col">
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={800}
                    height={400}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-void-black/80 to-transparent" />
                  
                  {/* Category badge */}
                  <span className="absolute top-4 left-4 px-3 py-1 text-xs font-inter font-semibold text-void-black bg-tiffany-blue rounded-full">
                    {post.category}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-satoshi font-bold text-quantum-white mb-3 line-clamp-2 group-hover:text-tiffany-blue transition-colors">
                    {post.title}
                  </h3>
                  
                  <p className="text-neutral-gray mb-4 line-clamp-3 flex-1">
                    {post.excerpt}
                  </p>

                  {/* Meta info */}
                  <div className="flex items-center justify-between text-sm text-neutral-gray/70">
                    <div className="flex items-center gap-4">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {post.readTime}
                      </span>
                    </div>
                    
                    <motion.div
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                      whileHover={{ scale: 1.1 }}
                    >
                      <ArrowUpRight className="w-4 h-4 text-tiffany-blue" />
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

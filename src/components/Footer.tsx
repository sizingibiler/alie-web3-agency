'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Twitter, Send, Mail, Link as LinkIcon } from 'lucide-react'

const footerLinks = {
  services: [
    { label: 'DEX Listing Service', href: '#' },
    { label: 'CEX Listing Service', href: '#' },
    { label: 'X (Twitter) KOLs', href: '#' },
    { label: 'Telegram KOLs & Channels', href: '#' },
    { label: 'Angel Investor Service', href: '#' },
    { label: 'Telegram Raiders Service', href: '#' }
  ],
  company: [
    { label: 'About', href: '#' },
    { label: 'Team', href: '#' },
    { label: 'Careers', href: '#' },
    { label: 'Blog', href: '#' }
  ],
  legal: [
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' }
  ]
}

export default function Footer() {
  return (
    <footer id="contact" className="relative">
      {/* CTA Section */}
      <section className="py-20 border-t border-neutral-gray/20">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-5xl md:text-6xl font-satoshi font-black text-quantum-white mb-6">
              Ready to build?
            </h2>
            <p className="text-xl text-neutral-gray mb-8">
              Let&apos;s architect your Web3 success story together. 
              Book a call with our growth experts today.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <a
                href="https://linktr.ee/alienetwork"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-4 bg-tiffany-blue text-void-black font-semibold rounded-full hover:glow transition-all duration-200"
              >
                Book a Call
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Links Section */}
      <section className="py-16 border-t border-neutral-gray/20">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand Column */}
            <div className="space-y-4">
              <Link href="/" className="inline-block">
                <span className="font-satoshi font-black text-2xl text-quantum-white">
                  ALIE NETWORK
                </span>
              </Link>
              <p className="text-neutral-gray">
                Architecting Web3 success through data-driven growth strategies.
              </p>
              <div className="flex space-x-4">
                <motion.a
                  href="https://x.com/networkAlie"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  className="w-10 h-10 rounded-full bg-neutral-gray/10 flex items-center justify-center text-neutral-gray hover:bg-tiffany-blue hover:text-void-black transition-all duration-200"
                >
                  <Twitter className="w-5 h-5" />
                </motion.a>
                <motion.a
                  href="https://linktr.ee/alienetwork"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  className="w-10 h-10 rounded-full bg-neutral-gray/10 flex items-center justify-center text-neutral-gray hover:bg-tiffany-blue hover:text-void-black transition-all duration-200"
                >
                  <LinkIcon className="w-5 h-5" />
                </motion.a>
                <motion.a
                  href="https://t.me/alieweb3"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  className="w-10 h-10 rounded-full bg-neutral-gray/10 flex items-center justify-center text-neutral-gray hover:bg-tiffany-blue hover:text-void-black transition-all duration-200"
                >
                  <Send className="w-5 h-5" />
                </motion.a>
              </div>
            </div>

            {/* Services Column */}
            <div>
              <h3 className="font-satoshi font-bold text-quantum-white mb-4">
                Services
              </h3>
              <ul className="space-y-2">
                {footerLinks.services.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="text-neutral-gray hover:text-quantum-white transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Column */}
            <div>
              <h3 className="font-satoshi font-bold text-quantum-white mb-4">
                Company
              </h3>
              <ul className="space-y-2">
                {footerLinks.company.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="text-neutral-gray hover:text-quantum-white transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Column */}
            <div>
              <h3 className="font-satoshi font-bold text-quantum-white mb-4">
                Contact
              </h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="mailto:info@alie.network"
                    className="flex items-center gap-2 text-neutral-gray hover:text-quantum-white transition-colors duration-200"
                  >
                    <Mail className="w-4 h-4" />
                    info@alie.network
                  </a>
                </li>
                <li>
                  <a
                    href="https://t.me/alieweb3"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-neutral-gray hover:text-quantum-white transition-colors duration-200"
                  >
                    <Send className="w-4 h-4" />
                    @alieweb3
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Copyright Section */}
      <section className="py-6 border-t border-neutral-gray/20">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-neutral-gray text-sm">
              © 2025 Alie Network. All rights reserved.
            </p>
            <div className="flex space-x-6">
              {footerLinks.legal.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="text-neutral-gray text-sm hover:text-quantum-white transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </footer>
  )
}

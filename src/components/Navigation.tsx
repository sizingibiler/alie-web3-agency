'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils'

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '#services', label: 'Services' },
    { href: '#technology', label: 'Technology' },
    { href: '/whitepaper', label: 'Whitepaper' },
    { href: '#insights', label: 'Insights' },
    { href: '#team', label: 'Team' },
    { href: '#contact', label: 'Contact' }
  ]

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          isScrolled && 'glass-effect border-b border-neutral-gray/20'
        )}
      >
        <div className="container mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
{/* Logo */}
            <Link href="/" className="relative z-10">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="h-12 w-auto"
              >
                <Image 
                  src="/logo-new.png" 
                  alt="Alie Network" 
                  width={48}
                  height={48}
                  className="h-12 w-auto object-contain"
                />
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
{navLinks.map((link) => {
                const isExternal = link.href.startsWith('/');
                return isExternal ? (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="relative font-inter font-medium text-[#A1A1A1] hover:text-white transition-colors duration-200 group cursor-pointer"
                  >
                    {link.label}
                    <motion.span
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#00FF88] origin-center"
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.2 }}
                    />
                  </Link>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault()
                      const element = document.querySelector(link.href)
                      element?.scrollIntoView({ behavior: 'smooth' })
                    }}
                    className="relative font-inter font-medium text-[#A1A1A1] hover:text-white transition-colors duration-200 group cursor-pointer"
                  >
                    {link.label}
                    <motion.span
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#00FF88] origin-center"
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.2 }}
                    />
                  </Link>
                );
              })}
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="ml-8"
              >
                <a
                  href="https://linktr.ee/alienetwork"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-[#00FF88] text-black font-semibold rounded-full hover:bg-opacity-90 hover:scale-105 transition-all duration-300 shadow-lg shadow-[#00FF88]/20 hover:shadow-[#00FF88]/40"
                >
                  Get Started
                </a>
              </motion.div>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden relative z-10 w-10 h-10 flex flex-col items-center justify-center space-y-1.5"
            >
              <motion.span
                animate={{ rotate: isMenuOpen ? 45 : 0, y: isMenuOpen ? 6 : 0 }}
                className="w-6 h-0.5 bg-white block"
              />
              <motion.span
                animate={{ opacity: isMenuOpen ? 0 : 1 }}
                className="w-6 h-0.5 bg-white block"
              />
              <motion.span
                animate={{ rotate: isMenuOpen ? -45 : 0, y: isMenuOpen ? -6 : 0 }}
                className="w-6 h-0.5 bg-white block"
              />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="absolute right-0 top-0 bottom-0 w-full max-w-sm bg-void-black/95 backdrop-blur-lg border-l border-neutral-gray/20"
            >
              <div className="flex flex-col p-8 pt-24 space-y-6">
                {navLinks.map((link) => {
                  const isExternal = link.href.startsWith('/');
                  return isExternal ? (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsMenuOpen(false)}
                      className="text-2xl font-inter font-medium text-neutral-gray hover:text-quantum-white transition-colors cursor-pointer"
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault()
                        setIsMenuOpen(false)
                        const element = document.querySelector(link.href)
                        element?.scrollIntoView({ behavior: 'smooth' })
                      }}
                      className="text-2xl font-inter font-medium text-neutral-gray hover:text-quantum-white transition-colors cursor-pointer"
                    >
                      {link.label}
                    </Link>
                  );
                })}
                <a
                  href="https://linktr.ee/alienetwork"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsMenuOpen(false)}
                  className="inline-block px-6 py-3 bg-tiffany-blue text-void-black font-semibold rounded-full text-center mt-4"
                >
                  Get Started
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

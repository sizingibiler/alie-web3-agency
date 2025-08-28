'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

const nodes = [
  { id: 'center', label: 'Alie Growth Engine', x: 50, y: 50, size: 'large' },
  { id: 'token', label: 'Token Growth', x: 20, y: 20, size: 'medium' },
  { id: 'community', label: 'Community Gathering', x: 80, y: 20, size: 'medium' },
  { id: 'trader', label: 'Trader Attraction', x: 20, y: 80, size: 'medium' },
  { id: 'events', label: 'Web3 Events', x: 80, y: 80, size: 'medium' },
  { id: 'kols', label: 'KOLs Accelerator', x: 50, y: 15, size: 'medium' },
  { id: 'exchange', label: 'Exchange Penetration', x: 50, y: 85, size: 'medium' }
]

const connections = [
  { from: 'center', to: 'token' },
  { from: 'center', to: 'community' },
  { from: 'center', to: 'trader' },
  { from: 'center', to: 'events' },
  { from: 'center', to: 'kols' },
  { from: 'center', to: 'exchange' },
  { from: 'token', to: 'kols' },
  { from: 'community', to: 'events' },
  { from: 'trader', to: 'exchange' }
]

export default function SolutionsSection() {
  const [hoveredNode, setHoveredNode] = useState<string | null>(null)
  const [logoLoaded, setLogoLoaded] = useState<boolean>(true)

  // Preload logo for better performance
  useEffect(() => {
    const img = new Image()
    img.src = '/logo-192.png'
    img.onload = () => setLogoLoaded(true)
    img.onerror = () => {
      console.warn('Failed to preload Alie logo')
      setLogoLoaded(false)
    }
  }, [])

  return (
    <section className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-satoshi font-black text-quantum-white mb-6">
            The Alie Ecosystem
          </h2>

        </motion.div>

        {/* Network Diagram */}
        <div className="relative mx-auto max-w-4xl aspect-square">
          <svg
            className="w-full h-full"
            viewBox="0 0 100 100"
            preserveAspectRatio="xMidYMid meet"
            role="img"
            aria-labelledby="ecosystem-title ecosystem-desc"
          >
            <title id="ecosystem-title">Alie Ecosystem Diagram</title>
            <desc id="ecosystem-desc">Interactive diagram showing Alie Growth Engine at center with connected services including Token Growth, Community Gathering, and other Web3 services. The center features the Alie logo.</desc>
            {/* Logo Pattern Definition */}
            <defs>
              <pattern
                id="centerLogo"
                patternUnits="objectBoundingBox"
                width="1"
                height="1"
                patternContentUnits="objectBoundingBox"
              >
                <image
                  href="/logo-192.png"
                  x="0.1"
                  y="0.1"
                  width="0.8"
                  height="0.8"
                  preserveAspectRatio="xMidYMid meet"
                  onError={() => {
                    console.warn('Alie logo failed to load, falling back to solid color')
                    setLogoLoaded(false)
                  }}
                  onLoad={() => setLogoLoaded(true)}
                />
              </pattern>
            </defs>
            
            {/* Connections */}
            {connections.map((connection, index) => {
              const fromNode = nodes.find(n => n.id === connection.from)
              const toNode = nodes.find(n => n.id === connection.to)
              const isHighlighted = hoveredNode === connection.from || hoveredNode === connection.to

              return (
                <motion.line
                  key={index}
                  x1={fromNode?.x}
                  y1={fromNode?.y}
                  x2={toNode?.x}
                  y2={toNode?.y}
                  stroke={isHighlighted ? '#FFB600' : '#CCCCCC'}
                  strokeOpacity={isHighlighted ? 0.8 : 0.2}
                  strokeWidth={isHighlighted ? 2 : 1}
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1, delay: index * 0.1 }}
                />
              )
            })}

            {/* Nodes */}
            {nodes.map((node, index) => {
              const isCenter = node.id === 'center'
              const isHovered = hoveredNode === node.id
              const isConnected = hoveredNode && connections.some(
                c => (c.from === hoveredNode && c.to === node.id) || 
                    (c.to === hoveredNode && c.from === node.id)
              )

              return (
                <g
                  key={node.id}
                  onMouseEnter={() => setHoveredNode(node.id)}
                  onMouseLeave={() => setHoveredNode(null)}
                  className="cursor-pointer"
                  role={isCenter ? "img" : "button"}
                  aria-label={isCenter ? `${node.label} - Alie Logo at center of ecosystem` : node.label}
                  tabIndex={0}
                >
                  <motion.circle
                    cx={node.x}
                    cy={node.y}
                    r={isCenter ? 8 : 5}
                    fill={isCenter ? (logoLoaded ? 'url(#centerLogo)' : '#FFB600') : '#C21E56'}
                    stroke={isHovered || isConnected ? '#FFB600' : '#CCCCCC'}
                    strokeWidth={2}
                    initial={{ scale: 0 }}
                    animate={{ 
                      scale: isHovered ? 1.2 : 1,
                      opacity: hoveredNode && !isHovered && !isConnected ? 0.3 : 1
                    }}
                    transition={{ 
                      scale: { duration: 0.6, delay: index * 0.1 },
                      opacity: { duration: 0.2 }
                    }}
                    style={{
                      // Ensure pattern scales with animations
                      transformOrigin: 'center',
                      // Fallback for when pattern doesn't load
                      backgroundColor: isCenter ? '#FFB600' : undefined
                    }}
                  />
                  
                  {/* Glow effect */}
                  {(isHovered || isCenter) && (
                    <motion.circle
                      cx={node.x}
                      cy={node.y}
                      r={isCenter ? 12 : 8}
                      fill="none"
                      stroke={isCenter ? '#FFB600' : '#C21E56'}
                      strokeOpacity={0.3}
                      strokeWidth={1}
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1.5, opacity: 0 }}
                      transition={{ duration: 1, repeat: Infinity }}
                    />
                  )}

                  {/* Label */}
                  <motion.text
                    x={node.x}
                    y={node.y + (isCenter ? 15 : 12)}
                    textAnchor="middle"
                    className="fill-quantum-white text-[0.12rem] font-inter font-medium select-none"
                    initial={{ opacity: 0 }}
                    animate={{ 
                      opacity: hoveredNode && !isHovered && !isConnected ? 0.3 : 1
                    }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    {node.label}
                  </motion.text>
                </g>
              )
            })}
          </svg>
        </div>
      </div>
    </section>
  )
}

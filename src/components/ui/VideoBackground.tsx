'use client'

import { useEffect, useRef } from 'react'

export default function VideoBackground() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(console.error)
    }
  }, [])

  return (
    <div className="absolute inset-0 flex items-center justify-end pr-8 lg:pr-16">
      {/* Video Container - Right side */}
      <div className="relative">
        {/* Circular video container */}
        <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-white/30 shadow-2xl">
          <video
            ref={videoRef}
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
          >
            <source src="/aliedönen.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
      
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-l from-transparent via-void-black/30 to-void-black pointer-events-none" />
    </div>
  )
}

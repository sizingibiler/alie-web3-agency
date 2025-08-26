'use client'

import { Canvas } from '@react-three/fiber'
import { Float, Environment, Sparkles } from '@react-three/drei'
import { Suspense } from 'react'


function DataCube() {
  return (
    <Float
      speed={1.5}
      rotationIntensity={1}
      floatIntensity={2}
    >
      <mesh>
        <boxGeometry args={[2, 2, 2]} />
        <meshStandardMaterial
          color="#FFB600"
          emissive="#FFB600"
          emissiveIntensity={0.5}
          metalness={0.8}
          roughness={0.2}
          wireframe
        />
      </mesh>
      
      {/* Inner cube */}
      <mesh scale={0.8}>
        <boxGeometry args={[2, 2, 2]} />
        <meshStandardMaterial
          color="#009EFF"
          emissive="#009EFF"
          emissiveIntensity={0.3}
          metalness={0.9}
          roughness={0.1}
          transparent
          opacity={0.5}
        />
      </mesh>
    </Float>
  )
}

export default function Hero3DBackground() {
  return (
    <div className="absolute inset-0">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        gl={{ antialias: true, alpha: true }}
      >
        <Suspense fallback={null}>
          <Environment preset="city" />
          
          {/* Ambient light */}
          <ambientLight intensity={0.2} />
          
          {/* Point lights */}
          <pointLight position={[10, 10, 10]} intensity={1} color="#FFB600" />
          <pointLight position={[-10, -10, -10]} intensity={0.5} color="#009EFF" />
          
          {/* Main object */}
          <DataCube />
          
          {/* Particles */}
          <Sparkles
            count={50}
            scale={10}
            size={2}
            speed={0.5}
            color="#FFB600"
          />
        </Suspense>
      </Canvas>
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-void-black/50 to-void-black pointer-events-none" />
    </div>
  )
}

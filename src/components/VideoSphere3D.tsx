"use client";

import React, { useRef, Suspense, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";
// @ts-ignore
import * as random from "maath/random/dist/maath-random.esm";

// Video texture component
function VideoMaterial({ url }: { url: string }) {
  const video = useMemo(() => {
    const vid = document.createElement("video");
    vid.src = url;
    vid.crossOrigin = "anonymous";
    vid.loop = true;
    vid.muted = true;
    vid.playsInline = true;
    vid.autoplay = true;
    vid.play().catch(e => console.log('Video play error:', e));
    return vid;
  }, [url]);

  return (
    <meshBasicMaterial side={THREE.DoubleSide}>
      <videoTexture attach="map" args={[video]} />
    </meshBasicMaterial>
  );
}

// Rotating rings around the sphere
function RotatingRings() {
  const ringRef1 = useRef<THREE.Mesh>(null);
  const ringRef2 = useRef<THREE.Mesh>(null);
  const ringRef3 = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (ringRef1.current) ringRef1.current.rotation.z += delta * 0.3;
    if (ringRef2.current) ringRef2.current.rotation.y += delta * 0.2;
    if (ringRef3.current) ringRef3.current.rotation.x += delta * 0.25;
  });

  // Slightly reduced radii to ensure better fit
  return (
    <>
      <mesh ref={ringRef1} rotation={[0, 0, 0]}>
        <torusGeometry args={[1.2, 0.012, 16, 100]} />
        <meshBasicMaterial color="#00FF88" opacity={0.6} transparent />
      </mesh>
      <mesh ref={ringRef2} rotation={[Math.PI / 3, 0, 0]}>
        <torusGeometry args={[1.15, 0.012, 16, 100]} />
        <meshBasicMaterial color="#00AAFF" opacity={0.5} transparent />
      </mesh>
      <mesh ref={ringRef3} rotation={[Math.PI / 6, Math.PI / 4, 0]}>
        <torusGeometry args={[1.3, 0.012, 16, 100]} />
        <meshBasicMaterial color="#FF00FF" opacity={0.4} transparent />
      </mesh>
    </>
  );
}

// Floating particles around the sphere
function ParticleField() {
  const ref = useRef<any>(null);
  const [sphere] = useMemo(() => {
    const positions = new Float32Array(1000 * 3);
    for (let i = 0; i < 1000; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.random() * Math.PI;
      const r = 3 + Math.random() * 2;
      
      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = r * Math.cos(phi);
    }
    return [positions];
  }, []);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x += delta * 0.05;
      ref.current.rotation.y += delta * 0.075;
    }
  });

  return (
    <Points ref={ref} positions={sphere} stride={3} frustumCulled>
      <PointMaterial
        transparent
        color="#00FF88"
        size={0.02}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.8}
      />
    </Points>
  );
}

// Main 3D sphere component
function VideoSphereContent() {
  const sphereRef = useRef<THREE.Mesh>(null);
  const { viewport } = useThree();

  // Compute a scale so the outermost ring fits within the current viewport
  // Outer radius ~1.3; we keep a margin (fit factor) to avoid touching edges
  const maxRadius = 1.3; // must match largest torus radius
  const fitFactor = 0.85; // add more margin on mobile to avoid touching edges
  const scale = Math.min(viewport.width, viewport.height) / (maxRadius * 2) * fitFactor;

  useFrame((state, delta) => {
    if (sphereRef.current) {
      sphereRef.current.rotation.y += delta * 0.15;
    }
  });

  return (
    <>
      {/* Lighting */}
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <pointLight position={[0, 0, 5]} color="#00FF88" intensity={0.5} />
      
      {/* Main group centered and auto-scaled to fit */}
      <group position={[0, 0, 0]} scale={scale}>
        {/* Background particles */}
        <ParticleField />
        
        {/* Rotating rings */}
        <RotatingRings />
        
        {/* Main video sphere */}
        <mesh ref={sphereRef} position={[0, 0, 0]}>
          <sphereGeometry args={[1.0, 32, 32]} />
          <VideoMaterial url="/aliedönen.mp4" />
        </mesh>
        
        {/* Glow sphere */}
        <mesh>
          <sphereGeometry args={[1.1, 32, 32]} />
          <meshBasicMaterial 
            color="#00FF88" 
            opacity={0.1} 
            transparent 
            side={THREE.BackSide}
          />
        </mesh>
      </group>
    </>
  );
}

// Main component
const VideoSphere3D = () => {
  return (
    <div className="w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 3.2], fov: 45 }}
        style={{ background: 'transparent' }}
        gl={{ 
          antialias: true,
          alpha: true,
          powerPreference: "high-performance"
        }}
        dpr={[1, 2]}
      >
        <Suspense fallback={null}>
          <VideoSphereContent />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default VideoSphere3D;

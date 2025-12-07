import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial, Float, Stars } from '@react-three/drei';
import * as THREE from 'three';

const AnimatedSphere = () => {
  const sphereRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (sphereRef.current) {
      sphereRef.current.rotation.x = state.clock.getElapsedTime() * 0.2;
      sphereRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <Sphere args={[1, 64, 64]} ref={sphereRef} scale={2.2}>
        <MeshDistortMaterial
          color="#BE123C" // Rose-700 for better visibility
          attach="material"
          distort={0.4}
          speed={2}
          roughness={0.4}
          metalness={0.8}
          bumpScale={0.05}
        />
      </Sphere>
    </Float>
  );
};

const Particles = () => {
  return (
    <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
  );
}

const ThreeHero: React.FC = () => {
  return (
    <div className="absolute inset-0 z-0 h-full w-full pointer-events-none opacity-40">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={1} />
        <directionalLight position={[10, 10, 5]} intensity={2} color="#F59E0B" />
        <pointLight position={[-10, -10, -5]} intensity={1.5} color="#881337" />
        <AnimatedSphere />
        <Particles />
      </Canvas>
    </div>
  );
};

export default ThreeHero;
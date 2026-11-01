"use client";

import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function LinguisticNetwork({ isOpen }: { isOpen: boolean }) {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y = state.clock.elapsedTime * 0.12;
    groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.25) * 0.08;
    const targetScale = isOpen ? 1.15 : 1.0;
    groupRef.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.05);
  });

  const nodes: [number, number, number][] = [
    [-3.5, 1.5, -2],
    [-1.8, -1.2, -1],
    [0, 2.0, -2.5],
    [2.1, 0.8, -1.5],
    [3.4, -1.4, -2],
    [-2.5, -2.0, -3],
    [1.2, -2.1, -2.5],
  ];

  return (
    <group ref={groupRef}>
      {nodes.map((pos, idx) => (
        <mesh key={idx} position={pos}>
          <sphereGeometry args={[0.12, 24, 24]} />
          <meshStandardMaterial
            color={idx % 2 === 0 ? "#D4AF37" : "#A792D8"}
            emissive={idx % 2 === 0 ? "#947318" : "#3E267B"}
            emissiveIntensity={0.7}
          />
        </mesh>
      ))}
    </group>
  );
}

export default function BookAnimation({ isOpen }: { isOpen: boolean }) {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 opacity-70">
      <Canvas camera={{ position: [0, 0, 6], fov: 50 }}>
        <ambientLight intensity={0.6} />
        <pointLight position={[5, 5, 5]} intensity={1.2} color="#D4AF37" />
        <pointLight position={[-5, -3, 3]} intensity={0.8} color="#6B46C1" />
        <LinguisticNetwork isOpen={isOpen} />
      </Canvas>
    </div>
  );
}

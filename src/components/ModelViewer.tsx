import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { Mesh, Group } from 'three';

interface ModelProps {
  path: string;
}

const Model: React.FC<ModelProps> = ({ path }) => {
  const primitiveRef = useRef<Group>(null);
  const meshRef = useRef<Mesh>(null);
  const { scene } = useGLTF(path, true);

  useFrame(() => {
    if (primitiveRef.current) {
      primitiveRef.current.rotation.y += 0.01;
    }
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01;
    }
  });

  if (scene) {
    return <primitive ref={primitiveRef} object={scene} scale={2} />;
  }

  // fallback (shouldn't happen if model loads)
  return (
    <mesh ref={meshRef} scale={[2, 2, 2]}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="#c08a4c" />
    </mesh>
  );
};

useGLTF.preload('/models/ibarra.glb');
useGLTF.preload('/models/default-male.glb');
useGLTF.preload('/models/default-female.glb');

interface ModelViewerProps {
  modelPath: string;
}

const ModelViewer: React.FC<ModelViewerProps> = ({ modelPath }) => {
  return (
    <div className="model-container relative">
      <Canvas>
        {/* Improved Lighting */}
        <ambientLight intensity={0.7} />
        <directionalLight
          position={[5, 10, 7.5]}
          intensity={1.2}
          castShadow
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
        />
        <pointLight position={[-10, 10, -10]} intensity={0.5} />
        <Model path={modelPath} />
        {/* Enable zoom with scroll */}
        <OrbitControls enableZoom={true} />
      </Canvas>
      <div className="absolute bottom-4 right-4 bg-white/80 px-3 py-1 rounded text-xs text-secondary-700">
        Drag to rotate, scroll to zoom
      </div>
    </div>
  );
};

export default ModelViewer;
import React, { useRef } from "react";
import { useLoader } from "@react-three/fiber";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const Particles = () => {
  // Loading the texture of the particle
  const texture = useLoader(THREE.TextureLoader, "./img/snow.jpg");

  // Creating vertices for Custom Geometry
  const verticesAmount = 8000;
  const positionArray = new Float32Array(verticesAmount * 3);
  for (let i = 0; i < verticesAmount * 3; i++) {
    positionArray[i] = (Math.random() - 0.5) * 10;
  }

  // To create reference of the JSX element
  const particleRef = useRef();

  // To animate the particles
  useFrame((state, delta) => {
    particleRef.current.rotation.x += delta * 0.1;
    particleRef.current.rotation.y += delta * 0.1;
  });

  return (
    <points ref={particleRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positionArray.length}
          itemSize={3}
          array={positionArray}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.1}
        alphaMap={texture}
        transparent
        depthTest={false}
      />
    </points>
  );
};

export default Particles;

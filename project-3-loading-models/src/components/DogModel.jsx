import React, { useEffect } from "react";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { useAnimations, useGLTF } from "@react-three/drei";

const DogModel = () => {
  const petModel = useLoader(GLTFLoader, "./model/dog.glb");
  // const petModel = useGLTF("./model/dog.glb");

  const animations = useAnimations(petModel.animations, petModel.scene);

  useEffect(() => {
    console.log(animations.actions);
    animations.actions.Congratulate.play();
  });

  return (
    <>
      <mesh>
        <primitive object={petModel.scene} position-y={-1} />
      </mesh>
    </>
  );
};

useGLTF.preload("./model/dog.glb");
export default DogModel;

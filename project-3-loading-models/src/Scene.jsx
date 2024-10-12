import { OrbitControls } from "@react-three/drei";
import { Suspense } from "react";

import DogModel from "./components/DogModel";
import BikeModel from "../../project-4-leva/src/components/BikeModel";

const Scene = () => {
  return (
    <>
      <OrbitControls />
      <ambientLight intensity={2} />

      <Suspense
        fallback={
          <mesh>
            <boxGeometry />
            <meshNormalMaterial wireframe />
          </mesh>
        }
      >
        <DogModel />
        {/* <BikeModel /> */}
      </Suspense>
    </>
  );
};

export default Scene;

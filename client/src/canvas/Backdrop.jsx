import React, { useRef } from "react";
import { AccumulativeShadows, RandomizedLight } from "@react-three/drei";

const Backdrop = () => {
  const shadows = useRef(); // create a reference to the AccumulativeShadows component

  return (
    <AccumulativeShadows
      ref={shadows} // set the reference to the shadows variable
      temporal // enable temporal accumulation
      frames={60} // set the number of frames to accumulate
      alphaTest={0.85} // set the alpha test value for shadows
      scale={10} // set the scale of the shadows
      rotation={[Math.PI / 2, 0, 0]} // set the rotation of the shadows
      position={[0, 0, -0.14]} // set the position of the shadows
    >
      <RandomizedLight
        amount={4} // set the number of lights to create
        radius={9} // set the radius of the lights
        intensity={0.55} // set the intensity of the lights
        ambient={0.25} // set the ambient light value
        position={[5, 5, -10]} // set the position of the lights
      />
      <RandomizedLight
        amount={4} // set the number of lights to create
        radius={5} // set the radius of the lights
        intensity={0.25} // set the intensity of the lights
        ambient={0.55} // set the ambient light value
        position={[-5, 5, -9]} // set the position of the lights
      />
    </AccumulativeShadows>
  );
};

export default Backdrop;

import React from "react";
import { Canvas } from "@react-three/fiber"; //importing the Canvas function from react-three-fiber library
import { Environment, Center } from "@react-three/drei"; //importing the Environment and Center functions from @react-three/drei library
import Shirt from "./Shirt"; //importing the Shirt component from the file "./Shirt.js"
import Backdrop from "./Backdrop"; //importing the Backdrop component from the file "./Backdrop.js"
import CameraRig from "./CameraRig"; //importing the CameraRig component from the file "./CameraRig.js"

//Defining the function component CanvasModel
const CanvasModel = () => {
  return (
    <Canvas
      shadows //enabling shadows for the canvas
      camera={{ position: [0, 0, 0], fov: 25 }} //setting camera's initial position and field of view
      gl={{ preserveDrawingBuffer: true }} //setting preserveDrawingBuffer to true for the canvas's WebGL context
      className="w-full max-w-full h-full transition-all ease-in" //defining the className for the canvas
    >
      <ambientLight intensity={0.5} />
      {/* //adding an ambient light to the scene with an intensity of 0.5 */}
      <Environment preset="city" />
      {/* //importing an environment preset from @react-three/drei and using it in the scene */}

      <CameraRig>
        {/* //wrapping the Backdrop and Shirt components inside the CameraRig component */}
        <Backdrop />
        {/* //rendering the Backdrop component */}
        <Center>
          {/* //wrapping the Shirt component inside the Center component for positioning */}
          <Shirt />
          {/* //rendering the Shirt component */}
        </Center>
      </CameraRig>
    </Canvas>
  );
};

export default CanvasModel; //exporting the CanvasModel component as a default export

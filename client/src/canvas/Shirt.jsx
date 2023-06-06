// Importing required modules
import React from "react";
import { easing } from "maath"; // Mathematical functions for easing
import { useSnapshot } from "valtio"; // For maintaining application state
import { useFrame } from "@react-three/fiber"; // For rendering in 3D environment
import { Decal, useGLTF, useTexture } from "@react-three/drei"; // For implementing 3D decals

// Importing application state from store.js
import state from "../store";

// Defining Shirt component
const Shirt = () => {
  const snap = useSnapshot(state); // Get the current value of state object
  const { nodes, materials } = useGLTF("/shirt_baked.glb"); // Load 3D object

  // Load textures based on user's choice
  const logoTexture = useTexture(snap.logoDecal);
  const fullTexture = useTexture(snap.fullDecal);

  // Animate color change of shirt material
  useFrame((state, delta) =>
    easing.dampC(materials.lambert1.color, snap.color, 0.25, delta)
  );

  const stateString = JSON.stringify(snap); // Convert state object to JSON string

  // Render components on 3D mesh
  return (
    <group key={stateString}>
      <mesh
        castShadow
        geometry={nodes.T_Shirt_male.geometry} // Load geometry of 3D object
        material={materials.lambert1} // Load material for 3D mesh
        material-roughness={1}
        dispose={null}
      >
        {snap.isFullTexture && (
          // Render full texture on shirt
          <Decal
            position={[0, 0, 0]}
            rotation={[0, 0, 0]}
            scale={1}
            map={fullTexture}
          />
        )}
        {snap.isLogoTexture && (
          // Render logo texture on shirt
          <Decal
            position={[0, 0.04, 0.15]}
            rotation={[0, 0, 0]}
            scale={0.18}
            map={logoTexture}
            map-anisotropy={16}
            depthTest={false}
            depthWrite={true}
          />
        )}
      </mesh>
    </group>
  );
};

// Exporting Shirt component as default for use in other files
export default Shirt;

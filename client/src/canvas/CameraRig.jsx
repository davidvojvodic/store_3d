// Import required dependencies
import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { easing } from "maath";
import { useSnapshot } from "valtio";

// Import store
import state from "../store";

// Create a functional component called CameraRig
const CameraRig = ({ children }) => {
  // Create a reference object
  const group = useRef();

  // Get a snapshot of the state object
  const snap = useSnapshot(state);

  // Use the useFrame hook to perform actions every frame
  // Pass in a callback function with the current state and delta time
  useFrame((state, delta) => {
    // Check if the window is at a breakpoint or is mobile
    const isBreakpoint = window.innerWidth <= 1260;
    const isMobile = window.innerWidth <= 600;

    // Set the target position of the camera based on the snap object and breakpoints
    let targetPosition = [-0.4, 0, 2];
    if (snap.intro) {
      if (isBreakpoint) targetPosition = [0, 0, 2];
      if (isMobile) targetPosition = [0, 0.2, 2.5];
    } else {
      if (isMobile) targetPosition = [0, 0, 2.5];
      else targetPosition = [0, 0, 2];
    }

    // Use the easing function to update the position of the camera
    easing.damp3(state.camera.position, targetPosition, 0.25, delta);

    // Use the easing function to update the rotation of the group reference object
    easing.dampE(
      group.current.rotation,
      [state.pointer.y / 10, -state.pointer.x / 5, 0],
      0.25,
      delta
    );
  });

  // Return a group object with the children passed in as props and the reference object created earlier
  return <group ref={group}>{children}</group>;
};

// Export the CameraRig component as the default export
export default CameraRig;

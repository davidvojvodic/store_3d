// Importing necessary libraries
import React from "react";
import { SketchPicker } from "react-color";
import { useSnapshot } from "valtio";

// Importing the store where the color data is stored
import state from "../store";

// Defining the ColorPicker component
const ColorPicker = () => {
  // Saving a snapshot of the current state
  const snap = useSnapshot(state);

  // Returning the color picker with settings based on the current state value
  return (
    <div className="absolute left-full ml-3">
      <SketchPicker
        color={snap.color} // Sets the initial color value
        disableAlpha // Disables setting opacity
        onChange={(color) => (state.color = color.hex)} // Updates the state with a new selected color
      />
    </div>
  );
};

// Exporting the ColorPicker component for use elsewhere in the application
export default ColorPicker;

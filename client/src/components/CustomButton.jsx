import React from "react";
import state from "../store";
import { useSnapshot } from "valtio";
import { getContrastingColor } from "../config/helpers";

// CustomButton component takes props: title(string), type(string), customStyles(string), and handleClick(function)
const CustomButton = ({ title, type, customStyles, handleClick }) => {
  // Getting the current snapshot of the state
  const snap = useSnapshot(state);

  // Function to generate style object based on button type
  const generateStyle = (type) => {
    if (type === "filled") {
      // If button type is 'filled', return this object
      return {
        backgroundColor: snap.color,
        color: getContrastingColor(snap.color),
      };
    } else if (type === "outline") {
      // If button type is 'outline', return this object
      return {
        borderWidth: "1px",
        borderColor: snap.color,
        color: snap.color,
      };
    }
  };

  // Returning a button element with the generated styles applied and the onClick event listener set to the handleClick function
  return (
    <button
      className={`flex-1 rounded-md ${customStyles}`}
      style={generateStyle(type)}
      onClick={handleClick}
    >
      {title}
    </button>
  );
};

export default CustomButton;

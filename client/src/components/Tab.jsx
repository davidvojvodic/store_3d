// Importing React and the useSnapshot hook from Valtio library
import React from "react";
import { useSnapshot } from "valtio";
// Importing the 'state' object from the store file
import state from "../store";

// Defining the Tab component as a functional component that accepts props
const Tab = ({ tab, isFilterTab, isActiveTab, handleClick }) => {
  // Using the useSnapshot hook to get the latest snapshot of the state object
  const snap = useSnapshot(state);

  // Depending on whether the tab is a filter tab (and whether it is active or not),
  // defining the styles for that tab
  const activeStyles =
    isFilterTab && isActiveTab
      ? { backgroundColor: snap.color, opacity: 0.5 }
      : { backgroundColor: "transparent", opacity: 1 };

  // Returning the Tab component with a div having following characteristics-
  // - It has a unique key based on the tab name
  // - It has a class 'tab-btn'
  // - It has a class 'rounded-full' if its a filter tab, otherwise class 'rounded-4'
  // - It has an event handler 'onClick' that will call the handleClick function
  // - It has a style based on the activeStyles object defined above
  // - It has an img element with the tab icon source and alt attribute, along with
  //   classes based on whether its a filter tab or not. The size of the img adjusts
  //   accordingly
  return (
    <div
      key={tab.name}
      className={`tab-btn ${
        isFilterTab ? "rounded-full glassmorphism" : "rounded-4"
      }`}
      onClick={handleClick}
      style={activeStyles}
    >
      <img
        src={tab.icon}
        alt={tab.name}
        className={`${
          isFilterTab ? "w-2/3 h-2/3" : "w-11/12 h-11/12 object-contain"
        }`}
      />
    </div>
  );
};

// Exporting the Tab component as the default export from this module
export default Tab;

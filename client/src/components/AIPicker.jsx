// This file contains the AIPicker component which returns a React component
// that allows the user to input a prompt for an image generation.
// The AIPicker component receives four props: prompt, setPrompt, generatingImg, handleSubmit.
// prompt - the current value of the prompt input field.
// setPrompt - the function to update the value of the prompt input field.
// generatingImg - a boolean prop that tells whether an image is being generated or not.
// handleSubmit - the function that handles the submission of the user's prompt.

import React from "react";
// Importing the React library and CustomButton component from the current directory.

import CustomButton from "./CustomButton";
// Importing CustomButton component.

const AIPicker = ({ prompt, setPrompt, generatingImg, handleSubmit }) => {
  // AIPicker is a functional component that takes four props.

  return (
    <div className="aipicker-container">
      {/* // This div holds the entire AIPicker component. */}

      <textarea
        placeholder="Ask AI to generate an image"
        rows={5}
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        className="aipicker-textarea"
      />
      {/* // This textarea element takes the user's prompt input. */}

      <div className="flex flex-wrap gap-3">
        {/* // This div contains two CustomButton components that allows */}
        {/* // the user to select between Logo or Full image generation. */}

        {generatingImg ? (
          // If an image is being generated, display text "AI generating...".
          <CustomButton
            type="outline"
            title="AI generating..."
            customStyles="text-sm"
          />
        ) : (
          <>
            <CustomButton
              type="outline"
              title="AI Logo"
              handleClick={() => handleSubmit("logo")}
              customStyles="text-sm"
            />
            {/* // This CustomButton triggers logo image generation. */}

            <CustomButton
              type="filled"
              title="AI Full"
              handleClick={() => handleSubmit("full")}
              customStyles="text-sm"
            />
            {/* // This CustomButton triggers full image generation. */}
          </>
        )}
      </div>
    </div>
  );
};

export default AIPicker;
// Exporting the component to be used in other files.

import React from "react"; // importing React library

import CustomButton from "./CustomButton"; // importing the CustomButton component

const FilePicker = ({ file, setFile, readFile }) => {
  // creating a component called FilePicker that accepts file, setFile and readFile as props
  return (
    // returning the following HTML/JSX content
    <div className="filepicker-container">
      <div className="flex-1 flex flex-col">
        <input // an input element with the following attributes
          id="file-upload"
          type="file"
          accept="image/*"
          onChange={(e) => setFile(e.target.files[0])} // when the input is changed, set the selected file as the new value for 'file'
        />
        <label htmlFor="file-upload" className="filepicker-label">
          Upload File
        </label>
        <p className="mt-2 text-gray-500 text-sm truncate">
          {file === "" ? "No file selected" : file.name}
        </p>
      </div>

      <div className="mt-4 flex flex-wrap gap-3">
        <CustomButton // using the CustomButton component with the following props
          type="outline"
          title="Logo"
          handleClick={() => readFile("logo")} // when clicked, calls the 'readFile' function with 'logo' as argument
          customStyles="text-sm" // custom styles in form of a className
        />
        <CustomButton // using the CustomButton component with the following props
          type="filled"
          title="Full"
          handleClick={() => readFile("full")} // when clicked, calls the 'readFile' function with 'full' as argument
          customStyles="text-sm p-2" // custom styles in form of a className
        />
      </div>
    </div>
  );
};

export default FilePicker; // exporting the FilePicker component

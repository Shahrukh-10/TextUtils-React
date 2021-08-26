import React, { useState } from "react";
import { Link } from "react-router-dom";


export default function TextForm(props) {
  const [text, setText] = useState("");
  // This is func based component so we are using hooks
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase", "success");
  };
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase", "success");
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const clearText = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Cleared text", "success");
  };

  const handleCopy = () => {
    let newText = text;
    navigator.clipboard.writeText(newText);
    props.showAlert("Text copied to clipboard", "success");
  };

  const removeExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Removed extra spaces", "success");
  };

  const removeSpecialChar = () => {
    let newText = text.replaceAll(
      /[~`!@#$%^&*()+={}\[\];:\'\"<>.,\/\\\?-_]/g,
      ""
    );
    setText(newText);
    props.showAlert("Removed special charaters", "success");
  };
  return (
    <>
      <div className="container">
        <h1
          className={`mt-3 text-${props.mode === "light" ? "dark" : "light"}`}
        >
          {props.heading}
        </h1>
        <div className="mt-2">
          <textarea
            className="form-control"
            placeholder="Enter your text here"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="3"
          ></textarea>
        </div>
        <button
          className="mt-2 mx-1 p-1 btn btn-primary"
          onClick={handleUpClick}
        >
          Convert to Uppercase
        </button>
        <button
          className="mt-2 mx-1 p-1 btn btn-primary"
          onClick={handleLoClick}
        >
          Convert to Lowercase
        </button>
        <button
          className="mt-2 mx-1 p-1 btn btn-primary"
          onClick={removeSpecialChar}
        >
          Remove special characters
        </button>
        <button
          className="mt-2 mx-1 p-1 btn btn-primary"
          onClick={removeExtraSpaces}
        >
          Remove extra spaces
        </button>
        <button className="mt-2 mx-1 p-1 btn btn-primary" onClick={handleCopy}>
          Copy Text
        </button>
        <button className="mt-2 mx-1 p-1 btn btn-danger" onClick={clearText}>
          Clear Text
        </button>
      </div>
      <div
        className={`container mt-4 text-${
          props.mode === "light" ? "dark" : "light"
        }`}
      >
        <h2>Your text summary.</h2>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} minutes to read</p>

        <h2>Preview</h2>
        <p>
          {text.length > 0
            ? text
            : "Enter something textbox to preview it here."}
        </p>
      </div>
    </>
  );
}

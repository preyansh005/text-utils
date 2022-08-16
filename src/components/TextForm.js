import React, { useState } from "react";

export default function TextForm(props) {
  const click = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };

  const change = (event) => {
    setText(event.target.value);
  };

  const [text, setText] = useState("Enter text here");

  return (
    <>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          onChange={change}
          value={text}
          className="form-control"
          id="mybox"
          rows="5"
        ></textarea>
      </div>
      <button onClick={click} className="btn btn-primary">
        Convert To Upper-Case
      </button>
    </>
  );
}

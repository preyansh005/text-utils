import React, { useState } from "react";

export default function TextForm(props) {
  const clickUpper = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };

  const clickLower = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  const clickClear = () => {
    // if(confirm("Are you sure?")){
      let newText = "";
      setText(newText);
    // }
  };

  const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text
    window.speechSynthesis.speak(msg)
  };

  const copyToClipboard = () => {
    let msg = text
    navigator.clipboard.writeText(msg)
  };

  const change = (event) => {
    setText(event.target.value);
  };

  const [text, setText] = useState("");

  return (
    <>
      <div className="container">
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
        <button onClick={clickUpper} className="btn btn-primary">
          To Upper-Case
        </button>
        <button onClick={clickLower} className="btn btn-primary mx-3">
          To Lower-Case
        </button>
        <button onClick={clickClear} className="btn btn-danger">
          Clear
        </button>
        <button onClick={speak} className="btn btn-primary mx-3">
          Speak
        </button>
        <button onClick={copyToClipboard} className="btn btn-primary">
          Copy To Clipboard
        </button>
      </div>

      <div className="container my-3">
        <h2>Your Text Summay</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>Approximately {0.01 * (text.split(" ").length)} minutes to read the text</p>
        <h3>Preview</h3>
        <p>{text}</p>
      </div>
    </>
  );
}

import React, { useState } from "react";

export default function TextForm(props) {
  const clickUpper = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase",'success')
  };
  
  const clickLower = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase",'success')
  };
  
  const clickClear = () => {
    // if(confirm("Are you sure?")){
      let newText = "";
      setText(newText);
      props.showAlert("Text Area Cleared",'success')
      // }
    };
    
    const speak = () => {
      let msg = new SpeechSynthesisUtterance();
      msg.text = text
      window.speechSynthesis.speak(msg)
      props.showAlert("Speak the man",'success')
    };
    
    const copyToClipboard = () => {
      navigator.clipboard.writeText(text)
      props.showAlert("Copy To Clipboard",'success')
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
            style={
              {
                backgroundColor: props.mode === 'light' ? 'white' : '#343a40',
                color: props.mode === 'light' ? 'black' : 'white'
              }
            }
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
        <p>{text.length > 0 ? text : "Enter something to preview"}</p>
      </div>
    </>
  );
}

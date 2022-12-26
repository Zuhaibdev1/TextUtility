import React, { useState } from "react";

const Textarea = (props) => {
  const [text, setText] = useState("")


  const toUp = () => {
    const upperCase = text.toUpperCase()
    setText(upperCase)
  }
  const toLow = () => {
    const LowerCase = text.toLowerCase()
    setText(LowerCase)
  }
  const toClear = () => {
    setText("")
  }
  const Extra = () => {
    const space = text.replace(/ \s+/g, " ").trim()
    setText(space)
  }
  const first = () => {
    const cap = text.split(" ")
    for (let i = 0; i < cap.length; i++) {
      cap[i] = cap[i].charAt(0).toUpperCase() + cap[i].slice(1)
    }
    const str2 = cap.join(" ")
    setText(str2)
  }

  return (
    <>
      <div
        className="Container"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={e => setText(e.target.value)}
            style={{
              backgroundColor: props.mode === "dark" ? "grey" : "white",
              color: props.mode === "dark" ? "white" : "#042743",
            }}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button className={`btn btn-outline-${props.mode === "dark" ? "light" : "dark"} my-3 mx-2`} onClick={toUp}>UpperCase</button>
        <button className={`btn btn-outline-${props.mode === "dark" ? "light" : "dark"} my-3 mx-2`} onClick={toLow}>LowerCase</button>
        <button className={`btn btn-outline-${props.mode === "dark" ? "light" : "dark"} my-3 mx-2`} onClick={toClear}>Clear Text</button>
        <button className={`btn btn-outline-${props.mode === "dark" ? "light" : "dark"} my-3 mx-2`} onClick={Extra}>Clear Spaces</button>
        <button className={`btn btn-outline-${props.mode === "dark" ? "light" : "dark"} my-3 mx-2`} onClick={first}>First Letter Captial</button>
      </div>
      <div
        className="container my 3"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        <h2>Summary</h2>
        <p>
          {text.split(" ").length} words and {text.length} character
        </p>
        <p>{0.008 * text.split(" ").length} Minutes Read</p>
        <h2>Preview</h2>
        <p>
          {text.length > 0
            ? text
            : "Enter Something In The TextBox Above To Preview It Here"}
        </p>
      </div>
    </>
  );
}

export default Textarea
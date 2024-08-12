import React from "react";
import ReactDOM from "react-dom";
import "./index.css";


function Name() {
  const date = new Date()
  const hours = date.getHours()
  return (
    <h1> {hours} : {date.getMinutes()} : {date.getSeconds()}</h1>
  )
}

ReactDOM.render(<Name />, document.getElementById("root"));

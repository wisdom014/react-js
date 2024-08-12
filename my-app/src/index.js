import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

let firstName = "";
let lastName = "";

function Name() {
  firstName = window.prompt("First Name: ")
  lastName = window.prompt("Last Name: ")
  return (
    <h1>Hello {firstName} {lastName}!!!</h1>
  )
}

ReactDOM.render(<Name />, document.getElementById("root"));

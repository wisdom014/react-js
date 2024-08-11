import React from "react"
import ReactDOM from "react-dom"
import Main from "./component/Main"
import Navbar from "./component/Navbar"
import "../src/index.css"

function App() {
  return (
    <div className="container">
  <Navbar />
  <Main />
  </div>
  )
}

ReactDOM.render(<App />, document.getElementById("root"))

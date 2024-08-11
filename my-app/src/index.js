// React app
// function MainContent() {
//  return (<h1>Hi there!!</h1>)
// }
// function BodyContent() {
//  return (<p>How are you</p>)
// }

// ReactDOM.render
// (<div>
//    <MainContent />
//   <BodyContent />
// </div>
// ,
//  document.getElementById("root")
// )

// let paragraph = document.getElementById("root");
//  let node = document.createElement("h1");
//  node.textContent = "Hello, React!";
// paragraph.append(node);

// function content() {
//  return (
//   paragraph.innerHTML = "<h2>Hello, React!!!</h2>"
//  )
// }
// content();

// const head = <div>
//  <h1>Hello</h1>
//  <div>
//   <ul>
//    <li>one</li>
//    <li>two</li>
//    <li>three</li>
//   </ul>
//  </div>
//      <h2>Welcome to my website!</h2>
//    <p>I'm learning React.</p>
// </div>


//     ReactDOM.render(
//      head, document.getElementById("root"))

// const nav = (
//  <nav>
//   <h1>React App</h1>
//   <ul>
//    <li>Pricing</li>
//    <li>About</li>
//    <li>Contact</li>
//   </ul>
//  </nav>
// )

// ReactDOM.render(nav, document.getElementById("root"))

// const page = (
//  <div>
//    <img src="./my-app/src/logo.svg" width="40px" />
//    <h1>Fun facts about React</h1>
//    <ul>
//      <li>Was first released in 2013</li>
//      <li>Was originally created by Jordan Walke</li>
//      <li>Has well over 100k stars on Github</li>
//      <li>Is maintained by Facebook</li>
//      <li>Powers thousands of enterprise apps, including mobile apps</li>
//    </ul>
//  </div>
// )

// ReactDOM.render(page, document.getElementById("root"))

import React from "react"
import ReactDOM from "react-dom"
import Header from "./header"
import MainContent from "./content"
import Footer from "./footer"
import "./index.css"


function Page() {
 return (
  <div>
    <Header />
    <MainContent />
    <Footer />
 </div>
 );
}

ReactDOM.render(<Page />, document.getElementById("root"))


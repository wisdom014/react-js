import React from "react";
import logo from "../img/troll-face.png"

export default function Navbar() {
 return (
  <div className="navbar">
   <div className="logo-container">
  <img src={logo} className="nav-logo" alt="logo" />
  <h3 className="title">Meme Generator</h3>
   </div>
  <h6 className="three">react course - project 3</h6>
  </div>
 )
}
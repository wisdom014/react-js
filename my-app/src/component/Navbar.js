import React from "react"
import logo from "../img/logo512.png";

export default function Navbar() {
  return (
    <nav className="navbar">
      <img src={logo} className="logo" alt="logo" />
      <h3 className="nav-title">ReactFacts</h3>
      <h4 className="nav-link">React Course - Project 1</h4>
    </nav>
  )
}
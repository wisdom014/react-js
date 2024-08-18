import React from "react";
import logo from "../img/earth-logo.png"

export default function Navbar() {
 return (
  <div className="navbar">
  <img src={logo} className="nav-logo" alt="logo" />
  <h3 className="title">my travel journal</h3>
  </div>
 )
}
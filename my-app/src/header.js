import React from "react"
import logo from "../src/img/logo512.png"

export default function Header() {
 return (
     <nav>
      <img src={logo} className="nav-logo" alt="logo" />
      <ul className="nav-items">
        <li>Pricing</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
     </nav>
 );
}

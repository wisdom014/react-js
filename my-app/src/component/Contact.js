import React from "react";
import logo from "../img/wallpaper.png";
import "../index.css";

export default function Contact({name, number, email}) {
 return (
 <div className="contact-card">
  <img src={logo} className="contact-image" alt="card-img" />
  <h3 className="contact-name">{name}</h3>
  <p className="contact-number info">{number}</p>
  <p className="contact-email info">{email}</p>
 </div>
 )
}
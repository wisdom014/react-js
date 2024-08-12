import React from "react";
import logo from "../img/wallpaper.png"
import "../index.css"

export default function Contact(props) {
 return (
 <div className="contact-card">
  <img src={logo} className="contact-image" alt="card-img" />
  <h3 className="contact-name">{props.name}</h3>
  <p className="contact-number info">{props.number}</p>
  <p className="contact-email info">{props.email}</p>
 </div>
 )
}
import React from "react";
import background from "../img/wallpaper.png";

export default function Info() {
 return (
  <div className="info">
   <img src={background} className="background" alt="background" />
   <h1 className="name">Akinniyi Elijah</h1>
   <h1 className="job">Frontend Developer</h1>
   <h1 className="email-text">Elijahakinniyi014@gmail.com</h1>
   <div className="buttons">
     <button className="email">Email</button>
     <button className="linkedin">LinkedIn</button>
   </div>
  </div>
 );
}
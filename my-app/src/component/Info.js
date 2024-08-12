import React from "react";
import background from "../img/wallpaper.png";

export default function Info() {
 return (
  <div className="info">
   <img src={background} alt="background" />
   <h2 className="name">Akinniyi Elijah</h2>
   <h3 className="job">Frontend Developer</h3>
   <h4 className="email">Elijahakinniyi014@gmail.com</h4>
   <div className="buttons">
     <button className="email">Email</button>
     <button className="linkedin">LinkedIn</button>
   </div>
  </div>
 );
}
import React from "react";
import upwork from "../imgs/upwork.png"
import github from "../imgs/github.png"
import linkedin from "../imgs/linkedin.png"
import cv from "../imgs/cv.png"

export default function Footer() {
 return (
  <div className="footer">
   <div className="footer-info">
    <h4 className="footer-title">Characters: <span className="number">826</span></h4>
    <h4 className="footer-title">Locations: <span className="number">126</span></h4>
    <h4 className="footer-title">Episodes: <span className="number">51</span></h4>
   </div>
   <div className="social">
    <a className="social-title" href="https://www.linkedin.com/in/juan-pablo-garcia-garcia-940000290/">
     <img className="social-title-img" src={linkedin} alt="linkedin-icon" />
    </a>
    <a className="social-title" href="https://www.linkedin.com/in/juan-pablo-garcia-garcia-940000290/">
     <img className="social-title-img" src={upwork} alt="upwork-icon" />
    </a>
    <a className="social-title" href="https://www.linkedin.com/in/juan-pablo-garcia-garcia-940000290/">
     <img className="social-title-img" src={github} alt="github-icon" />
    </a>
    <a className="social-title" href="https://www.linkedin.com/in/juan-pablo-garcia-garcia-940000290/">
     <img className="social-title-img" src={cv} alt="portfolio-icon" />
    </a>
   </div>
   <small className="footer-text">&copy; 2024 Rick and Morty. All rights reserved.</small>
  </div>
 )
}

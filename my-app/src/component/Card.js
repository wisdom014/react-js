import React from "react";
import "../index.css";

export default function Card(props) {
 let badgeText 
  if (props.openSpots === 0){
   badgeText = "SOLD OUT"
  }
  else if (props.location === "Online") {
   badgeText = "ONLINE"
  }
 return (
  <div className="card">
   {badgeText && <div className="remains">{badgeText}</div>}
   <img className="card-img" src={require(`../img/${props.img}`)} alt="card-img" />
   <div className="card-cover">
   <p className="card-stats">{props.stats.rating} {`{${props.stats.review}}`} . {props.location}</p>
   <p className="card-title">{props.title}</p>
   <h5 className="card-price">From ${props.price} / <small>Person</small></h5>
  </div>
  </div>
 )
}
import React from "react";
import location from "../img/location-2955.png"

export default function Card(props) {
return (
 <div className="card">
  <div className="img-container">
  <img className="card-img" src={require(`../img/${props.img}`)} alt="card-img" />
  </div>
  <div className="card-text">
  <div className="card-location">
   <img className="location-img" src={location} alt="card-img" />
   <p className="location-text">{props.location}</p><a href="#" className="location-link">View on Google Map</a>
  </div>
  <div className="text-container">
  <h1 className="text-title">{props.title}</h1>
  <h6 className="text-date">{props.date.start} - {props.date.end}</h6>
  <p className="text-desc">{props.description}</p>
  </div>
  </div>
 </div>
)
}





                      // export default function Card(props) {
                      //  let badgeText 
                      //   if (props.openSpots === 0){
                      //    badgeText = "SOLD OUT"
                      //   }
                      //   else if (props.location === "Online") {
                      //    badgeText = "ONLINE"
                      //   }
                      //  return (
                      //   <div className="card">
                      //    {badgeText && <div className="remains">{badgeText}</div>}
                      //    <img className="card-img" src={require(`../img/${props.img}`)} alt="card-img" />
                      //    <div className="card-cover">
                      //    <p className="card-stats">{props.stats.rating} {`{${props.stats.review}}`} . {props.location}</p>
                      //    <p className="card-title">{props.title}</p>
                      //    <h5 className="card-price">From ${props.price} / <small>Person</small></h5>
                      //   </div>
                      //   </div>
                      //  )
                      // }
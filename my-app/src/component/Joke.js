import React from "react";
import "../index.css";

export default function Joke(props) {
 return (
  <div className="joke">
   <h3>{props.setup}</h3>
   <p>{props.punchline}</p>
   <hr />
  </div>
 )
}
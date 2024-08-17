import React from "react";
import Card from "./component/Card";
import Data from "./component/Data";

export default function App() {
  const card = Data.map(props => {
    return (
      <Card 
      key = {props.id}
      {...props}
       />
    )
  })
  return (
    <div className="app">
    {card}
  </div>
  )
}
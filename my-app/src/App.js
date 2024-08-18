import React from "react";
import Card from "./component/Card";
import Data from "./component/Data";
import Navbar from "./component/Navbar";

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
      <Navbar />
      <section>
        {card}
      </section>
  </div>
  )
}
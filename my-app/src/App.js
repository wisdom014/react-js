import React from "react";
import Meme from "./component/Meme";
import Navbar from "./component/Navbar";

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <Meme />
  </div>
  )
}
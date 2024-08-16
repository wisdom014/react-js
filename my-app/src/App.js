import React from "react";
import Joke from "./component/Joke";
import JokesData from "./component/jokesData";

export default function App() {
  const jokes = JokesData.map(joke => {
    return (
      <Joke setup = {joke.setup} punchline = {joke.punchline} />
    )
  })
  return (
    <div>
    {jokes}
  </div>
  )
}
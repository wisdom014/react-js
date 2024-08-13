import React from "react";
// import Joke from "./component/Joke";


export default function App() {
  const colors = ["Red", "Orange", "Yellow", "Green", "Blue", "Indigo", "Violet"]
  const color = colors.map((colors) => {
 return <h3>{colors}</h3>
})
 return (
  <div>
    {color}
  </div>
 )
}

  //  <Joke
  //   setup="I got my daughter a fridge for her birthday."
  //   punchline="I can't wait to see her face light up when she opens it."
  //   />
  //  <Joke
  //   setup="How did the hacker escape the police?"
  //   punchline="He just ransomware!"
  //   />
  //  <Joke
  //   setup="Why don't pirates travel on mountain roads?"
  //   punchline="Scurvy."
  //   />
  //  <Joke
  //   setup="Why do bees stay in the hive in the winter?"
  //   punchline="Swarm."
  //   />
  //  <Joke
  //   setup="What's the best thing about Switzerland?"
  //   punchline="I don't know, but the flag is a big plus!"
  //   />
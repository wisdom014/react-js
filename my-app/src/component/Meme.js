import React from "react";
// import Data from "./Data";
// import logo from "../img/wallpaper.png"

export default function Meme(props) {
 const [meme, setMeme] = React.useState({
  topText: "One does not simply",
  bottomText: "walk into Mordor",
  randomImage: "http://i.imgflip.com/1bij.jpg",
 });

 function handleChange(event) {
  event.preventDefault()
  setMeme(prevMeme => {
   const { name, value } = event.target
   return {
    ...prevMeme,
    [name]: value
   }
  })
 }

 const [allMemes, setAllMemes] = React.useState([]);

   React.useEffect(() => {
    async function getMemes() {
      const res = await fetch("https://api.imgflip.com/get_memes");
      const data = await res.json();
      setAllMemes(data.data.memes);
    }
    getMemes();
  }, []);

 function getMemeImage() {
  const randomNumber = Math.floor(Math.random() * allMemes.length);
  const selectedMeme = allMemes[randomNumber];
  setMeme((prevMeme) => ({
   ...prevMeme,
   randomImage: selectedMeme.url,
  }));
 }
return (
<div className="container">
  <div className="meme">
    <div className="input">
      <input
      type="text"
      placeholder="Top Text"
      name="topText"
      value={meme.topText}
      onChange={handleChange}
      />
      <input
      type="text"
      placeholder="Bottom Text"
      name="bottomText"
      value={meme.bottomText}
      onChange={handleChange}
      />
    </div>
      <input type="submit" value="Get a new meme image" onClick={getMemeImage} />
    <div className="memes">
      {meme.randomImage && <img src={meme.randomImage} className="meme-img" alt="meme" />}
      <h2 className="top-text">{meme.topText}</h2>
      <h2 className="bottom-text">{meme.bottomText}</h2>
    </div>
  </div>
</div>
)
}
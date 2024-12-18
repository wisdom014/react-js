import React, { useState } from "react";

export default function Navbar(props) {
 const [searchTerm, setSearchTerm] = useState("");

 const handleSearchChange = (event) => {
  setSearchTerm(event.target.value);
  // You would typically filter your character list here based on searchTerm
 };

 // Assuming you have a characters array passed as a prop
 const filteredCharacters = (props.characters || [])
  .filter(character => character.name.toLowerCase().includes(searchTerm.toLowerCase()))
  .sort((a, b) => a.name.localeCompare(b.name));

 return (
  <div className="NavBar">
   <form>
    <input
     className="search"
     type="search"
     placeholder="Search"
     autoComplete={true}
     value={searchTerm}
     onChange={handleSearchChange}
    />
   </form>
   <div className="character-list">
    {filteredCharacters.map(character => (
     <div className="Characters" key={character.id}>
      <img className="character-img" src={character.image} alt={character.name} />
      <div className="character-info">
       <h4 className="character-name">{character.name}</h4>
       <p className="character-specie"><p className="live"></p> {character.status} - {character.species}</p>
       <span className="character-gender">{character.gender}</span>
      </div>
     </div>
    ))}
   </div>
  </div>
 )
}
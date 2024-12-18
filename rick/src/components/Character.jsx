import React, { useState, useEffect } from "react";
import prev from "../imgs/previous.png"
import next from "../imgs/next.png"

export default function Characters(props) {
  const [allCharacter, setAllCharacter] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [fetchedCharacters, setFetchedCharacters] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(false);


  const getCharacter = async (page, status = "", name = "") => {
    setLoading(true);
    const res = await fetch(`https://rickandmortyapi.com/api/character/?page=${page}&name=${name}&status=${status}`);
    const data = await res.json();
    setFetchedCharacters(data.results || []);
    setAllCharacter(data.results || []);
    setTotalPages(data.info?.pages || 0);
    setLoading(false);

  };

  useEffect(() => {
    getCharacter(currentPage, "", searchTerm);
  }, [currentPage, searchTerm]);

  const handleSearchChange = (event) => {
    const term = event.target.value;
    setSearchTerm(term);
    event.preventDefault();
    getCharacter(currentPage, "", searchTerm);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    getCharacter(currentPage, "", searchTerm);
  };

  const filteredCharacters = fetchedCharacters.filter(character =>
    character.name.toLowerCase().includes(searchTerm.toLowerCase())
  ).sort((a, b) => a.name.localeCompare(b.name));

  const handlePrev = () => {
    const prevPage = currentPage - 1;
    if (prevPage >= 1) {
      setCurrentPage(prevPage);
      getCharacter(prevPage, "", searchTerm);
    }
  };

  const handleNext = () => {
    const nextPage = currentPage + 1;
    if (nextPage <= totalPages) {
      setCurrentPage(nextPage);
      getCharacter(nextPage, "", searchTerm);
    }
  };

  return (
    <div className="character-container">
      {loading && (
        <div className="loading-screen">
          <div className="loader">Loading...</div>
        </div>
      )}
      <h2 className="title">Rick and Morty</h2>
      <h4 className="route">Characters</h4>
      <form onSubmit={handleSearchSubmit}>
        <input
          className="search"
          type="search"
          placeholder="Search"
          autoComplete={true}
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <button type="submit" className="search-button">Search</button>
      </form>
      {filteredCharacters.map(character => (
        <div className="Characters" key={character.id}>
          <img className="character-img" src={character.image} alt={character.name} />
          <div className="character-info">
            <h4 className="character-name">{character.name}</h4>
            <p className="character-specie"><p className={character.status === "Alive" ? "live" : character.status === "Dead" ? "dead" : "unknown"}></p> {character.status} - {character.species}</p>
            <span className="character-gender">{character.gender}</span>
            {/* <p className="character-origin">First seen in: {character.origin.name}</p>
            <p className="character-location">Last seen in: {character.location.name}</p> */}
          </div>
        </div>
      ))}
      <div className="buttons">
        <img className="button" src={prev} alt="previous" onClick={handlePrev} />
        <div className="display">{currentPage}</div>
        <img className="button" src={next} alt="next" onClick={handleNext} />
      </div>
    </div>
  );
}
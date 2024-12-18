import React, { useState, useEffect } from "react";
import prev from "../imgs/previous.png"
import next from "../imgs/next.png"

export default function Location() {
 const [fetchedLocations, setFetchedLocations] = useState([]);
 const [currentPage, setCurrentPage] = useState(1);
 const [searchTerm, setSearchTerm] = useState("");
 const [totalPages, setTotalPages] = useState(0);
 const [loading, setLoading] = useState(false);

 const getLocations = async (page, name = "") => {
  setLoading(true);
  const res = await fetch(`https://rickandmortyapi.com/api/location/?page=${page}&name=${name}`);
  const data = await res.json();
  setFetchedLocations(data.results || []);
  setTotalPages(data.info?.pages || 0);
  setLoading(false);
 };

 useEffect(() => {
  getLocations(currentPage, searchTerm);
 }, [currentPage, searchTerm]);

 const handleSearchChange = (event) => {
  const term = event.target.value;
  setSearchTerm(term);
  event.preventDefault();
  getLocations(currentPage, "", searchTerm);
 };

 const handlePrev = () => {
  const prevPage = currentPage - 1;
  if (prevPage >= 1) {
   setCurrentPage(prevPage);
   getLocations(prevPage, "", searchTerm);
  }
 };

 const handleNext = () => {
  const nextPage = currentPage + 1;
  if (nextPage <= totalPages) {
   setCurrentPage(nextPage);
   getLocations(nextPage, "", searchTerm);
  }
 };

 const handleSearchSubmit = (event) => {
  event.preventDefault();
  getLocations(currentPage, searchTerm);
 };

 const filteredLocations = fetchedLocations.filter(location =>
  location.name.toLowerCase().includes(searchTerm.toLowerCase())
 ).sort((a, b) => a.name.localeCompare(b.name));


 return (
  <div className="location-container">
   {loading && (
    <div className="loading-screen">
     <div className="loader">Loading...</div>
    </div>
   )}
   <h2 className="title">Rick and Morty</h2>
   <h4 className="route">Locations</h4>
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
   <div className="planet-container">
    <img className="location-img" src="https://rickandmortyapi.com/api/character/avatar/1.jpeg" alt="cover" />
    {filteredLocations.map(location => (
     <div className="location-planet" key={location.id}>
      <h4 className="planet-top">{location.name}</h4>
      <span className="planet-bottom">{location.type}</span><br />
      <span className="planet-bottom">{location.dimension}</span>
     </div>
    ))}
   </div>
   <div className="buttons">
    <img className="button" src={prev} alt="previous" onClick={handlePrev} />
    <div className="display">{currentPage}</div>
    <img className="button" src={next} alt="next" onClick={handleNext} />
   </div>
  </div>
 )
}
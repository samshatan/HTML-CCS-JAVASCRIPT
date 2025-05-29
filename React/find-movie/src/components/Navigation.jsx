import React, { useState } from 'react';
import movies from '../data/movie-list.js';

function Navigation() {

    const [genre, setGenre] = useState("All");

    function handleGenreChange(event) {
        setGenre(event.target.value);
    };

    const filterMovie = movies.filter((movie)=> {
        return movie.genre === genre || genre === "All";
    });
    
    
  return (
    <nav>
      <a href="#all">All</a>
      <a href="#comedy">Comedy</a>
      <a href="#latest">Latest</a>
      <a href="#anime">Anime</a>
      <div className="filters">
          <p>Genre</p>
          <select id="genre" onChange={handleGenreChange}>
              <option>All</option>
              <option>Horror</option>
              <option>Sci-fi</option>
              <option>Comedy</option>
              <option>Romance</option>
              <option>Crime</option>
          </select>
          <p>Release year</p>
          <select id="year">
              <option value="">All</option>
              <option value="">2021-2025</option>
              <option value="">2016-2020</option>
              <option value="">2011-2015</option>
              <option value="">2006-2010</option>
              <option value="">2001-2005</option>
              <option value="">1996-2000</option>
              <option value="">1991-1995</option>
              </select>
          <p>Rating</p>
          <select id="rating">
              <option value="">All</option>
              <option value="">High</option>
              <option value="">Medium</option>
              <option value="">Low</option>
          </select>
      </div>
      <button>RESET</button>
  </nav>
  )
}
export default Navigation;
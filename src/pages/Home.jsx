// src/pages/Home.jsx
import React from "react";
import { Link } from "react-router-dom";
import { movies } from "../data.jsx";

function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <Link to={`/movie/${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;

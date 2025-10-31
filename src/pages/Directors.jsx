// src/pages/Directors.jsx
import React from "react";
import { directors } from "../data.jsx";

function Directors() {
  return (
    <div>
      <h1>Directors Page</h1>
      <ul>
        {directors.map((director) => (
          <li key={director.id}>
            {director.name}
            <ul>
              {director.movies.map((movie, index) => (
                <li key={index}>{movie}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Directors;

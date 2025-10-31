// src/pages/Actors.jsx
import React from "react";
import { actors } from "../data.jsx";

function Actors() {
  return (
    <div>
      <h1>Actors Page</h1>
      <ul>
        {actors.map((actor) => (
          <li key={actor.id}>
            {actor.name}
            <ul>
              {actor.movies.map((movie, index) => (
                <li key={index}>{movie}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Actors;

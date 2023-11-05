import React from "react";
import { directors } from "../data";

function Directors() {
  //making another list now for directors
  const directorsList = directors.map((director) =>(
    <div key={director.name}>
      <h2>{director.name}</h2>
      <ul>
      {director.movies.map((movie) => (
          <li key={movie}>{movie}</li>
        ))}
      </ul>

    </div>
  ))
  return <div>
    <h1>Directors page</h1>
    {directorsList}
  </div>;
}

export default Directors;

import "./App.css";
import React, { useState } from "react";
import Filter from "./Filter";
import MovieList from "./MovieList";

const App = () => {
  const [movies, setMovies] = useState([]);

  const handleAddMovie = (movie) => {
    setMovies([...movies, movie]);
  };

  const handleFilter = (title, rating) => {
    // Filter movies based on title and rating
    const filteredMovies = movies.filter((movie) => {
      const matchTitle = movie.title
        .toLowerCase()
        .includes(title.toLowerCase());
      const matchRating = movie.rating.toString().includes(rating.toString());
      return matchTitle && matchRating;
    });

    // Update the movie list with the filtered movies
    setMovies(filteredMovies);
  };

  return (
    <div className="app">
      <h1>Movie List</h1>
      <Filter onFilter={handleFilter} />
      <MovieList movies={movies} />
      <div className="add-movie">
        <h2>Add a New Movie</h2>
        <input type="text" placeholder="Title" id="title" />
        <input type="text" placeholder="Description" id="description" />
        <input type="text" placeholder="Poster URL" id="posterURL" />
        <input type="number" placeholder="Rating" id="rating" step="0.1" />
        <button
          onClick={() => {
            const title = document.getElementById("title").value;
            const description = document.getElementById("description").value;
            const posterURL = document.getElementById("posterURL").value;
            const rating = parseFloat(document.getElementById("rating").value);

            const newMovie = {
              title: title,
              description: description,
              posterURL: posterURL,
              rating: rating,
            };

            handleAddMovie(newMovie);
          }}
        >
          Add Movie
        </button>
      </div>
    </div>
  );
};

export default App;

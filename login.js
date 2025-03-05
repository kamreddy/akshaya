import React, { useState } from "react";
import SearchBar from "../components/SearchBar";
import MovieCard from "../components/MovieCard";

const Home = ({ addToFavorites }) => {
  const [movies, setMovies] = useState([]);

  return (
    <div className="container-fluid bg-dark text-light">
      <h1 className="my-4 text-center text-warning">🎬 StreamFlix - IMDb Clone</h1>

      <SearchBar setMovies={setMovies} />

      <h2 className="text-light mt-4">🔥 Trending Movies</h2>
      <div className="row">
        <div className="col-md-3"><MovieCard movie={{ Title: "Inception", Year: "2010", Poster: "https://via.placeholder.com/200", imdbID: "tt1375666" }} addToFavorites={addToFavorites} /></div>
        <div className="col-md-3"><MovieCard movie={{ Title: "Interstellar", Year: "2014", Poster: "https://via.placeholder.com/200", imdbID: "tt0816692" }} addToFavorites={addToFavorites} /></div>
        <div className="col-md-3"><MovieCard movie={{ Title: "Avengers", Year: "2012", Poster: "https://via.placeholder.com/200", imdbID: "tt0848228" }} addToFavorites={addToFavorites} /></div>
        <div className="col-md-3"><MovieCard movie={{ Title: "The Dark Knight", Year: "2008", Poster: "https://via.placeholder.com/200", imdbID: "tt0468569" }} addToFavorites={addToFavorites} /></div>
      </div>

      <h2 className="text-light mt-4">🔎 Search Results</h2>
      <div className="row mt-3">
        {movies.length > 0 ? (
          movies.map((movie) => (
            <div key={movie.imdbID} className="col-md-3">
              <MovieCard movie={movie} addToFavorites={addToFavorites} />
            </div>
          ))
        ) : (
          <p className="text-center mt-4 text-secondary">No movies found. Start typing to search!</p>
        )}
      </div>
    </div>
  );
};

export default Home;

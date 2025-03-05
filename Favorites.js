import React from "react";

const Favorites = ({ favorites, removeFromFavorites }) => (
  <div className="container text-light">
    <h1 className="my-4">❤️ My Favorite Movies</h1>
    {favorites.length === 0 && <p>No favorite movies added yet.</p>}
    <div className="row">
      {favorites.map((movie) => (
        <div key={movie.imdbID} className="col-md-3">
          <div className="movie-card">
            <img src={movie.Poster} alt={movie.Title} className="movie-poster" />
            <div className="movie-info">
              <h5>{movie.Title}</h5>
              <button onClick={() => removeFromFavorites(movie.imdbID)} className="btn btn-sm btn-danger">❌ Remove</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Favorites;

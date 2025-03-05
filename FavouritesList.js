import React from "react";

const FavoritesList = ({ favorites, removeFromFavorites }) => (
  <div>
    <h2>My Favorite Movies</h2>
    {favorites.length === 0 && <p>No favorite movies added yet.</p>}
    {favorites.map((movie) => (
      <div key={movie.imdbID} className="d-flex align-items-center mb-3">
        <img src={movie.Poster} alt={movie.Title} width="50" />
        <p className="mb-0 mx-3">{movie.Title}</p>
        <button onClick={() => removeFromFavorites(movie.imdbID)} className="btn btn-danger btn-sm">Remove</button>
      </div>
    ))}
  </div>
);

export default FavoritesList;

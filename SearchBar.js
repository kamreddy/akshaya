import React, { useState, useEffect } from "react";
import { searchMovies } from "../api";

const SearchBar = ({ setMovies }) => {
  const [query, setQuery] = useState("");

  useEffect(() => {
    if (query.length > 2) {
      searchMovies(query).then(setMovies);
    }
  }, [query]);

  return (
    <input
      type="text"
      className="form-control"
      placeholder="Search movies..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
    />
  );
};

export default SearchBar;

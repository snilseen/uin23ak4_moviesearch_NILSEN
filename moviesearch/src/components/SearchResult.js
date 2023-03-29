import { useState, useEffect } from "react";
import "./MovieCard.css";
import MovieCard from "./MovieCard";
import SearchBar from "./SearchBar";

export default function SearchResult() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("http://www.omdbapi.com/?type=movie&apikey=35c19dc3&s=james-bond")
      .then((res) => res.json())
      .then((movies) => {
        console.log(movies);
        setMovies(movies.Search);
      });
  }, []);

  const handleSubmit = (term) => {
    if (term !== "") {
      fetch(`http://www.omdbapi.com/?type=movie&apikey=35c19dc3&s=${term}`)
        .then((res) => res.json())
        .then((movies) => {
          setMovies(movies.Search);
        });
    }
  };

  return (
    <>
      <div>
        <SearchBar onSubmit={handleSubmit} />

        {movies?.map((movie) => (
          <MovieCard
            key={movie.imdbID}
            Title={movie.Title}
            Poster={movie.Poster}
            Type={movie.Type}
            Year={movie.Year}
            imdbID={movie.imdbID}
          />
        ))}
      </div>
    </>
  );
}

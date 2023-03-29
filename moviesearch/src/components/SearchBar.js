import { useState } from "react";
import "./SearchBar.css";

export default function SearchBar({ onSubmit }) {
  const [term, setTerm] = useState("");

  const handleMovieSubmit = (event) => {
    event.preventDefault();
    onSubmit(term);
    setTerm("");
  };

  const handleChange = (event) => {
    setTerm(event.target.value);
  };

  return (
    <div className="search-bar">
      <form onSubmit={handleMovieSubmit}>
        <label>Search Movies here</label>
        <input className="input" value={term} onChange={handleChange} />
        <button className="button">Search!</button>
      </form>
    </div>
  );
}

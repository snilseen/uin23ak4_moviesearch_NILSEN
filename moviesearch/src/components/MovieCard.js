import "./MovieCard.css";

export default function MovieCard({ Title, Poster, Type, Year, imdbID }) {
  return (
    <article className="movie-card">
      <h1>{Title}</h1>
      <img src={Poster} alt={Title} />

      <p>Year: {Year}</p>
      <p>Type: {Type}</p>
      <p>imdb ID: {imdbID}</p>
    </article>
  );
}

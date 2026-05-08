import { useParams, useNavigate } from "react-router-dom";
import movies from "../data/movies";
import "./MovieDetails.css";

function MovieDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const movie = movies.find((m) => m.id === Number(id));

  if (!movie) {
    return <h2>Movie not found</h2>;
  }

  return (
    <div className="details-container">
      
      {/* LEFT SIDE IMAGE */}
      <div className="image-section">
        <img src={movie.image} alt={movie.title} />
      </div>

      {/* RIGHT SIDE DETAILS */}
      <div className="info-section">
        <h1>{movie.title}</h1>

        <p><b>Description:</b> {movie.description}</p>
        <p><b>Cast:</b> {movie.cast}</p>

        <div className="genres">
          <b>Genres:</b>
          <div className="genre-tags">
            {movie.genres.map((g, i) => (
              <span key={i}>{g}</span>
            ))}
          </div>
        </div>

        <button onClick={() => navigate(`/book/${movie.id}`)}>
          Book Seat
        </button>
      </div>

    </div>
  );
}

export default MovieDetails;
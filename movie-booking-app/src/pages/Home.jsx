import movies from "../data/movies";
import { useNavigate } from "react-router-dom";
import "./Home.css";

function Home() {
  const navigate = useNavigate();

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Movies</h1>

      <div className="grid">
        {movies.map((movie) => (
          <div
            className="card"
            key={movie.id}
            onClick={() => navigate(`/movie/${movie.id}`)}
          >
            <img src={movie.image} />
            <h3>{movie.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
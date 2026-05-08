import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <h2> 🎬 Movie Booking</h2>
      <Link to="/">Home</Link>
    </nav>
  );
}

export default Navbar;
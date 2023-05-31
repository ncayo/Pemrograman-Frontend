/**
 * Import CSS Module Navbar.
 * Disimpan di object styles.
 */
//Import link dari react router
import { Link } from "react-router-dom";
import StyledNavbar from "./StyledNavbar";

function Navbar() {
  /**
   * Menggunakan styles yang sudah diimport.
   * Memanggilnya menggunakan expression.
   */
  return (
    <StyledNavbar>
      <div>
        <nav>
          <div>
            <h1>Movie App</h1>
          </div>
          <div>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/movie/create">Add Movie</Link>
              </li>
              <li>
                <Link to="movie/popular">Popular</Link>
              </li>
              <li>
                <Link to="movie/now">Now Playing</Link>
              </li>
              <li>
                <Link to="movie/top">Top Rated</Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </StyledNavbar>
  );
}

export default Navbar;

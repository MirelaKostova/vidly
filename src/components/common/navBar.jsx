import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg  bg-light">
      <div className="container-fluid">
        <Link
          style={{ fontWeight: "bold", color: "#0275d8" }}
          className="navbar-brand m-1"
          to="/movies"
        >
          VIDLY
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <NavLink className="nav-link" aria-current="page" to="/movies">
              Movies
            </NavLink>
            <NavLink className="nav-link" to="/customers">
              Customers
            </NavLink>
            <NavLink className="nav-link" to="/rentals">
              Rentals
            </NavLink>
            <NavLink className="nav-link" to="/login">
              Login
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

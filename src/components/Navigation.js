import { HashLink as Link } from "react-router-hash-link";
import "../style/navigation.css";
import Auth from "../js/Auth";

const Navigation = () => {
  const logout = () => {
    Auth.logout();
    localStorage.removeItem("token");
  };
  return (
    <div className="navigation">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link to="/">
            <img src="/img/logoNavbar.png" alt="Logo" className="logo" />
          </Link>
          <button
            className="navbar-toggler navbarSpan"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/#welcome" className="nav-link">
                  Accueil
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/#activities" className="nav-link">
                  Activites
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/#events" className="nav-link">
                  Évènements
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/#whoami" className="nav-link">
                  Qui suis-je
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/#contact" className="nav-link">
                  Contact
                </Link>
              </li>
              {Auth.isAuthenticated() ? (
                <li className="nav-item">
                  <Link to="/back" className="nav-link">
                    Back
                  </Link>
                </li>
              ) : (
                ""
              )}
              {Auth.isAuthenticated() ? (
                <li className="nav-item">
                  <Link to="/" className="nav-link" onClick={logout}>
                    Déconnexion
                  </Link>
                </li>
              ) : (
                ""
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;

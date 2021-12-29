import { Link } from "react-router-dom";
import "../style/navigation.css";

const Navigation = () => {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });
  return (
    <div className="navigation">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link to="/">
            <img src="img/logoNavbar.png" alt="Logo" className="logo" />
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
                <a
                  href="#welcome"
                  className="nav-link"
                  data-bs-toggle="collapse"
                  data-bs-target=".navbar-collapse"
                  aria-current="page"
                >
                  Accueil
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="#activities"
                  className="nav-link"
                  data-bs-toggle="collapse"
                  data-bs-target=".navbar-collapse"
                  aria-current="page"
                >
                  Activités
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="#events"
                  className="nav-link"
                  data-bs-toggle="collapse"
                  data-bs-target=".navbar-collapse"
                  aria-current="page"
                >
                  Évènements
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="#whoami"
                  className="nav-link"
                  data-bs-toggle="collapse"
                  data-bs-target=".navbar-collapse"
                  aria-current="page"
                >
                  Qui suis-je
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="#contact"
                  className="nav-link"
                  data-bs-toggle="collapse"
                  data-bs-target=".navbar-collapse"
                  aria-current="page"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;

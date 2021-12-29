import "../style/header.css";
import { Link } from "react-router-dom";

const Header = () => {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });
  return (
    <div className="header">
      <div className="headerBox">
        <h1 className="text-light">L'ATELIER SAUVAGE</h1>
        <p className="text-light">
          Découvrez les plantes sauvages comestibles, <br /> médicinales, et la
          vie en pleine Nature...
        </p>
        <div>
          <a href="#activities" className="btn btn-green text-light">
            Découvrir
          </a>
        </div>
      </div>
      <div>
        <a href="#welcome">
          <img src="img/chevron.png" alt="chevron down" className="chevron" />
        </a>
      </div>
    </div>
  );
};

export default Header;

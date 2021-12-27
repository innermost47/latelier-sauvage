import "../style/header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="headerBox">
        <h1 className="text-light">L'ATELIER SAUVAGE</h1>
        <p className="text-light">
          Découvrez les plantes sauvages comestibles, <br /> médicinales, et la
          vie en pleine Nature...
        </p>
        <div>
          <Link to="/#activities" className="btn btn-green text-light">
            Découvrir
          </Link>
        </div>
      </div>
      <div>
        <Link to="/#welcome">
          <img src="img/chevron.png" alt="chevron down" className="chevron" />
        </Link>
      </div>
    </div>
  );
};

export default Header;

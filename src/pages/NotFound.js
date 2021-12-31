import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import "../style/notFound.css";

const NotFound = () => {
  return (
    <div>
      <Navigation />
      <div className="lost">
        <div>
          <h1>Erreur 404</h1>
          <h2>Vous emblez vous être égaré...</h2>
          <Link to="/" className="btn btn-green text-light">
            Accueil
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;

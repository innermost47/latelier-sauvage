import { Link } from "react-router-dom";
import '../style/navigation.css';

const Navigation = () => {
    return (
        <div className="navigation">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link to="/"><img src="img/logo.png" alt="Logo" className="logo"/></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to="/#welcome" className="nav-link">Accueil</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/#activities" className="nav-link">Activités</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/#events" className="nav-link">Évènements</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/#whoami" className="nav-link">Qui suis-je</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/#contact" className="nav-link">Contact</Link>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navigation;
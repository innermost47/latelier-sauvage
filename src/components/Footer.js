import "../style/footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="socials">
        <div className="container">
          <div className="d-flex d-flew-row justify-content-between">
            <h5>Rejoignez moi sur Facebook</h5>
            <a
              href="https://www.facebook.com/Latelier-Sauvage-1734883446746713"
              target="_blank"
              rel="noreferrer"
            >
              <img src="/img/facebook.png" alt="Join me on facebook" />
            </a>
          </div>
        </div>
      </div>
      <div className="footerInfos">
        <img src="/img/logo.png" alt="The Logo" className="footerLogo" />
      </div>
      <div className="mentionsLink">
        <Link to="/mentions-legales" className="linkMentions">
          Mentions legales
        </Link>
      </div>
    </footer>
  );
};

export default Footer;

import React from "react";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import "../style/mentions.css";

const Mentions = () => {
  window.scrollTo(0, 0);
  return (
    <div>
      <Navigation />
      <div className="background">
        <div className="mentions">
          <h2>Mentions Legales</h2>
          <hr />
          <h4> Ce site est édité par :</h4>
          <p>Anthony CHARRETIER</p>
          <h4>Adresse :</h4>
          <p>5 montée de Fourvière 69850 Duerne</p>
          <h4>Téléphone :</h4>
          <p>+33670058825</p>
          <h4> Numéro d'immatriculation légal :</h4>
          <p>SIRET 524 928 108 00017</p>
          <p>TVA non applicable, article 293B du CGI</p>
          <h4>Hébergeur :</h4>
          <p>
            PlanetHoster 4416 Louis B. Mayer Laval (Grand Montréal), Québec H7P
            0G1 Canada FR:+33 1 76 60 41 43
          </p>
          <hr />
          <h3 className="mt-3">Politique de confidentialité</h3>
          <iframe
            style={{ border: 0, height: 200, width: "100%" }}
            src="https://matomo.anthony-charretier.fr/index.php?module=CoreAdminHome&action=optOut&language=fr&backgroundColor=&fontColor=&fontSize=&fontFamily="
          ></iframe>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Mentions;

import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const Back = () => {
  return (
    <div>
      <Navigation />
      <div className="container">
        <div className="row">
          <h2>Créer un évènement</h2>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <h2>Update un évènement</h2>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <h2>Delete un évènement</h2>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Back;

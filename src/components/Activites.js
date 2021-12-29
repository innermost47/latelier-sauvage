import { useEffect, useState } from "react";
import axios from "axios";
import "../style/activites.css";
import { url } from "../js/Constantes";

const Activites = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get(url + "activities").then((res) => setData(res.data));
  }, []);
  return (
    <section id="activities">
      <div className="container">
        <div className="row">
          <h2 className="sectionTitle greenTitle">LES ACTIVITÉS</h2>
          {data.map((content) => (
            <div key={content.id} className="col-md-4">
              <div className="imageContainer">
                <img
                  src={url + "img/" + content.image}
                  alt={content.image}
                  className="imageActivites"
                />
              </div>
              <h4>{content.shortTitle}</h4>
              <p>{content.shortDescription}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Activites;

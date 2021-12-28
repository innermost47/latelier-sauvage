import { useEffect, useState } from "react";
import axios from "axios";
import "../style/activites.css";

const Activites = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8000/activities")
      .then((res) => setData(res.data));
  }, []);
  return (
    <section id="activities">
      <div className="container">
        <div className="row">
          <h2 className="sectionTitle activitiesTitle">LES ACTIVITÉS</h2>
          {data.map((content) => (
            <div key={content.id} className="col-md-4">
              <div className="imageContainer">
                <img
                  src={"http://localhost:8000/img/" + content.image}
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

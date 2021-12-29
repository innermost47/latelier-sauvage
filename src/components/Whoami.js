import { useEffect, useState } from "react";
import axios from "axios";
import { url } from "../js/Constantes";
import "../style/whoami.css";

const Whoami = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get(url + "whoami").then((res) => setData(res.data));
  }, []);
  return (
    <section id="whoami">
      <div className="container">
        <div className="row">
          <h2 className="sectionTitle text-center">QUI SUIS-JE ?</h2>
          {data.map((content, key) => (
            <div className="row" key={key}>
              <div className="col-md-6">
                <div className="imageContainerWhoAmI">
                  <img src={url + "img/" + content.image} alt="data.image" />
                </div>
              </div>
              <div className="col-md-6">
                <p>{content.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Whoami;

import { useEffect, useState } from "react";
import axios from "axios";
import { url } from "../js/Constantes";
import "../style/whoami.css";
import { decode } from "html-entities";

const Whoami = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get(url + "whoami").then((res) => setData(res.data));
  }, []);
  return (
    <section id="whoami">
      <div className="container">
        <h2 className="sectionTitle text-center">QUI SUIS-JE ?</h2>

        <div className="row">
          <div className="col-md-6">
            <div className="imageContainerWhoAmI">
              <img src={url + "img/" + data.image} alt="data.image" />
            </div>
          </div>
          <div className="col-md-6">
            <p
              dangerouslySetInnerHTML={{ __html: decode(data.description) }}
            ></p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Whoami;

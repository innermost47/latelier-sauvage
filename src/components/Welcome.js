import { useEffect, useState } from "react";
import axios from "axios";
import { url } from "../js/Constantes";
import "../style/welcome.css";

const Welcome = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get(url + "welcome").then((res) => setData(res.data));
  }, []);

  return (
    <section id="welcome">
      <div className="container">
        <div className="row">
          <h2 className="sectionTitle">VOUS SOUHAITEZ</h2>
          {data.map((content) => (
            <div key={content.id} className="col-md-4">
              <img
                src={url + "img/" + content.image}
                alt={content.image}
                className="icon"
              />
              <p>{content.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Welcome;

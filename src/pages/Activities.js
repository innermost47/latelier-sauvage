import Footer from "../components/Footer";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { url } from "../js/Constantes";
import NavigationToHome from "../components/NavigationToHome";

const Activities = () => {
  window.scrollTo(0, 0);
  let id = useParams();
  id = id.activiteId;
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get(`${url}activities/${id}`).then((res) => setData(res.data));
  }, []);
  return (
    <div>
      <NavigationToHome />
      <div className="container content">
        <div className="row">
          <h2 className="sectionTitle text-center">{data.title}</h2>
          <div className="col-md-6">
            <p>{data.longDescription}</p>
            <p>Tarifs: {data.tarif}</p>
          </div>
          <div className="col-md-6">
            <div className="imageContainerActivitiesPage">
              <img src={url + "img/" + data.image} alt={data.image} />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Activities;

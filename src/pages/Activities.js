import Footer from "../components/Footer";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { url } from "../js/Constantes";
import Navigation from "../components/Navigation";
import { useNavigate } from "react-router-dom";

const Activities = () => {
  window.scrollTo(0, 0);
  let id = useParams();
  id = id.activiteId;
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const redirect = () => navigate("*");
  useEffect(() => {
    axios.get(`${url}activities/${id}`).then((res) => {
      if (res.data === null) {
        redirect();
      } else {
        setData(res.data);
      }
    });
  }, []);
  return (
    <div>
      <Navigation />
      <div className="container content">
        <div className="row mb-4">
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

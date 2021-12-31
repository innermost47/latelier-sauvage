import { useEffect, useState } from "react";
import axios from "axios";
import dateFormat from "dateformat";
import { url } from "../js/Constantes";
import { Carousel } from "../js/Carousel";
import "../style/events.css";

const Events = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get(url + "events").then((res) => {
      setData(res.data);
      let slidesVisible;
      let navigation;
      let viewPort = window.innerWidth;
      if (res.data.length === 1) {
        slidesVisible = 2;
        navigation = false;
      } else if (res.data.length === 2) {
        slidesVisible = 2;
        if (viewPort > 800) {
          navigation = false;
        } else {
          navigation = true;
        }
      } else if (res.data.length > 2) {
        slidesVisible = 3;
        if (viewPort > 800) {
          navigation = false;
        } else {
          navigation = true;
        }
      }
      new Carousel(document.querySelector("#carousel"), {
        slidesToScroll: 1,
        slidesVisible,
        loop: true,
        navigation,
      });
    });
  }, []);
  return (
    <section id="events">
      <div className="container">
        <div className="row">
          <h2 className="sectionTitle">LES ÉVÈNEMENTS</h2>
          {data.length > 0 ? (
            <div id="carousel">
              {data.map((content, index) => (
                <div key={index} className="carousel--block">
                  <div className="imageContainer">
                    <img
                      src={url + "img/" + content.image}
                      alt={content.image}
                    />
                  </div>
                  <div className="carousel--title">
                    <h4>{content.title}</h4>
                  </div>
                  <div className="iconForEvents">
                    <img src="img/place.png" alt="here is the place to be" />
                    {content.place}
                  </div>
                  <div className="iconForEvents">
                    <img
                      src="img/calendar.png"
                      alt="here is the time to be"
                      className="mx-1"
                    />
                    {dateFormat(content.startAt, "dd/mm/yy HH:MM")}-
                    {dateFormat(content.endAt, "dd/mm/yy HH:MM")}
                  </div>
                  <div className="carousel--text">{content.description}</div>
                  <a
                    href={content.link}
                    className="btn btn-green text-light mt-4 left"
                    target="_blank"
                    rel="noreferrer"
                  >
                    S'inscrire
                  </a>
                </div>
              ))}
            </div>
          ) : (
            <h5 className="mt-4 text-center">
              Désolé, aucun évènement prévu actuellement
            </h5>
          )}
        </div>
      </div>
    </section>
  );
};

export default Events;

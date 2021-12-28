import { useEffect, useState } from "react";
import axios from "axios";
import dateFormat from "dateformat";
import { Carousel } from "../js/Carousel";
import "../style/events.css";

const Events = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:8000/events").then((res) => {
      setData(res.data);
      new Carousel(document.querySelector("#carousel"), {
        slidesToScroll: 1,
        slidesVisible: 3,
        loop: true,
      });
    });
  }, []);
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return (
    <section id="events">
      <div className="container">
        <div className="row">
          <h2 className="sectionTitle">LES ÉVÈNEMENTS</h2>
          <div id="carousel">
            {data.map((content, index) => (
              <div key={index} className="carousel--block">
                <div className="imageContainer">
                  <img
                    src={"http://localhost:8000/img/" + content.image}
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
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;

import React from "react";
import "../styles/Itinerary.css";
import flor from "../assets/img/flor-4.png";

import fiesta from "../assets/img/fiesta.png";
import cena from "../assets/img/cena.png";
import fotos from "../assets/img/fotos.png";
import brindis from "../assets/img/brindis.png";
import reloj from "../assets/img/reloj.png";
import ceremonia from "../assets/img/ceremonia.png";
import novios from "../assets/img/novios.png";
import pastel from "../assets/img/pastel.png";
import recepcion from "../assets/img/recepcion.png";

export default function Itinerary() {
  const eventsLeft = [
    { time: "19:00 hs", title: "Llegada de invitados", img: reloj },
    { time: "", title: "", img: "" },
    { time: "20:30 hs", title: "Llegada de los novios", img: novios },
    { time: "", title: "", img: "" },
    { time: "21:30 hs", title: "Receso y fotos", img: fotos },
    { time: "", title: "", img: "" },
    { time: "22:50 hs", title: "Brindis", img: brindis },
    { time: "", title: "", img: "" },
    { time: "00:00 hs", title: "Fiesta", img: fiesta },
  ];

  const eventsRight = [
    { time: "", title: "", img: "" },
    { time: "19:30 hs", title: "Recepcion", img: recepcion },
    { time: "", title: "", img: "" },
    { time: "20:45 hs", title: "Ceremonia", img: ceremonia },
    { time: "", title: "" },
    { time: "22:15 hs", title: "Cena", img: cena },
    { time: "", title: "", img: "" },
    { time: "23:40 hs", title: "Corte del pastel", img: pastel },
  ];

  return (
    <div className="itinerary-container">
      <div className="flor-itinerary flor-itinerary-top">
        <img src={flor} alt="flor" />
      </div>
      <h2 className="title-primary-itinerary">Itinerario</h2>
      <div className="itinerary-list">
        <div className="subcontainer-item">
          {eventsLeft.map((event, index) => (
            <div key={index} className="container-item">
              <div className="flor-item-itinerary">
                {event.img && <img src={event.img} alt={event.title} />}
              </div>
              <h3 className="time">{event.time}</h3>
              <h4 className="title">{event.title}</h4>
            </div>
          ))}
        </div>
        <div className="itinerary-item"></div>
        <div className="subcontainer-item">
          {eventsRight.map((event, index) => (
            <div key={index} className="container-item">
              <div className="flor-item-itinerary">
                {event.img && <img src={event.img} alt={event.title} />}
              </div>
              <h3 className="time">{event.time}</h3>
              <h4 className="title">{event.title}</h4>
            </div>
          ))}
        </div>
      </div>
      <div className="flor-itinerary flor-itinerary-down">
        <img src={flor} alt="flor" />
      </div>
    </div>
  );
}

import React from "react";
import "../styles/Itinerary.css";

export default function Itinerary() {
  const eventsLeft = [
    { time: "19:00 hs", title: "Llegada de invitados" },
    { time: "", title: "" },
    { time: "19:45 hs", title: "Ceremonia Civil" },
    { time: "", title: "" },
    { time: "21:45 hs", title: "Cena" },
    { time: "", title: "" },
    { time: "05:00 hs", title: "Cierre" },
  ];

  const eventsRight = [
    { time: "", title: "" },
    { time: "19:30 hs", title: "Llegada de los novios" },
    { time: "", title: "" },
    { time: "20:45 hs", title: "Receso y Fotos" },
    { time: "", title: "" },
    { time: "00:00 hs", title: "Baile y Fiesta" },
  ];

  return (
    <div className="itinerary-container">
      <h2 className="title-primary-itinerary">Itinerario</h2>
      <div className="itinerary-list">
        <div>
          {eventsLeft.map((event, index) => (
            <div key={index} className="container-item">
              <h3 className="time">{event.time}</h3>
              <h4 className="title">{event.title}</h4>
            </div>
          ))}
        </div>
        <div className="itinerary-item"></div>
        <div>
          {eventsRight.map((event, index) => (
            <div key={index} className="container-item">
              <h3 className="time">{event.time}</h3>
              <h4 className="title">{event.title}</h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

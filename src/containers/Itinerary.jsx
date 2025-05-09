import React from "react";
import "../styles/Itinerary.css";

export default function Itinerary() {
  const events = [
    { time: "19:00 hs", title: "Llegada de invitados"},
    { time: "19:30 hs", title: "Llegada de los novios"},
    { time: "19:45 hs", title: "Ceremonia Civil"},
    { time: "20:45 hs", title: "Receso y Fotos"},
    { time: "21:45 hs", title: "Cena"},
    { time: "00:00 hs", title: "Baile y Fiesta"},
    { time: "05:00 hs", title: "Cierre"},
  ];

  return (
    <div className="itinerary-container">
      <h2 className="title-primary-itinerary">Itinerario</h2>
      <div className="itinerary-list">
        {events.map((event, index) => (
          <div key={index} className="itinerary-item">
            <h3 className="time">{event.time}</h3>
            <h4 className="title">{event.title}</h4>
          </div>
        ))}
      </div>
    </div>
  );
}

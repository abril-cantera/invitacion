import React from "react";
import "../styles/AddToCalendar.css";
import { FaCalendarCheck } from "react-icons/fa";

export default function AddToCalendar({
  title,
  start,
  end,
  details,
  location,
}) {
  function generateICS({ title, start, end, details, location }) {
    const formatDate = (date) => {
      const pad = (n) => (n < 10 ? "0" + n : n);
      return (
        date.getUTCFullYear().toString() +
        pad(date.getUTCMonth() + 1) +
        pad(date.getUTCDate()) +
        "T" +
        pad(date.getUTCHours()) +
        pad(date.getUTCMinutes()) +
        pad(date.getUTCSeconds()) +
        "Z"
      );
    };

    const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
BEGIN:VEVENT
SUMMARY:${title}
DTSTART:${formatDate(start)}
DTEND:${formatDate(end)}
DESCRIPTION:${details}
LOCATION:${location}
END:VEVENT
END:VCALENDAR`;

    const blob = new Blob([icsContent], { type: "text/calendar" });
    return URL.createObjectURL(blob);
  }

  const icsUrl = generateICS({ title, start, end, details, location });

  return (
    <div className="container-calendar-primary">
      <div className="link-calendar">
        <FaCalendarCheck />
        <a href={icsUrl} download={`${title}.ics`} className="boton-calendario">
          Agendar Fecha
        </a>
      </div>
    </div>
  );
}

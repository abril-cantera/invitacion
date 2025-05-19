import { useState, useEffect } from "react";
import "../styles/Countdown.css";
import AddToCalendar from "../components/AddToCalendar";

export default function Countdown({ timezone = -3, onFinish = () => {} }) {
  const startDate = new Date(Date.UTC(2027, 7, 28, 22, 0));
  const endDate = new Date(Date.UTC(2027, 7, 29, 5, 0));

  const targetDate = new Date(2027, 7, 28, 9, 30, 0);
  const [timeLeft, setTimeLeft] = useState(getTimeRemaining());
  const labels = {
    days: "Días",
    hours: "Horas",
    minutes: "Minutos",
    seconds: "Segundos",
  };

  function convertToTargetTimezone(date, tzOffset) {
    const localTime = date.getTime();
    const localOffset = date.getTimezoneOffset() * 60000;
    const utc = localTime + localOffset;
    return new Date(utc + 3600000 * tzOffset);
  }

  function getTimeRemaining() {
    const now = convertToTargetTimezone(new Date(), timezone);
    const difference = targetDate.getTime() - now.getTime();
    const time = Math.max(0, difference);

    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((time / 1000 / 60) % 60);
    const seconds = Math.floor((time / 1000) % 60);

    return { days, hours, minutes, seconds, time };
  }

  useEffect(() => {
    const interval = setInterval(() => {
      const updated = getTimeRemaining();
      setTimeLeft(updated);

      if (updated.time === 0) {
        clearInterval(interval);
        onFinish();
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container-one-date">
      <h2 className="title-date">NOS VEMOS EN:</h2>
      <div className="container-two-date">
        {Object.entries(labels).map(([unit, label]) => (
          <div key={unit} className="container-number-date">
            <div className="number-date">
              {timeLeft[unit] < 10 ? "0" + timeLeft[unit] : timeLeft[unit]}
            </div>
            <div className="text-date">{label}</div>
          </div>
        ))}
      </div>
      <div className="add-to-calendar-component">
        <AddToCalendar
          title="Nos Casamos! Abril y Willy"
          start={startDate}
          end={endDate}
          details="Celebremos este hermoso momento juntos!"
          location="https://maps.app.goo.gl/PCMiUivmbYKfLumy7"
        />
      </div>
    </div>
  );
}

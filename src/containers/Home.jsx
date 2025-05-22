import React, { useEffect, useState } from "react";
import "../styles/Home.css";
// import flor from "../assets/img/flor2.png";
// import flor from "../assets/img/flor.png";
// import flor from "../assets/img/flor3.png";
import flor from "../assets/img/flor-1.png";
import Curve from "../components/Curve";

export default function Home() {
  const [animarFlor, setAnimarFlor] = useState(false);

  useEffect(() => {
    setTimeout(() => setAnimarFlor(true), 100); // pequeño delay para que la transición se note
  }, []);

  return (
    <section className="container-one">
      <div className={`flor-up ${animarFlor ? "flor-up-activa" : ""}`}>
        <img src={flor} alt="flor" />
      </div>
      <div className="container-two">
        <h2 className="title-primary">Nos casamos</h2>
        <h1 className="title-secondary">Abril & Willy</h1>
        <h2 className="title-primary">28 · 08 · 2027</h2>
      </div>
      <div className={`flor-down ${animarFlor ? "flor-down-activa" : ""}`}>
        <img src={flor} alt="flor" />
      </div>
      {/* <Curve curve={0} /> */}
    </section>
  );
}

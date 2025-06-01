import React, { useEffect, useState } from "react";
import "../styles/Home.css";
import flor from "../assets/img/flor-1.png";

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
        <h2 className={`title-primary ${animarFlor ? "animar-texto" : ""}`}>
          Nos casamos
        </h2>
        <h1 className={`title-secondary ${animarFlor ? "animar-texto" : ""}`}>
          Abril & Willy
        </h1>
        {/* <div className={`linea ${animarFlor ? "animar-linea" : ""}`}>
          <img src={linea} alt="linea" />
        </div> */}
      </div>
      <div className={`flor-down ${animarFlor ? "flor-down-activa" : ""}`}>
        <img src={flor} alt="flor" />
      </div>
      {/* <Curve curve={0} /> */}
    </section>
  );
}

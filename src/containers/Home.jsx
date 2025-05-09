import React from "react";
import "../styles/Home.css";
import Curve from "../components/Curve";

export default function Home() {
  return (
    <section className="container-one">
      <div className="container-two">
        <h2 className="title-primary">Nos casamos</h2>
        <h1 className="title-secondary">Abril & Willy</h1>
        <h2 className="title-primary">16 · 01 · 2027</h2>
      </div>
      <Curve curve={0} />
    </section>
  );
}

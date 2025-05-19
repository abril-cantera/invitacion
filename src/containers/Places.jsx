import React from "react";
import iglesia from "../assets/img/2.png";
import { FaMapMarkerAlt } from "react-icons/fa";
import "../styles/Places.css";
import Curve from "../components/Curve";

export default function Places() {
  return (
    <div className="container-one-places">
      {/* <Curve curve={1} /> */}
      {/* <div className="container-title">
        <h2>Te esperamos para celebrar nuestra boda</h2>
      </div> */}
      <div className="container-date">
        <div className="subcontainer-date">
          <h5>SABADO</h5>
          <h2>28</h2>
          <h5>AGOSTO</h5>
        </div>
      </div>
      <div className="container-two-place">
        <div className="subcontainer-two-place">
          <h3>CEREMONIA CIVIL Y FIESTA</h3>
          <div className="container-data">
            <div>
            <img className="container-img" src={iglesia} alt="" />
            </div>
            <div>
              <h4>Salon de Eventos Hualilan</h4>
              <h4>22:00 hs</h4>
              <div className="link-place">
                <FaMapMarkerAlt className="icon-map"/>
                <a className="btn-a" href="https://maps.app.goo.gl/4sGbo9hjKyK97EGz5">Como Llegar</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Curve curve={0} />
    </div>
  );
}

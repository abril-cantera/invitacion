import React from "react";
import florLinea1 from "../assets/img/flor-linea-1.png";
import florLinea2 from "../assets/img/flor-linea-2.png";
import { FaMapMarkerAlt } from "react-icons/fa";
import "../styles/Places.css";
import Curve from "../components/Curve";
import DateContainer from "../components/DateContainer";

export default function Places() {
  return (
    <div>
      <DateContainer />
      <div className="container-one-places">
        <Curve curve={1} />
        <div className="container-two-place">
          <div className="container-individual">
            <div>
              <h4>
                A
              </h4>
            </div>
            <div className="line"></div>
            <div>
              <img className="container-img-2" src={florLinea1} alt="" />
            </div>
          </div>
          <div className="container-individual">
            <div>
              <img className="container-img-1" src={florLinea2} alt="" />
            </div>
            <div className="line"></div>
            <div>
              <h4>
                W
              </h4>
            </div>
          </div>
          <div className="container-individual">
            <div></div>
            <div className="line"></div>
            <div>
              <h2>data</h2>
            </div>
          </div>
          {/* <div className="subcontainer-two-place">
            <h3>CEREMONIA CIVIL Y FIESTA</h3>
            <div className="container-data">
              <div>
                <img className="container-img" src={iglesia} alt="" />
              </div>
              <div>
                <h4>Salon de Eventos Hualilan</h4>
                <h4>22:00 hs</h4>
                <div className="link-place">
                  <FaMapMarkerAlt className="icon-map" />
                  <a
                    className="btn-a"
                    href="https://maps.app.goo.gl/4sGbo9hjKyK97EGz5"
                  >
                    Como Llegar
                  </a>
                </div>
              </div>
            </div>
          </div> */}
        </div>
        <Curve curve={0} />
      </div>
    </div>
  );
}

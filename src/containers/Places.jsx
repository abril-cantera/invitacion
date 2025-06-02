import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import "../styles/Places.css";
import DateContainer from "../components/DateContainer";
import aw from "../assets/img/aw.png";
import flor from "../assets/img/flor3.png";

export default function Places() {
  return (
    <div>
      <DateContainer />
      <div className="conatiner-primary-places">
        <div className="container-decorartion-places">
          <div className="subcontainer-decoration">
            <div className="aw-wrapper">
              <img
                className="flor flor-top"
                src={flor}
                alt="Decoración floral"
              />
              <img className="aw-img" src={aw} alt="a | w" />
              <img
                className="flor flor-bottom"
                src={flor}
                alt="Decoración floral"
              />
            </div>
          </div>
          <div className="subcontainer-places">
            <div>
              <h4>Salon de Eventos</h4>
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
        </div>
      </div>
    </div>
  );
}

import React from "react";
import florLinea1 from "../assets/img/flor-linea-1.png";
import florLinea2 from "../assets/img/flor-linea-2.png";
import { FaMapMarkerAlt } from "react-icons/fa";
import "../styles/Places.css";
import Curve from "../components/Curve";
import DateContainer from "../components/DateContainer";
import aw from "../assets/img/aw.png";
import flor from "../assets/img/flor3.png";


export default function Places() {
  return (
    <div>
      <DateContainer />
      <div className="container-one-places">
        <Curve curve={1} />
        <div className="subcontainer-place">
          <img className="flor" src={flor} alt="" />
          <img src={aw} alt="" />
          <img className="down-flor" src={flor} alt="" />
        </div>
        <Curve curve={0} />
      </div>
    </div>
  );
}

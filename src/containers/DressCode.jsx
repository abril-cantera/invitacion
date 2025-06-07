import React from "react";
import "../styles/DressCode.css";
import traje from "../assets/img/Traje.png";
import vestido from "../assets/img/Vestido.png";

export default function DressCode() {
  return (
    <div className="dresscode-container">
      <div className="dresscode-subcontainer">
        <h2 className="dresscode-title">Semi Formal</h2>
        <div className="dresscode-info">
          <div className="dresscode-subinfo">
            <h2>Hombres</h2>
            <div className="dresscode-img-info">
              <div className="dresscode-subinfo-info">
                <p>Traje/Blazer</p>
                <p>Zapatos formal/semi formal</p>
                <p>NO SPORT</p>
              </div>
              <img fill="#ffffff" className="container-img" src={traje} alt="" />
            </div>
          </div>
          <div className="dresscode-subinfo">
            <h2>Mujeres</h2>
            <div className="dresscode-img-info">
              <img className="container-img" src={vestido} alt="" />
              <div className="dresscode-subinfo-info">
                <p>Vestido/Mono Largo</p>
                <p>Traje/Blazer Largo</p>
                <p>NO SPORT</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

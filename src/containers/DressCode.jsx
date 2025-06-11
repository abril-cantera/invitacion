import React from "react";
import "../styles/DressCode.css";
// import traje from "../assets/img/Traje.png";
import traje from "../assets/img/traje2.png";
import flor from "../assets/img/flor-4.png";
import vestido from "../assets/img/vestido2.png";

export default function DressCode() {
  return (
    <div className="dresscode-container">
      <div className="flor-dresscode flor-dresscode-top">
        <img src={flor} alt="flor" />
      </div>
      <div className="dresscode-subcontainer">
        <h2 className="dresscode-title">CODIGO DE VESTIMENTA</h2>
        <div className="dresscode-info">
          <div className="dresscode-subinfo">
            <div className="dresscode-img-info">
              <img className="container-img" src={vestido} alt="" />
            </div>
          </div>
          <div className="dresscode-subinfo">
            <div className="dresscode-img-info">
              <img className="container-img" src={traje} alt="" />
            </div>
          </div>
        </div>
        <div>
          <h2 className="dresscode-text">Formal</h2>
          <div className="dresscode-subinfo-text">
            <h3>MUJERES</h3>
            <div className="dresscode-subinfo-info">
              <p>Vestido/Mono/Traje largo</p>
              <p>Evitar vestir de blanco o colores muy similares (como marfil, crema, champán, beige muy claro o tonos muy pálidos que puedan confundirse con blanco)</p>
              <p>NO SPORT</p>
            </div>

            <h3>HOMBRES</h3>
            <div className="dresscode-subinfo-info">
              <p>Blazer/Saco - Pantalón de vestir o chino</p>
              <p>Evitar vestir de Verde o colores muy similares</p>
              <p>No pantalones rotos o deportivos</p>
              {/* <p>NO SPORT</p> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

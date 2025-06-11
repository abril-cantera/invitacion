import Dropdown from "../components/Dropdown";
import DressCode from "./DressCode";
import "../styles/ImportantInformation.css";
import Curve from "../components/Curve";
// import flor from "../assets/img/flor-4.png";

export default function ImportantInformation() {
  return (
    <div className="information-container">
      {/* <div className="flor-information flor-information-down">
        <img src={flor} alt="flor" />
      </div> */}
      {/* <div className="information-subcontainer-title">
        <h2>DUDAS?</h2>
        <h4>Te contamos todos los detalles</h4>
      </div> */}
      {/* <Dropdown title="CODIGO DE VESTIMENTA"> */}
        <DressCode />
      {/* </Dropdown> */}

      {/* <Dropdown title="NIÑOS">
        <p>
          Si decidís traer niños, por favor avisanos con anticipación. No habrá
          entretenimiento ni zonas adaptadas.
        </p>
      </Dropdown> */}

      {/* <Curve curve={0} /> */}
    </div>
  );
}

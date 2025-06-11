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
      <div>
        <DressCode />
      </div>

      <div className="information-subcontainer-title">
        <h2>INFORMACION IMPORTANTE</h2>
        <p>
          "La celebración está pensada para adultos. Solo estarán presentes
          nuestros hermanos menores y sobrinos cercanos. Gracias por su
          comprensión y por acompañarnos en un momento tan importante para
          nosotros."
        </p>
      </div>

      {/* <Curve curve={0} /> */}
    </div>
  );
}

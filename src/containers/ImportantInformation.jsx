import DressCode from "./DressCode";
import "../styles/ImportantInformation.css";

export default function ImportantInformation() {
  return (
    <div className="information-container">
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

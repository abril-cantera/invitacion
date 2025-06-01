import Dropdown from "../components/Dropdown";
import DressCode from "./DressCode";
import "../styles/ImportantInformation.css";
import Curve from "../components/Curve";

export default function ImportantInformation() {
  return (
    <div className="information-container">
      {/* <Curve curve={1} /> */}
      <div className="information-subcontainer-title">
        <h2>DUDAS?</h2>
        <h4>Te contamos todos los detalles</h4>
      </div>
        <Dropdown title="DRESS CODE">
          <DressCode />
        </Dropdown>

        <Dropdown title="NIÑOS">
          <p>
            Si decidís traer niños, por favor avisanos con anticipación. No
            habrá entretenimiento ni zonas adaptadas.
          </p>
        </Dropdown>

        <Dropdown title="Alojamiento">{/* <Alojamiento /> */}</Dropdown>
      <Curve curve={0} />
    </div>
  );
}

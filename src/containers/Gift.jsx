import "../styles/Gift.css";
import regalo from "../assets/img/regalo.png";

export default function Gift() {
  return (
    <div className="gift-container">
      <h2>Regalos</h2>
      <div className="icon-gift">
        <img src={regalo} alt="" />
      </div>
      <p>Nuestro mejor regalo sera tu compañia, pero si deseas obsequiarnos algo, te agradecemos que sea a travez de: </p>
      <div>
        <p>Nombre de Banco</p>
        <p>CBU: 1234567890</p>
        <p>A nombre de: Nombre</p>
      </div>
    </div>
  );
}

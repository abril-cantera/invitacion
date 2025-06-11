import { useState } from "react";
import "../styles/Extras.css";
import disco from "../assets/img/disco.png";
import Gift from "./Gift";

export default function Extras() {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [cancion, setCancion] = useState("");
  const [artista, setArtista] = useState("");
  const [link, setLink] = useState("");

  const seeForm = () => setIsFormVisible(!isFormVisible);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const url =
      "https://script.google.com/macros/s/AKfycby6JY14ci5P0MBfxQgBWdYgKgTsPoc_2m3ZOF6SO7rWqyVE_BD76Zu4_B7GOky_F165ow/exec"; // tu URL correcta

    // Convertir datos a formato tipo formulario
    const formData = new URLSearchParams();
    formData.append("cancion", cancion);
    formData.append("artista", artista);
    formData.append("link", link);

    try {
      const res = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: formData.toString(),
      });

      const json = await res.json();

      if (json.mensaje) {
        alert("¡Gracias por tu sugerencia!");
        setCancion("");
        setArtista("");
        setLink("");
      } else {
        alert("Error: " + (json.error || "Respuesta inesperada"));
      }
    } catch (error) {
      alert("Error al enviar datos: " + error.message);
    }
  };

  return (
    <div className="extras-container">
      <div className="extras-subcontainer">
        <h2>En una buena fiesta tiene que sonar...</h2>
        <div className="icon-music">
          <img src={disco} alt="" />
        </div>
        <p>
          Ayudanos a armar la lista de canciones que no pueden faltar esa noche
        </p>
        <div className="link-music">
          <button className="btn" onClick={seeForm}>
            Sugerir tu tema
          </button>
        </div>

        <div className={`container-form ${isFormVisible ? "visible" : ""}`}>
          <form className="sing-form" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Nombre de la canción"
              value={cancion}
              onChange={(e) => setCancion(e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="Artista"
              value={artista}
              onChange={(e) => setArtista(e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="Link de la canción"
              value={link}
              onChange={(e) => setLink(e.target.value)}
            />
            <button type="submit" className="btn">
              Enviar
            </button>
          </form>
        </div>
      </div>
      <div className="extras-subcontainer">
        <Gift/>
      </div>
    </div>
  );
}

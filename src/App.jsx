// import { HashRouter, Route, Routes } from 'react-router-dom'
import "./App.css";
import Home from "./containers/Home";
import Countdown from "./containers/Countdown";
import Places from "./containers/Places";
import Itinerary from "./containers/Itinerary";
import ImportantInformation from "./containers/ImportantInformation";

function App() {
  return (
    <>
      <div className="container-principal">
        <div className="container-primary">
          <div>
            <Home />
          </div>
          <div className="container-secondary">
            <div>
              <Countdown
                timezone={-3}
                onFinish={() => alert("¡Llego el Dia!")}
              />
            </div>
            <div>
              <div>
                <Places />
              </div>
            </div>
            {/* <div>
              <div>
                <Itinerary />
              </div>
            </div>
            <div>
              <ImportantInformation />
            </div> */}
          </div>
          {/* <div className="container-secondary">
            <h4>Confirmacion de asistencia</h4>
          </div>
          <div>
            <h4>En una buena fiesta tiene que sonar...</h4>
            <p>
              Ayudanos a armar la lista de canciones que no pueden faltar esa
              noche
            </p>
            <button>Sigeri tu tema aca</button>
          </div> */}
        </div>
      </div>
    </>
  );
}

export default App;

import "./App.css";
import Home from "./containers/Home";
import Countdown from "./containers/Countdown";
import Places from "./containers/Places";
import Itinerary from "./containers/Itinerary";
import ImportantInformation from "./containers/ImportantInformation";
import Extras from "./containers/Extras";

function App() {
  return (
    <>
      <div className="desktop-warning">
        <h2>Visualiza esta invitacion a travez de tu telefono</h2>
      </div>
      <div className="container-principal">
        <div className="container-primary">
          <div>
            <Home />
          </div>
          <div className="container-secondary">
            <div>
              <div>
                <Places />
              </div>
            </div>
            <div>
              <div>
                <Itinerary />
              </div>
              <div>
                <ImportantInformation />
              </div>
            </div>
            <div>
              <Extras />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

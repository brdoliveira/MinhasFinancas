import "bootswatch/dist/flatly/bootstrap.css";
import Navbar from "../components/Navbar";
import "../custom.css";
import Rotas from "./rotas";

function App() {
  return (
    <div className="App">
      <>
        <Navbar />
        <div className="container">
          <Rotas />
        </div>
      </>
    </div>
  );
}

export default App;

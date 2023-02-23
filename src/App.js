import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Contacto from "./Components/Contacto/Contacto";
import Historia from "./Components/Historia/Historia";
import Home from "./Components/Home/Home";
import Nav from "./Components/Nav/Nav";
import Noticias from "./Components/Noticias/Noticias";

function App() {
  return (
    <BrowserRouter>
      <div className="App" id="scrolling">
        <Nav />
        <Home />
        <Noticias/>
        <Historia />
        <Contacto />
        {/* <Route exact path={"/contacto"} component={Contacto} /> */}
      </div>
    </BrowserRouter>
  );
}

export default App;

import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import Contacto from "./Components/Contacto/Contacto";
import Historia from "./Components/Historia/Historia";
import Home from "./Components/Home/Home";
import Nav from "./Components/Nav/Nav";
import Noticias from "./Components/Noticias/Noticias";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <div className="App" id="scrolling">
        <Nav />
        <Home />

        <Historia />
        <Contacto />
        {/* <Route exact path={"/contacto"} component={Contacto} /> */}
        <Route exact path="/noticias">
          <Noticias />
        </Route>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;

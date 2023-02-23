import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import Contacto from "./Components/Contacto/Contacto";
import Historia from "./Components/Historia/Historia";
import Home from "./Components/Home/Home";
import Nav from "./Components/Nav/Nav";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <Home />
        <Historia />
        {/* <Contacto /> */}
        <Route exact path={"/contacto"} component={Contacto} />
      </div>
    </BrowserRouter>
  );
}

export default App;

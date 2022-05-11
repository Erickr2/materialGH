import React from "react";
import { Header } from "./components/header";
import { BrowserRouter as Router } from "react-router-dom";
import { Pages } from "./components/Pages";
import "boxicons";
import { Dataprovied } from "./context/Dataprovied";
import { Carrito } from "./components/cart/index";


function App() {
  return (
    <Dataprovied>
      <div className="App">
        <Router>
          <Header />
          <Pages />
          <Carrito />
        </Router>
      </div>
    </Dataprovied>
  );
}

export default App;

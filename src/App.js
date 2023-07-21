import React from "react";
import Footer from "./components/Footer";
import Homepage from "./container/Homepage";
//網址Routing
//import About from "./pages/About";
//import { Switch, Route } from "react-router-dom";
import "./App.sass";

function App() {
  return (
    <div className="App">
      <Homepage />

      {/*<About />*/}

      <Footer />
    </div>
  );
}

export default App;

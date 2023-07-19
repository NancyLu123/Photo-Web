import React from "react";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Homepage from "./container/Homepage";
//網址Routing
//import About from "./pages/About";
//import { Switch, Route } from "react-router-dom";
import "./styles/style.css";

function App() {
  return (
    <div className="App">
      <Nav />

      <Homepage />

      {/*<About />*/}

      <Footer />
    </div>
  );
}

export default App;

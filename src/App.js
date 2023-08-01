import React from "react";
import { IntlProvider } from "react-intl";
import Footer from "./components/Footer";
import Homepage from "./container/Homepage";
//網址Routing
//import About from "./pages/About";
//import { Switch, Route } from "react-router-dom";
import "./App.sass";

function App() {
  const locale = navigator.language;

  return (
    <IntlProvider locale={locale}>
      <div className="App">
        <Homepage />

        <Footer />
      </div>
    </IntlProvider>
  );
}

export default App;

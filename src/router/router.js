import React from "react";
import { HashRouter } from "react-router-dom";
import Routes from "./routerConfig";

const Router = () => {
  const component = (
    <HashRouter>
      <Routes />
    </HashRouter>
  );
  return component;
};

export default Router;

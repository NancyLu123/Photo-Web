import React from "react";
// import styled from "styled-components";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { AppRoutes } from "../router";
import "../App.sass";

const PhotoApp = () => {
  return (
    <>
      <Header />
      <div className="main">
        <AppRoutes />
      </div>
      <Footer />
    </>
  );
};

export default PhotoApp;

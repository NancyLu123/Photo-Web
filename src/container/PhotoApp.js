import React from "react";
// import styled from "styled-components";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { AppRoutes } from "../router";
import { FloatButton } from "antd";
import "../App.sass";

const PhotoApp = () => {
  return (
    <>
      <Header />
      <div className="main">
        <AppRoutes />
        <FloatButton.BackTop />
      </div>
      <Footer />
    </>
  );
};

export default PhotoApp;

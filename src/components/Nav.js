import React from "react";
import PhotoSearch from "../components/Search";
import "./Nav.sass";

const Nav = ({ setCurrentSearch }) => {
  return (
    <div className="header">
      <div className="title">Picture search web</div>
      <div className="search">
        <PhotoSearch setCurrentSearch={setCurrentSearch} />
      </div>
    </div>
  );
};

export default Nav;

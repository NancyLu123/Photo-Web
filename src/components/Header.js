import React from "react";
import Search from "./Search";
import "./Header.sass";

const Header = () => {
  return (
    <div className="header">
      <div className="title">Photo search web</div>
      <div className="search">
        <Search />
      </div>
    </div>
  );
};

export default Header;

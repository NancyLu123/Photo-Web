import React from "react";
import Search from "./Search";
import { Link } from "react-router-dom";
import PATH from "../router/pathConstants";
import "./Header.sass";

const Header = () => {
  return (
    <div className="header">
      <Link
        to={{
          pathname: PATH.HOMEPAGE_PHOTO,
        }}
      >
        <div className="title">Photo search web</div>
      </Link>
      <div className="search">
        <Search />
      </div>
    </div>
  );
};

export default Header;

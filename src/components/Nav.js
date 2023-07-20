import React from "react";
import "./Nav.sass";

//import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <ul>
        <li className="title">
          <p>Picture search web</p>
        </li>
        <li>
          <a href="/"></a>
        </li>
        <li>
          <a href="/about"></a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;

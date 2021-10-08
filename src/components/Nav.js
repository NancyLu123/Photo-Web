import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <ul>
        <li className="title">
          <p>Picture search web</p>
        </li>
        <li>
          <Link to="/"></Link>
        </li>
        <li>
          <Link to="/about"></Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;

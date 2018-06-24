import React from "react";
import { Link } from "react-router-dom";

const NavTabs = () => (
  <ul className="nav nav-tabs">
    <li className="nav-item">
      <Link
        to="/"
        className={
          window.location.pathname === "/home" ? "nav-link active" : "nav-link"
        }
      >
        Clicky Game
      </Link>
    </li>
    <li className="nav-item">
        Click on an image to start
    </li>
    <li className="nav-item">
      "Score: ""0" | "Top Score: ""0"
    </li>
  </ul>
);

export default NavTabs;

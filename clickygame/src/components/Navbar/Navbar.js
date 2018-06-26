import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => (
  <nav className="navbar navbar-dark bg-primary">
    <ul className="navbar-nav">
      <li
        className={
          window.location.pathname === "/" ||
            window.location.pathname === "/home"
            ? "nav-item active"
            : "nav-item"}
      >
        <Link to="/" className="nav-link">
          Clicky Game
            </Link>
      </li>
      <li className="nav-item">
        <span className="navbar-text">
          You guessed correctly!</span>
      </li>
      <li className="nav-item">
        Clicky Game
      </li>
    </ul>
  </nav>
);

export default Navbar;

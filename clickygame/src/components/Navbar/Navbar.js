import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = props => (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div>
        <ul className="navbar-nav">
          <li
            className={
              window.location.pathname === "/" ||
              window.location.pathname === "/home"
                ? "nav-item active"
                : "nav-item"
            }
          >
            <Link to="/" className="nav-link">
              
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  
);

export default Navbar;

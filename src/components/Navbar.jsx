import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import React from "react";
import "./Navbar.css";
import { links } from "../data.js";
import { GoThreeBars } from "react-icons/go";
import { MdOutlineClose } from "react-icons/md";
import Logo from "../images/logo.png";

const Navbar = () => {
  const [showNav, setShowNavee] = useState(false);
  return (
    <nav>
      <div className="container nav__container">
        <Link to="/home" className="logo">
          <img
            src={Logo}
            alt="Nav Logo"
            onClick={() => setShowNavee((prev) => !prev)}
          />
        </Link>
        <ul className={`nav__links ${showNav ? "show__nav" : "hide__nav"}`}>
          {links.map(({ name, path }, index) => {
            return (
              <li key={index}>
                <NavLink
                  to={path}
                  className={({ isActive }) => (isActive ? "active-nav" : "")}
                  onClick={() => setShowNavee((prev) => !prev)}
                >
                  {name}
                </NavLink>
              </li>
            );
          })}
        </ul>
        <button
          className="nav__toggle-btn"
          onClick={() => setShowNavee((prev) => !prev)}
        >
          {showNav ? <MdOutlineClose /> : <GoThreeBars />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

import React from "react";
import { NavLink } from "react-router-dom";

const linkStyles = {
    display: "inline-block",
    display: "inline-block",
    width: "100px",
    padding: "12px",
    margin: "5px 11px",
    background: "blue",
    textDecoration: "none",
    color: "white",
};
function NavBar() {
  return (
    <div className="navbar">
      <NavLink
        className="link"
        to="/"
        exact
        style={linkStyles}
        activeStyle={{
          background:"darkblue"
        }}
      >
        Home
      </NavLink>
      <NavLink
        className="link"
        to="/ouranimals"
        exact
        style={linkStyles}
        activeStyle={{
          background:"darkblue"
        }}
      >
        Our Animals
      </NavLink>
      <NavLink
        className="link"
        to="/addnewanimals"
        exact
        style={linkStyles}
        activeStyle={{
          background:"darkblue"
        }}
      >
        Add Animals
      </NavLink>
    </div>
  )
}

export default NavBar;
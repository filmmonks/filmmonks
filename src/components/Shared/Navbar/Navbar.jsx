import React, { useEffect } from "react";
import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import logo from "../../../Assets/Logo/logo.png";
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../../Assets/Logo/logo.png";

const Navbar = () => {
  const menuItem = [
    { _id: 1, menu: "Home", route: "#" },
    { _id: 2, menu: "About", route: "#about" },
    { _id: 3, menu: "Service", route: "#service" },
    { _id: 4, menu: "Work", route: "#work" },
    { _id: 5, menu: "Team", route: "#team" },
    { _id: 6, menu: "Monks Gallery", route: "#monks-gallery" },
  ];
  const [active, setActive] = useState(false);
  const changeBackground = () => {
    console.log(window.scrollY);
    if (window.scrollY >= 80) {
      setActive(true);
    } else {
      setActive(false);
    }
  };
  window.addEventListener("scroll", changeBackground);
  return (
    <div>
      <div
        className={
          active
            ? "navbar fixed bg-[#000] text-[#fff] z-10 px-20"
            : "navbar fixed bg-transparent text-[#fff] z-10 px-20"
        }
      >
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {menuItem.map((menu) => (
                <li className="text-[#000] uppercase">
                  <a href={menu.route}>{menu.menu}</a>
                </li>
              ))}
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">
            <img className="h-6" src={logo} alt="" />
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal py-5">
            {menuItem.map((menu) => (
              <li className=" uppercase">
                <a href={menu.route}>{menu.menu}</a>
              </li>
            ))}
            <li>
              <Link to="/contact">CONTACT</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

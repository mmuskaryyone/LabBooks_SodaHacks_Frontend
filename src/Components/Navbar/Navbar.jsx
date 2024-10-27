// src/Components/Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; // CSS file for styling the navbar
import logo from "../../assets/logo.png"; // Ensure logo path is correct

const Navbar = () => (
  <div className="navbar">
    <img src={logo} alt="Logo" className="logo" />
    <ul>
    <li><Link to="/dashboard">PyBooks</Link></li>
      <li><Link to="/dashboard">Dashboard</Link></li>
    </ul>
  </div>
);

export default Navbar;

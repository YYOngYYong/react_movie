import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    // <div className="nav">
    //   <Link to="/">Home</Link>
    //   <Link to="/about">About</Link>
    // </div>
    <nav id="navbar">
      <div className="navbar__logo">
        <Link to="/" className="title">
          Yongflix
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;

import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header-container">
      <Link to="/home">
        <p className="logo">Post App.</p>
      </Link>
      <div className="header-links">
        <Link className="links" to="/register">
          Register
        </Link>
        <Link className="links" to="/login">
          Login
        </Link>
      </div>
    </div>
  );
};

export default Header;

import React from "react";
import "./styles.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { getCookies } from "../../../utils/CookiesUtils";

const DashBoardHeader = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8000/auth/logout",
        {},
        {
          withCredentials: true,
        }
      );
      console.log(response);
      navigate("/register");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="header-container">
      <p className="logo" onClick={() => navigate("/home")}>
        Post App.
      </p>
      <div className="header-links">
        <Link
          className="links"
          to="/dashboard/all-posts"
        >
          All-Posts
        </Link>
        <Link
          className="links"
          to="/dashboard/my-posts"
        >
          My-Posts
        </Link>
        {getCookies() ? <p className="links" onClick={handleLogout}>Logout</p> : ""}
      </div>
    </div>
  );
};

export default DashBoardHeader;

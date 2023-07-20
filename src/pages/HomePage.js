import React from "react";
import Header from "../components/Header";
import displayImage from "../assets/displayimage.png";

// Define the HomePage component
const HomePage = () => {
  return (
    <div>
      <Header />
      <h1 style={{ color: "var(--darkgrey)", padding: "10px 5px" }}>
        Welcome to the Post App!
      </h1>
      <div className="homepage-container">
        <h1 style={{ color: "var(--blue)", padding: "5px" }}>
          Tel your Story to World!!
        </h1>
        <p style={{ color: "var(--black)", padding: "5px" }}>
          Join with us! Register & Login!!
        </p>
        <img src={displayImage} alt="error loading" />
      </div>
    </div>
  );
};

export default HomePage;

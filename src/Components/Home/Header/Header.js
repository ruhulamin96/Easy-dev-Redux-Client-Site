import React from "react";
import bgimage from "../../../images/bgimage.jpg";
import NavBar from "../../Shared/NavBar/NavBar";
import "./Header.css";
function Header() {
  return <div className="header_style">
      <img style={{opacity:"0.5",height:"32rem"}} className="w-100" src={bgimage} alt="" />
      <div className="centered fw-bold">
      <h1 className="my-4 fw-bold">EXPLORE YOUR KNOWLEDGE HERE...</h1>
      <h3>Choose from hundreds of online courses from top universities and specialist organisations.</h3>
      </div>
  </div>;
}

export default Header;

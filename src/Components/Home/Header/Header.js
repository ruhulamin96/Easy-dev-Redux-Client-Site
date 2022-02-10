import React from "react";
import bgimage from "../../../images/header.jpg";
import NavBar from "../../Shared/NavBar/NavBar";
import "./Header.css";
function Header() {
  return (
    <div className="header_style">
      <img style={{ opacity: "0.5" }} className="w-100" src={bgimage} alt="" />
      <div className="centered">
        <h3 className="my-4 fw-bold">WE BUILD FUTURE</h3>
        <p className="">
          Choose from hundreds of online courses from top universities and
          specialist organisations.
        </p>
        <div >
          <input type="text" />
          <button>SUBSCRIBE</button>
        </div>
      </div>
    </div>
  );
}

export default Header;

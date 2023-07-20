import React from "react";
import "./nav.scss";

import { Link, useNavigate } from "react-router-dom";

const Nav = () => {
  const navigate = useNavigate();
  const handleButtonClick = (e) => {
    const elementToScroll = document.getElementById(e);
    console.log(elementToScroll);
    if (elementToScroll) {
      elementToScroll.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="nav-section">
      <ul>
        <li onClick={() => handleButtonClick("aboutElement")}>About</li>
        <li onClick={() => handleButtonClick("projectElement")}>
          Sample Projects
        </li>
        <li onClick={() => handleButtonClick("skillElement")}>Skills</li>
        <li onClick={() => handleButtonClick("contactElement")}>Contact</li>
      </ul>
    </div>
  );
};

export default Nav;

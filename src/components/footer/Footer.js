import React from "react";
import "./footer.scss";
import { Navigate } from "react-router-dom";

import { AiOutlineGithub } from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="footer-section">
      <div className="language">EN</div>
      <div className="social-media">
        <a href="https://github.com/Muad1105">
          <AiOutlineGithub className="icons" />
        </a>
        <a href="https://www.linkedin.com/in/muad-noushad-4346b1166/">
          <BsLinkedin className="icons" />
        </a>
      </div>
    </div>
  );
};

export default Footer;

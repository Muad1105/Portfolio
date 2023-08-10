import React from "react";
import "./contact.scss";

import { AiOutlineGithub } from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs";

const Contact = () => {
  return (
    <div className="contact-section" id="contactElement">
      <h1>Let's build something.</h1>
      <div className="contact-description">
        <p>Get in touch </p>
        <div className="contact-details">
          <div className="email">
            <div className="email-title">Email</div>
            <a
              href="mailto:muad.noushad.92@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="custom-link"
            >
              muad.noushad.92@gmail.com
            </a>
          </div>
          <div className="social-media">
            <div className="connect-title">Connect</div>
            <div className="connect-icons">
              <a href="https://github.com/Muad1105">
                <AiOutlineGithub className="icons" />
              </a>
              <a href="https://www.linkedin.com/in/muad-noushad-4346b1166/">
                <BsLinkedin className="icons" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

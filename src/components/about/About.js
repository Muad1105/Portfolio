import React from "react";
import "./about.scss";
const About = () => {
  return (
    <div className="about-section" id="aboutElement">
      <p id="aboutElement"></p>
      <h1>About</h1>
      <div style={{ color: "green" }}>
        With an in-depth understanding of fullstack development, worked with
        projects specializing in creating dynamic and interactive user
        interfaces. With a strong foundation in JavaScript, HTML, and CSS, I
        build robust and efficient React applications and create fast, clean,
        maintainable web applications.
      </div>
      <div style={{ color: "orange" }}>
        Expertise extends to creating and integrating APIs, handling
        asynchronous operations, and implementing routing for seamless user
        experiences. Well-versed in Redux-toolkit store management. I have a
        keen eye for UI/UX design and committed to delivering user-friendly
        interfaces.
      </div>
      <div style={{ color: "white" }}>
        With strong problem-solving skills I can contribute to the success of
        development team.
      </div>
    </div>
  );
};

export default About;

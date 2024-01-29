import React from "react";
import "./skills.scss";

const Skills = () => {
  return (
    <div className="skills-section">
      <p id="skillElement"></p>
      <h1 className="skills-title">Skills</h1>
      <div className="language">
        <h3>JavaScript</h3>
        <ul>
          <li>ES6</li>
          <li>React</li>
          <li>TypeScript</li>
          <li>Node JS</li>
          <li>Redux</li>
          <li>Rest API</li>
        </ul>
      </div>
      <div className="language">
        <h3>HTML & CSS</h3>
        <ul>
          <li>responsive websites</li>
          <li>SASS</li>
          <li>Bootstrap</li>
          <li>Tailwind</li>
          <li>Styled Components</li>
          <li>Material UI</li>
        </ul>
      </div>
    </div>
  );
};

export default Skills;

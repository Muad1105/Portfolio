import React, { useEffect, useState } from "react";
import "./body.scss";

import projects from "./projects";

const Body = () => {
  const [projectList, setProjectList] = useState(projects);

  return (
    <div className="body-section" id="projectElement">
      <p></p>
      <h1>PROJECTS</h1>
      <div className="all-projects">
        {projectList.map((e, i) => {
          return (
            <div className="project" key={i}>
              <div className="details">
                <p>{e.name}</p>
                <p>{e.desc}</p>
                <p>DEVELOPMENT TOOLS</p>
                <ul>
                  {e.toolset.map((e, index) => {
                    return <li key={index}>{e}</li>;
                  })}
                </ul>
                <a href={e.url} style={{color:"red"}}>View project</a>
              </div>
              <div className="projectImage">
                <img src={e.image} alt="" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Body;

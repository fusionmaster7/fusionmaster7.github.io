import React from "react";
import Typing from "react-typing-animation";

const Skills = () => {
  return (
    <React.Fragment>
      {" "}
      <div className="project-container">
        <Typing speed={30}>
          <div className="project-heading">What I know:</div>;
        </Typing>
        <div className="project-row skills-row">
          <div className="skill">HTML</div>
          <div className="skill">CSS</div>
          <div className="skill">Javascript</div>
          <div className="skill">Typescript</div>
          <div className="skill">C/C++</div>
        </div>
        <div className="project-row skills-row">
          <div className="skill">node.js</div>
          <div className="skill">React.js</div>
          <div className="skill">express</div>
          <div className="skill">MongoDB</div>
          <div className="skill">SQL</div>
          <div className="skill">PostgreSQL</div>
        </div>
        <div className="project-row skills-row">
          <div className="skill">Django</div>
          <div className="skill">Flask</div>
          <div className="skill">Docker</div>
          <div className="skill">Firebase</div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Skills;

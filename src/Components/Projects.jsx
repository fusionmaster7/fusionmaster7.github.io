import React from "react";
import projects from "../projects.json";
import Typing from "react-typing-animation";

const Card = ({ project }) => {
  const renderStack = () => {
    return project.stack.map((tech, index) => {
      return (
        <div className="tech" key={index}>
          {tech}
        </div>
      );
    });
  };
  return (
    <div className="project-card">
      <div className="project-title">{project.name}</div>
      <hr className="project-sep" />
      <div className="project-desc">{project.desc}</div>
      <div className="tech-stack">{renderStack()}</div>
    </div>
  );
};

const Projects = () => {
  return (
    <div className="project-container">
      <Typing speed={30}>
        <div className="project-heading">What I have worked on:</div>
      </Typing>
      <div className="project-row">
        <Card project={projects[0]} />
        <Card project={projects[1]} />
        <Card project={projects[2]} />
      </div>
      <div className="project-row">
        <Card project={projects[3]} />
        <Card project={projects[4]} />
      </div>
    </div>
  );
};

export default Projects;

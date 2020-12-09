import React from "react";
import Typing from "react-typing-animation";

const Info = () => {
  return (
    <React.Fragment>
      {" "}
      <div className="project-container">
        <Typing speed={15}>
          <div className="project-heading">Some things about me:</div>;
        </Typing>
      </div>
    </React.Fragment>
  );
};

export default Info;

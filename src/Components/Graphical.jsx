import React, { useState } from "react";
import Header from "./Header";
import Info from "./Info";
import Projects from "./Projects";
import Skills from "./Skills";

const Graphical = () => {
  const [view, setView] = useState("info");

  const renderView = () => {
    switch (view) {
      case "info":
        return <Info />;
      case "skills":
        return <Skills />;
      case "projects":
        return <Projects />;
      default:
        return <Info />;
    }
  };

  const clickHandler = (e) => {
    e.preventDefault();
    const choice = e.target.innerHTML.toLowerCase();
    setView(choice);
  };

  return (
    <React.Fragment>
      <Header />
      <div className="gui-btn-row">
        <div>
          <button className="gui-btn" onClick={clickHandler}>
            Info
          </button>
        </div>
        <div>
          <button className="gui-btn" onClick={clickHandler}>
            Skills
          </button>
        </div>
        <div>
          <button className="gui-btn" onClick={clickHandler}>
            Projects
          </button>
        </div>
      </div>
      <div>{renderView()}</div>
    </React.Fragment>
  );
};

export default Graphical;

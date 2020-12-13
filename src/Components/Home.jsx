import React, { useContext, useEffect, useState } from "react";
import ParticlesBg from "particles-bg";
import particleConfig from "../particleConfig";
import Typing from "react-typing-animation";
import Footer from "./Footer";
import Terminal from "./Terminal";
import Graphical from "./Graphical";
import { Context } from "../Store/Context";

const HomeView = (props) => {
  const [state, dispatch] = useContext(Context);

  const selectTerminal = (e) => {
    e.preventDefault();
    dispatch({ type: "UPDATE", payload: { view: "terminal" } });
  };

  const selectGraphical = (e) => {
    e.preventDefault();
    dispatch({ type: "UPDATE", payload: { view: "gui" } });
  };

  if (props.isMobile) {
    return (
      <React.Fragment>
        <div className="home-container">
          <div className="home-title">Hi, I am Hardik</div>
          <Typing startDelay={500} speed={20}>
            <div className="home-subtitle">I love making websites.</div>
          </Typing>
          <div className="btn-container">
            <button className="home-btn" onClick={selectGraphical}>
              portfolio.advance();
            </button>
          </div>
        </div>
        <Footer />
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        <div className="home-container">
          <div className="home-title">Hi, I am Hardik</div>
          <Typing startDelay={500} speed={30}>
            <div className="home-subtitle">I love making websites.</div>
          </Typing>
          <div className="btn-container">
            <button className="home-btn" onClick={selectGraphical}>
              portfolio.setMode("gui");
            </button>
            <button className="home-btn" onClick={selectTerminal}>
              portfolio.setMode("terminal");
            </button>
          </div>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
};

const Home = () => {
  const [isMobile, setMobile] = useState(false);
  const [state, dispatch] = useContext(Context);
  useEffect(() => {
    setMobile(/iPhone|iPad|iPod|Android/i.test(navigator.userAgent));
  }, []);

  const renderView = () => {
    if (state === undefined || state.view === "home") {
      return <HomeView isMobile={isMobile} />;
    } else if (state.view === "terminal") {
      return <Terminal />;
    } else {
      return <Graphical />;
    }
  };

  return (
    <React.Fragment>
      {" "}
      <div className="bg-container"></div>
      {renderView()}
    </React.Fragment>
  );
};

export default Home;

//<ParticlesBg type="custom" color="#ffffff" config={particleConfig} />

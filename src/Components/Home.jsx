import React from "react";
import ParticlesBg from "particles-bg";

import particleConfig from "../particleConfig";
import Typing from "react-typing-animation";

const Home = () => {
  return (
    <React.Fragment>
      <div className="bg-container">
        <ParticlesBg type="custom" color="#ffffff" config={particleConfig} />
      </div>
      <div className="home-container">
        <div className="home-title">Hi, I am Hardik</div>
        <Typing startDelay={500} speed={30}>
          <div className="home-subtitle">I am a web developer.</div>
        </Typing>
      </div>
    </React.Fragment>
  );
};

export default Home;

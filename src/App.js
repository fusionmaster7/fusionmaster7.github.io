import React from "react";
import Home from "./Components/Home";
import Store from "./Store/Context";

const App = () => {
  return (
    <Store>
      <Home />
    </Store>
  );
};

export default App;

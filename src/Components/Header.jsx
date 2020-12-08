import React, { useContext } from "react";
import { Context } from "../Store/Context";

const Header = () => {
  const [state, dispatch] = useContext(Context);
  const clickHandler = () => {
    dispatch({ type: "UPDATE", payload: { view: "home" } });
  };
  return (
    <div className="header" onClick={clickHandler}>
      home
    </div>
  );
};

export default Header;

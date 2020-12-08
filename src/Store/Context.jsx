import React, { useReducer, createContext } from "react";
import Reducer from "./Reducer";

const initalState = {
  view: "home",
};

export const Context = createContext(initalState);

const Store = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer);
  return (
    <Context.Provider value={[state, dispatch]}>{children}</Context.Provider>
  );
};

export default Store;

import React from "react";
import IBContext from "./Context";

export const Provider = ({ children }) => {
  const Context = IBContext;
  const cache = {};

  return <Context.Provider value={{ cache }}>{children}</Context.Provider>;
};

export default Provider;

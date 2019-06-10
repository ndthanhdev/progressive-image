import React from "react";
import PIContext from "./Context";
import ImageBus from "../ImageBus";

export const Provider = ({ children, bus = new ImageBus() }) => {
  const Context = PIContext;

  return <Context.Provider value={{ bus }}>{children}</Context.Provider>;
};

export default Provider;

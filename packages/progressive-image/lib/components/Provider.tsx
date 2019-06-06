import React, { FunctionComponent, useState } from "react";
import ProgressiveImageContext from "./Context";
import ImageBus from "../ImageBus";
import ImageLoader from "../ImageLoader";

export const Provider: FunctionComponent = ({ children }) => {
  const Context = ProgressiveImageContext;

  const bus = new ImageBus();
  const loader = new ImageLoader();

  return (
    <Context.Provider value={{ bus, loader }}>{children}</Context.Provider>
  );
};

export default Provider;

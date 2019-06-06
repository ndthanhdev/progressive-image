import React from "react";
import ImageBus from "../ImageBus";
import ImageLoader from "../ImageLoader";

export const ProgressiveImageContext = React.createContext<{
  bus: ImageBus;
  loader: ImageLoader;
}>({
  bus: new ImageBus(),
  loader: new ImageLoader()
});

export const PIContext = ProgressiveImageContext;
export default ProgressiveImageContext;

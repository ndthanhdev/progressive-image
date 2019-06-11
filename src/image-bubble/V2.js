import React, { useContext } from "react";
import { IBContext } from "./components/Context";
import V1 from "./V1";

export function ImageBubble(props) {
  const { srcs = [], className, itemClassName } = props;

  const { cache } = useContext(IBContext);

  const sCacheKey = `${srcs.join("-")}-${className}-${itemClassName}`;

  if (!cache[sCacheKey]) {
    cache[sCacheKey] = <V1 {...props} />;
  }

  return cache[sCacheKey];
}

export default ImageBubble;

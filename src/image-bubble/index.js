import React from "react";
import "./index.css";

export function ImageBubble({
  srcs = [],
  className,
  style,
  itemStyle,
  itemClassName
}) {
  const items = srcs.map(src => (
    <img src={src} style={itemStyle} className={itemClassName} />
  ));

  return (
    <div className={className} style={style}>
      {items}
    </div>
  );
}

export default ImageBubble;

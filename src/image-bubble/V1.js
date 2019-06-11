import React from "react";

export function ImageBubble({
  srcs = [],
  className,
  itemClassName
}) {
  const itemsProps = {
    className: itemClassName
  };

  const items = srcs.map(({ src }, index) => (
    <img key={`${index}${src}`} {...{ ...itemsProps, src }} />
  ));

  return (
    <div className={className}>
      {items}
    </div>
  );
}

export default ImageBubble;

import React from "react";
import { sources } from "./sources";
import "./common.css";
import { Provider, ProgressiveImage, ImageBus } from "./progressive-image";

import { InView } from "react-intersection-observer";

export function Mode1() {
  const bus = new ImageBus();
  window.bus = bus;

  const items = sources.map((value, index) => {
    let _id = "";

    return (
      <InView
        style={{ display: "inline" }}
        key={index}
        onChange={inview => {
          inview && bus.load(_id, +new Date());
        }}
        rootMargin="50px"
        threshold={0.1}
      >
        <ProgressiveImage
          {...value}
          className="item"
          busref={id => {
            _id = id;
          }}
        />
      </InView>
    );
  });

  return (
    <div>
      <Provider bus={bus}>{items}</Provider>
    </div>
  );
}

export default Mode1;

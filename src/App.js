import React from "react";
import { Provider, ProgressiveImage, usePIContext, ImageBus } from "./lib";
import sources from "./sources";
import { InView } from "react-intersection-observer";

function Divider() {
  return <div style={{ height: "30rem" }} />;
}

function App() {
  const bus = new ImageBus();

  window.bus = bus;

  const items = sources.map((value, index) => {
    let _id = "";

    return (
      <div key={index}>
        <Divider />
        <InView
          onChange={inview => {
            inview && bus.load(_id, +new Date());
          }}
          rootMargin="50px"
          threshold={0.1}
        >
          <ProgressiveImage
            {...value}
            width={640}
            height={480}
            busref={id => {
              _id = id;
            }}
          />
        </InView>
      </div>
    );
  });

  return (
    <div>
      <Provider bus={bus}>
        <Divider />
        {items}
        <Divider />
      </Provider>
    </div>
  );
}

export default App;

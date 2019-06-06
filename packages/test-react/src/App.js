import React from "react";
import { PImage, Provider } from "progressive-image";
import { useInView } from "react-intersection-observer";

function Divider() {
  return <div style={{ height: "40rem" }} />;
}

function App() {
  const sources = [
    {
      src: "./dog-battersea.jpg",
      lqip: "./dog-battersea.svg"
    },
    {
      src: "./dog-face.jpg",
      lqip: "./dog-face.svg"
    },
    {
      src: "./dog-running.jpg",
      lqip: "./dog-running.svg"
    }
  ];

  const items = sources.map((value, index) => (
    <div key={index}>
      <Divider />
      <PImage {...value} />
    </div>
  ));

  return (
    <div>
      <Provider>
        {items}
        <Divider />
      </Provider>
    </div>
  );
}

export default App;

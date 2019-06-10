import React from "react";
import { sources } from "./sources";
import "./common.css";

export function Mode0() {
  const items = sources.map(({ src }) => (
    <img key={src} src={src} className="item" />
  ));

  return <div className="bubble">{items}</div>;
}

export default Mode0;

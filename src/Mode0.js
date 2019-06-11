import React from "react";
import { sources } from "./sources";
import "./common.css";
import { V1 } from "./image-bubble";

export function Mode0() {
  return <V1 srcs={sources} className="bubble" itemClassName="item" />;
}

export default Mode0;

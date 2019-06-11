import React, { useState } from "react";
import { sources } from "./sources";
import "./common.css";
import { V1 } from "./image-bubble";

export function Mode0() {
  const [tab, setTab] = useState(0);

  const handleTabChange = tab => () => setTab(tab);

  return (
    <div>
      <div
        style={{
          position: "sticky",
          top: 48,
          left: "70%",
          display: "inline-block"
        }}
      >
        <button onClick={handleTabChange(0)}>Tab 0</button>
        <button onClick={handleTabChange(1)}>Tab 1</button>
      </div>
      {tab === 0 && <V1 srcs={sources} itemClassName="item" />}
      {tab === 1 && <div>nothing here</div>}
    </div>
  );
}

export default Mode0;

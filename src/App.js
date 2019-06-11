import React, { useState } from "react";
import Mode0 from "./Mode0";
import Mode1 from "./Mode1";
import Mode20 from "./Mode20";
import Mode21 from "./Mode21";

function App() {
  const urlParams = new URLSearchParams(window.location.search);
  const initMode = urlParams.get("mode") || 0;

  const [mode, setMode] = useState(parseInt(initMode));

  const handleModeChange = mode => () => {
    setMode(mode);
    // window.location.search = `?mode=${mode}`;
  };

  return (
    <div>
      <div
        style={{
          position: "sticky",
          top: 48,
          left: "50%",
          display: "inline-block"
        }}
      >
        <button onClick={handleModeChange(0)}>Mode 0</button>
        <button onClick={handleModeChange(1)}>Mode 1</button>
      </div>
      {mode === 0 && <Mode0 />}
      {mode === 1 && <Mode1 />}
      {mode === 20 && <Mode20 />}
      {mode === 21 && <Mode21 />}
    </div>
  );
}

export default App;

import React, { useState } from "react";
import "./ColorPicker.scss";
export default function ColorPicker() {
  const [color, setColor] = useState("#FF5733");
  const [color2, setColor2] = useState("#0c2fba");
  const [degree, setDegree] = useState(306);
  const [percent1, setPercent1] = useState(0);
  const [percent2, setPercent2] = useState(100);
  return (
    <div
      style={{
        "--color1": color,
        "--color2": color2,
        "--degree": `${degree}deg`,
        "--percent1": `${percent1}%`,
        "--percent2": `${percent2}%`,
      }}
      className="Picker"
    >
      <input
        type="range"
        min="0"
        max="360"
        value={degree}
        onChange={(e) => setDegree(e.target.value)}
      />
      <input
        type="range"
        min="0"
        max="100"
        value={percent1}
        onChange={(e) => setPercent1(e.target.value)}
      />
      <input
        type="range"
        min="00"
        max="100"
        value={percent2}
        onChange={(e) => setPercent2(e.target.value)}
      />
      <input
        type="color"
        value={color}
        onChange={(e) => setColor(e.target.value)}
      />
      <input
        type="color"
        value={color2}
        onChange={(e) => setColor2(e.target.value)}
      />
    </div>
  );
}

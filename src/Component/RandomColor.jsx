import React, { useEffect, useState } from "react";

const RandomColor = () => {
  const [color, setColor] = useState("#000000");
  const [type, setType] = useState("HEX");

  useEffect(() => {
    if (type === "HEX") {
      generateHex();
    } else {
      generateRGB();
    }
  }, [setType]);

  function utilityLength(length) {
    return Math.floor(Math.random() * length);
  }

  function generateHex() {
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
      hexColor += hex[utilityLength(hex.length)];
    }
    setColor(hexColor);
  }

  function generateRGB() {
    const r = utilityLength(256);
    const g = utilityLength(256);
    const b = utilityLength(256);
    const rgbColor = `rgb(${r}, ${g}, ${b})`;
    setColor(rgbColor);
  }

  return (
    <div style={{ background: color, height: "100vh" }}>
      <button onClick={type === "HEX" ? generateHex : generateRGB}>
        Generate Random Color
      </button>
      <button onClick={() => setType("HEX")}>Using HEX value</button>
      <button onClick={() => setType("RGB")}>Using RGB value</button>
      <div>
        <h1>{color}</h1>
        <h1>{type === "HEX" ? "HEX COLOR" : "RGB COLOR"}</h1>
      </div>
    </div>
  );
};

export default RandomColor;

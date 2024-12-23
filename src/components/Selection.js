import React, { useEffect, useState } from "react";
import "../styles/App.css";
import "../styles/Child.css";

const Selction = ({ nextBackground }) => {
  // Initialize state for background
  const [bk, setBackground] = useState(nextBackground.background);
  const [color, setColor] = useState();
  const [color1, setColor1] = useState();
  const [color2, setColor2] = useState();

  
  useEffect(() => {
    setBackground(nextBackground.background); // Update state when the prop changes
  }, [nextBackground]); // Dependency array ensures it runs only when nextBackground changes

  

  

  return (
    <div className="display">
      <div className="wh fix-box" onClick={() => {setColor(nextBackground.background)}}  style={{ background: color }}></div>
      <div className="wh fix-box" onClick={() => {setColor1(nextBackground.background)}} style={{ background: color1 }}></div>
      <div className="wh fix-box" onClick={() => {setColor2(nextBackground.background)}} style={{ background: color2 }}></div>
    </div>
  );
};

export default Selction;

import React from "react";
import "./curveButton.css";
function CurveButton() {
  return (
    <div className="curve-button">
      <div className="div2 bg-background"></div>
      <div className="container bg-background">
        <button className="px-6  py-2 text-sm font-medium text-white border border-white/30 rounded-full hover:bg-white/10 transition-all duration-300 backdrop-blur-sm">
          Let’s Talk
        </button>
      </div>
      <div className="div4 bg-background"></div>
    </div>
  );
}

export default CurveButton;

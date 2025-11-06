import React from "react";

function Stats() {
  return (
    <>
      <div className="hidden md:block w-[2px]  bg-white/20"></div>
      {/* Stat 1 */}
      <div className="flex flex-col items-center md:items-start gap-1">
        <p className="text-sm text-gray-300 font-semibold text-start">
          Years
          <br />
          Experience
        </p>
        <h3 className="text-3xl md:text-5xl font-semibold">
          10<span className="text-lg align-top">+</span>
        </h3>
      </div>
    </>
  );
}

export default Stats;

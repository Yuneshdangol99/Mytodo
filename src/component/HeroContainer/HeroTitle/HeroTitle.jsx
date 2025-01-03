import React from "react";
import form from "../../../assets/form.png";

function HeroTitle() {
  return (
    <div className="flex items-center gap-3">
      <div>
        <img src={form} alt="form" className="w-10" />
      </div>
      <div>
        <h1 className="font-bold text-xl">Day-01</h1>
        <div className="flex items-center gap-1">
          <div className="w-2 h-2 bg-green-500"></div>
          <p className="font-semibold text-secondary-gray_400 text-sm">
            On Track
          </p>
        </div>
      </div>
    </div>
  );
}

export default HeroTitle;

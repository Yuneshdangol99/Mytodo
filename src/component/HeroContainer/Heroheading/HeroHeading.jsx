import React from "react";
import HeroTimer from "../HeroTimer/HeroTimer";
import HeroTitle from "../HeroTitle/HeroTitle";

function HeroHeading() {
  return (
    <div className="flex items-center justify-between">
      <HeroTitle />
      <HeroTimer />
    </div>
  );
}

export default HeroHeading;

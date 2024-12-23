import React, { useEffect, useState } from "react";
import play from "../../../assets/play.png";
import pause from "../../../assets/pause.png";
import Timer from "./Time/Timer";
import ActiveStatus from "./Time/ActiveStatus";

function HeroTimer() {
  return (
    <>
      <div>
        <ActiveStatus />
        <div className="w-auto h-auto border border-black px-4 py-2 rounded-full flex items-center gap-3 mt-1">
          <div>
            <img src={play} alt="timer" className="w-6 cursor-pointer" />
          </div>
          <Timer />
        </div>
      </div>
    </>
  );
}

export default HeroTimer;

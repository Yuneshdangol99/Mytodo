import React, { useState } from "react";
import play from "../../../assets/play.png";
import pause from "../../../assets/pause.png";
import Timer from "./Time/Timer";
import ActiveStatus from "./Time/ActiveStatus";

function HeroTimer() {
  const [isPlaying, setIsplaying] = useState(false);
  const [timeStopped, setTimeStopped] = useState(false);

  const handleClick = () => {
    setIsplaying(!isPlaying);
  };

  return (
    <>
      <div>
        <ActiveStatus isPlaying={isPlaying} timeStopped={timeStopped} />
        <div
          className={`w-auto h-auto border border-black px-4 py-2 rounded-full flex items-center gap-3 mt-1 duration-500 ${
            isPlaying ? "bg-black text-white" : ""
          } ${timeStopped ? "bg-red-700 text-white" : ""}`}
        >
          <div>
            <img
              src={isPlaying ? pause : play}
              alt="timer"
              className="w-6 cursor-pointer"
              onClick={handleClick}
            />
          </div>
          <Timer isPlaying={isPlaying} setTimeStopped={setTimeStopped} />
        </div>
      </div>
    </>
  );
}

export default HeroTimer;

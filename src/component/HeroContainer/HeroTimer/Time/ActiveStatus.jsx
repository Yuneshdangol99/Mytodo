import React from "react";

function ActiveStatus({ isPlaying, timeStopped }) {
  return (
    <div>
      <div className="flex items-center justify-center gap-1">
        <div
          className={`w-2 h-2 ${isPlaying ? "bg-green-500" : "bg-gray-300"} ${
            timeStopped ? "bg-secondary-gray_300" : null
          }`}
        ></div>
        <div>
          <p className="font-semibold text-secondary-gray_400 text-sm">
            On Active
          </p>
        </div>
      </div>
    </div>
  );
}

export default ActiveStatus;

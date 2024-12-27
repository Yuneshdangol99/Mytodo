import React from "react";
import TimelineContent from "./TimelineContent";

function DayTimeline() {
  return (
    <div className="mt-5 w-full border-2 border-secondary-gray_200 flex justify-between px-4 py-1 rounded-md">
      <h2>Created Yesterday</h2>
      <TimelineContent />
    </div>
  );
}

export default DayTimeline;

import React from "react";
import HeroHeading from "./Heroheading/HeroHeading";
import AddTask from "./Addtask/AddTask";
import DayTimeline from "./DayTimeline/DayTimeline";

function HeroContainer() {
  return (
    <div className="w-full h-[100vh] py-4 px-7">
      <HeroHeading />
      <AddTask />
      <DayTimeline />
    </div>
  );
}

export default HeroContainer;

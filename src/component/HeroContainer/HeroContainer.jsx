import React from "react";
import HeroHeading from "./Heroheading/HeroHeading";
import AddTask from "./Addtask/AddTask";
import DayTimeline from "./DayTimeline/DayTimeline";
import TaskandGraph from "./TaskandGraph/TaskandGraph";

function HeroContainer() {
  return (
    <div className="w-full h-[100vh] py-4 px-7">
      <HeroHeading />
      <AddTask />
      <DayTimeline />
      <TaskandGraph />
    </div>
  );
}

export default HeroContainer;

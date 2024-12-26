import React from "react";
import HeroHeading from "./Heroheading/HeroHeading";
import AddTask from "./Addtask/AddTask";

function HeroContainer() {
  return (
    <div className="w-full h-[100vh] py-4 px-7">
      <HeroHeading />
      <AddTask />
    </div>
  );
}

export default HeroContainer;

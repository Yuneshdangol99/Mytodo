import React from "react";
import { Outlet } from "react-router-dom";

function TaskandGraph() {
  return (
    <div className="bg-secondary-gray_100 w-full mt-7 h-3/5 px-6 py-2 rounded-xl">
      <Outlet />
    </div>
  );
}

export default TaskandGraph;

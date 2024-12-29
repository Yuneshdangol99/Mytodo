import React from "react";
import { Outlet } from "react-router-dom";
import TaskList from "../../../pages/ChildPages/TaskList";

function TaskandGraph() {
  return (
    <div>
      <Outlet />
    </div>
  );
}

export default TaskandGraph;

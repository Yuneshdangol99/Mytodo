import React from "react";
import { Outlet } from "react-router-dom";

function TaskandGraph() {
  return (
    <>
      <div className="bg-secondary-gray_100 w-full mt-7 h-4/6 px-6 py-2 rounded-xl overflow-hidden">
        {/* <h1>"Conquer Your Day with Ease"</h1> */}
        <Outlet />
      </div>
    </>
  );
}

export default TaskandGraph;

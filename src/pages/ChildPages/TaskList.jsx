import React, { useState } from "react";
import { useSelector } from "react-redux";

function TaskList() {
  const task = useSelector((state) => state.tasks.tasks);
  return (
    <>
      <div className="max-h-96 overflow-y-auto">
        <h1 className="font-outfit text-xl font-semibold my-5">
          Take control of your day, one task at a time! ✅
        </h1>
        <ul>
          {task.map((_i, index) => (
            <li
              key={index}
              className="w-full bg-white px-5 py-4 rounded-xl mt-3 text-xl shadow-md flex items-center gap-5"
            >
              <small className="text-sm text-gray-500">{index + 1}.</small>
              <p className="text-[#575757]">{_i.task}</p>
            </li>
          ))}
        </ul>
        {/* <h1>total task : {taskCount}</h1> */}
      </div>
    </>
  );
}

export default TaskList;

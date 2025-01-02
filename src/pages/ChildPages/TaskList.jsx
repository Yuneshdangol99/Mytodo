import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import EditDeletebutton from "../../component/HeroContainer/Addtask/component/EditDeletebutton";
import { deleteTask } from "../../redux/Slice/TaskSlice";

function TaskList() {
  const task = useSelector((state) => state.tasks.tasks);
  const dispatch = useDispatch();

  const handleDeleteTask = (taskId) => {
    dispatch(deleteTask(taskId));
  };

  return (
    <>
      <h1 className="font-outfit text-xl font-medium my-5 ml-5">
        Take Control of Your day, One Task at a Time! ✅
      </h1>
      <div className="max-h-96 overflow-y-auto">
        <ul>
          {task.map((_i, index) => (
            <li
              key={index}
              className="w-full bg-white px-6 py-3 rounded-xl mt-3 text-xl shadow-lg flex items-center justify-between"
            >
              <div className="flex items-center gap-5">
                <small className="text-lg text-gray-500">{index + 1}.</small>
                <p className="text-[#575757] font-medium text-xl">{_i.task}</p>
              </div>
              <div>
                <EditDeletebutton onDelete={() => handleDeleteTask(_i.id)} />
              </div>
            </li>
          ))}
        </ul>
        {/* <h1>total task : {taskCount}</h1> */}
      </div>
    </>
  );
}

export default TaskList;

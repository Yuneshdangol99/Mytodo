import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTasks } from "../../../../redux/Slice/TaskSlice";
import { v4 as uuidv4 } from "uuid";

function TaskForm() {
  const [value, setValue] = useState("");
  const [TaskCount, setTaskCount] = useState(1);
  const [showSuccess, setShowsuccess] = useState(false);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (value.trim()) {
      const taskId = uuidv4();
      dispatch(addTasks({ task: value }));
      setValue("");
      setTaskCount(TaskCount + 1);
      setShowsuccess(true);
      console.log("task id :", taskId, "task value:", value);
    }
  };

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit} className="w-full">
        {showSuccess && <p>Added succesfully</p>}
        <input
          type="text"
          placeholder="Add task here"
          value={value}
          className="w-full border-2 border-secondary-gray_400 px-4 py-3 outline-none"
          onChange={(e) => setValue(e.target.value)}
        />
        <div className="flex items-center w-full">
          <button
            type="submit"
            className="bg-green-600 px-4 py-2 text-white mt-6 mx-auto block"
          >
            Add-Task
          </button>
          <button
            type="button"
            className="bg-red-600 px-4 py-2 text-white mt-6 mx-auto block"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default TaskForm;
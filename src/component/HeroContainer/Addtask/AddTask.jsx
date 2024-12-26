import React from "react";
import TaskContent from "./TaskContent";
import AddButton from "./AddButton";

function AddTask() {
  return (
    <div className="mt-6 w-full bg-secondary-gray_100 flex justify-between items-center px-4 py-2 rounded-xl border-secondary-gray_200 border">
      <TaskContent />
      <AddButton />
    </div>
  );
}

export default AddTask;

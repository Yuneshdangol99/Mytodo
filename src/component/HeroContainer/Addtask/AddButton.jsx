import React from "react";
import { IoIosAddCircleOutline } from "react-icons/io";

function AddButton() {
  return (
    <button className="px-4 py-2 bg-primary rounded-xl text-white flex items-center gap-1">
      <IoIosAddCircleOutline className="text-xl" /> Add Task
    </button>
  );
}

export default AddButton;

import React, { useState } from "react";
import { IoIosAddCircleOutline } from "react-icons/io";
import Showoverlay from "./component/Showoverlay";
import { useDispatch, useSelector } from "react-redux";
import { hideoverlay, ShowOverlay } from "../../../redux/Slice/TaskSlice";

function AddButton() {
  const dispatch = useDispatch();
  const isOverlayVisible = useSelector((state) => state.tasks.isOverlayVisible);

  const handletask = () => {
    dispatch(ShowOverlay());
  };

  return (
    <>
      {!isOverlayVisible && (
        <button
          onClick={handletask}
          className="px-4 py-2 bg-primary rounded-xl text-white flex items-center gap-1"
        >
          <IoIosAddCircleOutline className="text-xl" /> Add Task
        </button>
      )}
      {isOverlayVisible && <Showoverlay />}
    </>
  );
}

export default AddButton;

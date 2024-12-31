import React, { useState } from "react";
import { IoIosAddCircleOutline } from "react-icons/io";
import Showoverlay from "./component/Showoverlay";

function AddButton() {
  const [ShowOverlay, setShowOverlay] = useState(false);

  const handletask = () => {
    setShowOverlay(true);
  };

  return (
    <>
      {!ShowOverlay && (
        <button
          onClick={handletask}
          className="px-4 py-2 bg-primary rounded-xl text-white flex items-center gap-1"
        >
          <IoIosAddCircleOutline className="text-xl" /> Add Task
        </button>
      )}
      {ShowOverlay && <Showoverlay />}
    </>
  );
}

export default AddButton;

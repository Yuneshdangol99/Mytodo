import React, { useEffect, useRef, useState } from "react";
import TaskForm from "./TaskForm";

function Showoverlay({ closeOverlay }) {
  const [IsVisible, setIsvisible] = useState(true);
  const overlayRef = useRef(null);

  const handleOutsideClick = (event) => {
    if (overlayRef.current && !overlayRef.current.contains(event.target)) {
      setIsvisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  if (!IsVisible) return null;

  return (
    <div>
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div
          className="bg-white p-6 rounded-xl shadow-lg max-w-md w-full flex flex-col justify-center items-center gap-5"
          ref={overlayRef}
        >
          <div>
            <h1 className="font-semibold text-lg mt-5 text-black">
              No tasks yet. Start by adding one!
            </h1>
          </div>

          <TaskForm closeOverlay={closeOverlay} />
        </div>
      </div>
    </div>
  );
}

export default Showoverlay;

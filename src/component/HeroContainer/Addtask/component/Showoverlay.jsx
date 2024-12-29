import React from "react";
import AddButton from "../AddButton";

function Showoverlay({ ShowOverlay }) {
  return (
    <div>
      {ShowOverlay && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-xl shadow-lg max-w-md w-full flex flex-col justify-center items-center gap-5">
            <div>
              <h1 className="font-semibold text-lg mt-5 text-black">
                No tasks yet. Start by adding one!
              </h1>
            </div>

            {/* this is input container  */}
            <div className="w-full">
              <input
                type="text"
                placeholder="Add Task here"
                className="text-lg text-black w-full px-4 py-3 border-2 border-black outline-none rounded-lg"
              />
            </div>

            {/* this is point section  */}
            {/* <div className="w-4/5 bg-secondary-gray_200 px-3 py-4 rounded-3xl">
              heloo
            </div> */}

            {/* this is button section  */}
            <div className="flex gap-3 mt-4">
              <button className="px-4 py-2 bg-green-700 rounded-sm text-white flex items-center">
                Add Task
              </button>
              <button className="px-4 py-2 bg-red-700 rounded-sm text-white flex items-center">
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Showoverlay;

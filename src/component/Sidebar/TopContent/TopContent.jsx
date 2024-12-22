import React from "react";
import { Home } from "./icons.js";
import { task } from "./icons.js";

function TopContent() {
  const content = ["Home", "My Task"];
  const sideicon = [Home, task];

  return (
    <div className="mt-10">
      <ul>
        {content.map((_i, index) => {
          return (
            <li
              key={index}
              className="list-none flex items-center gap-4 font-medium mb-3 cursor-pointer hover:bg-secondary-gray_200 p-3 rounded-lg duration-300"
            >
              {sideicon[index] && <img src={sideicon[index]} className="w-5" />}
              {_i}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default TopContent;

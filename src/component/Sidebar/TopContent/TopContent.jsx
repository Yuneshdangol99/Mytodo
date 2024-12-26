import React from "react";
import { Home, task } from "./icons.js";
import { NavLink } from "react-router-dom";

function TopContent() {
  const content = [
    { name: "Home", path: "/" },
    { name: "My task", path: "/mytask" },
  ];
  const sideicon = [Home, task];

  return (
    <div className="mt-10">
      <ul>
        {content.map((item, index) => (
          <li key={index}>
            <NavLink
              to={item.path}
              className="list-none flex items-center gap-4 font-medium mb-3 cursor-pointer hover:bg-secondary-gray_200 p-3 rounded-lg duration-300"
            >
              {sideicon[index] && (
                <img src={sideicon[index]} alt={item.name} className="w-5" />
              )}
              {item.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TopContent;

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
    <div className="mt-12">
      <ul>
        {content.map((item, index) => (
          <li key={index}>
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                `list-none flex items-center gap-4 font-medium mb-3 cursor-pointer p-3 rounded-lg duration-300 ${
                  isActive
                    ? "bg-secondary-gray_100"
                    : "hover:bg-secondary-gray_50"
                }`
              }
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

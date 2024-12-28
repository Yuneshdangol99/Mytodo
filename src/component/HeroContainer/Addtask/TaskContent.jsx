import React from "react";
import { NavLink, Outlet } from "react-router-dom";

function TaskContent() {
  const taskContent = [
    { name: "Overview", path: "overview" },
    { name: "task-List", path: "task-List" },
    { name: "Timeline", path: "timeline" },
    { name: "Calendar", path: "calendar" },
    { name: "Status-payment", path: "status-payment" },
  ];

  return (
    <div>
      <ul className="flex gap-10 cursor-pointer">
        {taskContent.map((_i, index) => (
          <li key={index}>
            <NavLink to={_i.path}>{_i.name}</NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskContent;

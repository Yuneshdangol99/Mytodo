import React from "react";

function TaskContent() {
  const taskContent = [
    "Overview",
    "List",
    "Timeline",
    "Calendar",
    "Status-Payment",
  ];

  return (
    <div>
      <ul className="flex gap-10 cursor-pointer">
        {taskContent.map((_i, index) => (
          <li key={index}>{_i}</li>
        ))}
      </ul>
    </div>
  );
}

export default TaskContent;

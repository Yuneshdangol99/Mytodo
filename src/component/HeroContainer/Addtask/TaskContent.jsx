import React from "react";

function TaskContent() {
  const taskContent = ["Overview", "List", "Timeline", "Calendar"];

  return (
    <div>
      <ul className="flex gap-10">
        {taskContent.map((_i, index) => (
          <li key={index}>{_i}</li>
        ))}
      </ul>
    </div>
  );
}

export default TaskContent;

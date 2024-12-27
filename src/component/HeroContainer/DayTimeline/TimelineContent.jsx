import React from "react";
import { FaRegCheckCircle } from "react-icons/fa";
import { IoFilterOutline } from "react-icons/io5";
import { BsSortUp } from "react-icons/bs";
import { BiCustomize } from "react-icons/bi";

function TimelineContent() {
  const TimelineContent = ["All Task", "Filter", "Sort", "Customize"];
  const TimelineImage = [
    <FaRegCheckCircle />,
    <IoFilterOutline />,
    <BsSortUp />,
    <BiCustomize />,
  ];

  return (
    <div>
      <ul className="flex gap-7">
        {TimelineContent.map((content, index) => (
          <li key={index} className="flex items-center gap-2 cursor-pointer">
            <span>{TimelineImage[index]}</span>
            <span>{content}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TimelineContent;

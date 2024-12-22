import React from "react";
import { RiMenu3Line } from "react-icons/ri";

function Logo() {
  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center">
        <a href="#">
          <h1 className="font-mylogo text-3xl text-primary">KaamHaru</h1>
        </a>
      </div>

      <RiMenu3Line className="text-2xl font-bold cursor-pointer" />
    </div>
  );
}

export default Logo;

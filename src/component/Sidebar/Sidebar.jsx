import React from "react";
import TopContent from "./TopContent/TopContent";
import Logo from "../Sidebar/logo/Logo.jsx";

function Sidebar() {
  return (
    <div className="w-1/5 h-[100vh] border-2 border-r-secondary-gray_200 p-5">
      <Logo />
      <TopContent />
    </div>
  );
}

export default Sidebar;

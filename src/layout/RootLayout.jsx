import React from "react";
import Sidebar from "../component/Sidebar/Sidebar";
import HeroContainer from "../component/HeroContainer/HeroContainer";
import { Outlet } from "react-router-dom";

function RootLayout() {
  return (
    <div className="flex">
      <Sidebar />
      <Outlet />
    </div>
  );
}

export default RootLayout;

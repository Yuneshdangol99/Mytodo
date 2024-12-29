import React from "react";
import Sidebar from "../component/Sidebar/Sidebar";
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

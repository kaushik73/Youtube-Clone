import React from "react";
import Sidebar from "./Sidebar";

import { Outlet } from "react-router-dom";

const Body = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="mt-0">
        <Outlet />
      </div>
    </div>
  );
};

export default Body;

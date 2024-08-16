import React from "react";
import Sidebar from "./Sidebar";

import { Outlet } from "react-router-dom";
import Head from "./Head";

const Body = () => {
  return (
    <div className="flex">
      <Head />
      <div className="mt-16">
        <Sidebar />
        <Outlet />
      </div>
    </div>
  );
};

export default Body;

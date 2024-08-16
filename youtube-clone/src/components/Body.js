import React from "react";
import Sidebar from "./Sidebar";

import { Outlet } from "react-router-dom";
import Head from "./Head";
import { useSelector } from "react-redux";

const Body = () => {
  const isModalOpen = useSelector((store) => store.config.isModalOpen);

  return (
    <div className={`flex ${isModalOpen ? "opacity-25" : ""}`}>
      <Head />
      <div className="mt-16">
        <Sidebar />
        <Outlet />
      </div>
    </div>
  );
};

export default Body;

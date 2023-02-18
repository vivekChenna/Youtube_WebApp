import React, { useEffect } from "react";

import Sidebar from "./Sidebar";

import { Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";
import { OpenMenu } from "../utils/appSlice";

const Body = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(OpenMenu());
  });

  return (
    <div className="grid grid-flow-col">
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default Body;

import React from "react";
import { Outlet } from "react-router-dom";
import "../styles/DashboardLayout.css"
import Subheader from "../components/Subheader";

export default function DashboardLayout() {
  return (
    <div className="dashboard-layout">
      <Subheader />
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
}



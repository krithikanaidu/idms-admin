import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Subheader from "../../components/Subheader";
import HRMHome from "./HRMHome";
import HRMMaster from "./HRMMaster";
import HRMTransaction from "./HRMTransaction";
import HRMReport from "./HRMReport"

const HRMScreen = () => (
  <div>
    <Subheader module="hrm" pageNames={["Home", "Masters", "Transactions"]} />
    <Routes>
      <Route path="home" element={<HRMHome />} />
      <Route path="masters" element={<HRMMaster />} />
      <Route path="transactions" element={<HRMTransaction />} />
      <Route path="reports" element={<HRMReport />} />
      <Route path="" element={<Navigate to="home" replace />} />
    </Routes>
  </div>
);

export default HRMScreen;

import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Subheader from "../../components/Subheader";
import SalesHome from "./SalesHome";
import SalesMaster from "./SalesMaster";
import SalesTransaction from "./SalesTransaction";
import SalesReport from "./SalesReport";

const SalesScreen = () => (
  <div>
    <Subheader module="sales" pageNames={["Home", "Masters", "Transactions"]} />
    <Routes>
      <Route path="home" element={<SalesHome />} />
      <Route path="masters" element={<SalesMaster />} />
      <Route path="transactions" element={<SalesTransaction />} />
      <Route path="reports" element={<SalesReport />} />
      <Route path="" element={<Navigate to="home" replace />} />
    </Routes>
  </div>
);

export default SalesScreen;

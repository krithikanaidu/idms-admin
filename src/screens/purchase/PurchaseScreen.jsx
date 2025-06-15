import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Subheader from "../../components/Subheader";
import PurchaseHome from "./PurchaseHome";
import PurchaseMaster from "./PurchaseMaster";
import PurchaseTransaction from "./PurchaseTransaction";
import PurchaseReport from "./PurchaseReport";

const PurchaseScreen = () => (
  <div>
    <Subheader module="purchase" pageNames={["Home", "Masters", "Transactions"]} />
    <Routes>
      <Route path="home" element={<PurchaseHome />} />
      <Route path="masters" element={<PurchaseMaster />} />
      <Route path="transactions" element={<PurchaseTransaction />} />
      <Route path="reports" element={<PurchaseReport />} />
      <Route path="" element={<Navigate to="home" replace />} />
    </Routes>
  </div>
);

export default PurchaseScreen;

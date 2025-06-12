// MainLayout.jsx
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Subheader from "../components/Subheader";

import BusinessLeads from "../screens/BusinessLeads";
import SalesScreen from "../screens/SalesScreen";
import PlanningScreen from "../screens/PlanningScreen";
import PurchaseScreen from "../screens/PurchaseScreen";
import StoresScreen from "../screens/StoresScreen";
import ProductionScreen from "../screens/ProductionScreen";
import MaintenanceScreen from "../screens/MaintenanceScreen";
import QualityScreen from "../screens/QualityScreen";
import HRMScreen from "../screens/HRMScreen";
import SettingsScreen from "../screens/SettingsScreen";
import SupportScreen from "../screens/SupportScreen";
import DispatchScreen from "../screens/DispatchScreen";

export default function MainLayout({ setIsLoggedIn }) {
  const location = useLocation();

  return (
    <div className="app-wrapper">
      <Header setIsLoggedIn={setIsLoggedIn} />
      <div className="sidebar-wrapper">
        <Sidebar />
        <div className="right-panel">
          <Subheader />
          <div className="content">
            <Routes>
              <Route path="/" element={<Navigate to="/sales" replace />} />
              <Route path="/sales" element={<SalesScreen key={location.key} />} />
              <Route path="/business-leads" element={<BusinessLeads key={location.key} />} />
              <Route path="/planning" element={<PlanningScreen key={location.key} />} />
              <Route path="/purchase" element={<PurchaseScreen key={location.key} />} />
              <Route path="/stores" element={<StoresScreen key={location.key} />} />
              <Route path="/production" element={<ProductionScreen key={location.key} />} />
              <Route path="/maintenance" element={<MaintenanceScreen key={location.key} />} />
              <Route path="/quality" element={<QualityScreen key={location.key} />} />
              <Route path="/hrm" element={<HRMScreen key={location.key} />} />
              <Route path="/settings" element={<SettingsScreen key={location.key} />} />
              <Route path="/support" element={<SupportScreen key={location.key} />} />
              <Route path="/dispatch" element={<DispatchScreen key={location.key} />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}

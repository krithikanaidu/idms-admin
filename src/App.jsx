import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

// Screens and Components
import FlashScreen from "./screens/FlashScreen";
import LoginScreen from "./screens/LoginScreen";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Subheader from "./components/Subheader";

import BusinessLeads from "./screens/BusinessLeads";
import SalesScreen from "./screens/SalesScreen";
import PlanningScreen from "./screens/PlanningScreen";
import PurchaseScreen from "./screens/PurchaseScreen";
import StoresScreen from "./screens/StoresScreen";
import ProductionScreen from "./screens/ProductionScreen";
import MaintenanceScreen from "./screens/MaintenanceScreen";
import QualityScreen from "./screens/QualityScreen";
import HRMScreen from "./screens/HRMScreen";
import SettingsScreen from "./screens/SettingsScreen";
import SupportScreen from "./screens/SupportScreen";
import DispatchScreen from "./screens/DispatchScreen";

import "./styles/App.css";

const App = () => {
  const [showFlash, setShowFlash] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowFlash(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (showFlash) {
    return <FlashScreen />;
  }

  if (!isLoggedIn) {
    return <LoginScreen onLogin={() => setIsLoggedIn(true)} />;
  }

  return (
    <Router>
      <div className="app-wrapper">
        <Header setIsLoggedIn={setIsLoggedIn}/>
        <div className="sidebar-wrapper">
          <Sidebar />
          <div className="right-panel">
            <Subheader label="SubHeader" />
            <div className="content">
              <Routes>
                <Route path="/" element={<Navigate to="/business-leads" replace />} />
                <Route path="/business-leads" element={<BusinessLeads />} />
                <Route path="/sales" element={<SalesScreen />} />
                <Route path="/planning" element={<PlanningScreen />} />
                <Route path="/purchase" element={<PurchaseScreen />} />
                <Route path="/stores" element={<StoresScreen />} />
                <Route path="/production" element={<ProductionScreen />} />
                <Route path="/maintenance" element={<MaintenanceScreen />} />
                <Route path="/quality" element={<QualityScreen />} />
                <Route path="/hrm" element={<HRMScreen />} />
                <Route path="/settings" element={<SettingsScreen />} />
                <Route path="/support" element={<SupportScreen />} />
                <Route path="/dispatch" element={<DispatchScreen />} />
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;

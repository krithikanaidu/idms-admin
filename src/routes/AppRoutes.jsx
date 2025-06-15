import { Routes, Route, Navigate } from "react-router-dom";
import MainLayout from "../screens/MainLayout";
import DashboardLayout from "../screens/DashboardLayout";
import PurchaseHome from "../screens/purchase/PurchaseHome";
import PurchaseMaster from "../screens/purchase/PurchaseMaster";
import PurchaseTransaction from "../screens/purchase/PurchaseTransaction";
import PurchaseReport from "../screens/purchase/PurchaseReport";
import SalesHome from "../screens/sales/SalesHome";
import SalesMaster from "../screens/sales/SalesMaster";
import SalesTransaction from "../screens/sales/SalesTransaction";
import SalesReport from "../screens/sales/SalesReport";
import HRMHome from "../screens/hrm/HRMHome";
import HRMMaster from "../screens/hrm/HRMMaster";
import HRMTransaction from "../screens/hrm/HRMTransaction";
import HRMReport from "../screens/hrm/HRMReport";

const AppRoutes = ({ setIsLoggedIn }) => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout setIsLoggedIn={setIsLoggedIn} />}>
        <Route index element={<Navigate to="/purchase/home" replace />} />

        <Route path="purchase" element={<DashboardLayout />}>
          <Route index element={<Navigate to="home" replace />} />
          <Route path="home" element={<PurchaseHome />} />
          <Route path="masters" element={<PurchaseMaster />} />
          <Route path="transactions" element={<PurchaseTransaction />} />
          <Route path="reports" element={<PurchaseReport />} />
        </Route>

        <Route path="sales" element={<DashboardLayout />}>
          <Route index element={<Navigate to="home" replace />} />
          <Route path="home" element={<SalesHome />} />
          <Route path="masters" element={<SalesMaster />} />
          <Route path="transactions" element={<SalesTransaction />} />
          <Route path="reports" element={<SalesReport />} />
        </Route>

        <Route path="hrm" element={<DashboardLayout />}>
          <Route index element={<Navigate to="home" replace />} />
          <Route path="home" element={<HRMHome />} />
          <Route path="masters" element={<HRMMaster />} />
          <Route path="transactions" element={<HRMTransaction />} />
          <Route path="reports" element={<HRMReport />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default AppRoutes;

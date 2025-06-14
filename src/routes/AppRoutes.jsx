import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import MainLayout from "../screens/MainLayout";
import DashboardLayout from "../screens/DashboardLayout";
import PurchaseHome from "../screens/purchase/PurchaseHome";
import PurchaseMaster from "../screens/purchase/PurchaseMaster";
import PurchaseTransaction from "../screens/purchase/PurchaseTransaction"
import PurchaseReport from "../screens/purchase/PurchaseReport";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          {/* --- Purchase --- */}
          <Route
            index                                     // when user is at /
            element={<Navigate to="purchase/home" replace />}
          />
          <Route
            path="purchase"
            element={<Navigate to="/purchase/home" replace />}
          />
          <Route
            path="purchase/*"
            element={
              <DashboardLayout
                module="purchase"
                pages={{
                  Home: PurchaseHome,
                  Masters: PurchaseMaster,
                  Transactions: PurchaseTransaction,
                  Reports: PurchaseReport,
                }}
              />
            }
          />

          {/* --- Sales --- */}
          {/* <Route
            path="sales"
            element={<Navigate to="/sales/home" replace />}
          />
          <Route
            path="sales/*"
            element={
              <DashboardLayout
                module="sales"
                pages={{
                  Home: SalesHome,
                  Masters: SalesMasters,
                  Transactions: SalesTransactions,
                  Reports: SalesReports,
                }}
              />
            }
          /> */}

          {/* 404 fallback */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

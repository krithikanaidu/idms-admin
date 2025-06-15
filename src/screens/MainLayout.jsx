import { useLocation, Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

export default function MainLayout({ setIsLoggedIn }) {
  const location = useLocation();
  const module = location.pathname.split("/")[1] || "";

  return (
    <div className="app-wrapper">
      <Header setIsLoggedIn={setIsLoggedIn} />
      <div className="sidebar-wrapper">
        <Sidebar />
        <div className="right-panel">
          <div className="content">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}

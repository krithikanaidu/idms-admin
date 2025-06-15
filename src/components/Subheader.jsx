import { useLocation, useNavigate } from "react-router-dom";
import home from "../assets/icons/Icon_home.svg";
import redStroke from "../assets/icons/redstroke.svg";
import previous from "../assets/icons/icon_previous.svg";
import "../styles/Subheader.css";
import { useState, useEffect } from "react";

const routeTitles = {
  "/business-leads": "Business Leads Overview",
  "/sales": "Sales Overview",
  "/planning": "Planning Overview",
  "/purchase": "Purchase Overview",
  "/stores": "Stores Overview",
  "/production": "Production Overview",
  "/maintenance": "Maintenance Overview",
  "/quality": "Quality Overview",
  "/hrm": "HRM Overview",
  "/dispatch": "Dispatch Overview",
  "/settings": "Settings Overview",
  "/support": "Support Overview",
  "/accounts": "Accounts Overview",
  "/finance": "Finance Overview",
};

const tabList = ["Masters", "Transactions", "Reports"];

export default function SubHeader() {
  const location = useLocation();
  const navigate = useNavigate();

  const currentModule = `/${location.pathname.split("/")[1]}`;
  const currentTab = location.pathname.split("/")[2]?.toLowerCase();
  const pageTitle = routeTitles[currentModule] || "Dashboard";

  const [activeTab, setActiveTab] = useState(currentTab || "home");

  useEffect(() => {
    // Sync tab with URL
    setActiveTab(currentTab);
  }, [location.pathname]);

  const handleHomeClick = () => {
    // Reload the current module's home route
    const module = location.pathname.split("/")[1];
    navigate(`/${module}/home`, { replace: true });
  };

  const handleTabClick = (tabLabel) => {
    const module = location.pathname.split("/")[1];
    const path = `/${module}/${tabLabel.toLowerCase()}`;
    navigate(path);
  };

  const handlePreviousTabClick = () => {
    const pathParts = location.pathname.split("/");
    // Remove the last segment (current tab or page)
    if (pathParts.length > 2) {
      pathParts.pop();
      const prevPath = pathParts.join("/") || "/";
      navigate(prevPath);
    } else {
      // If already at module root, go to dashboard or home
      navigate("/");
    }
  };

  return (
    <div className="subheader-container">
      <div className="sub-header">
        <img
          src={home}
          alt="home"
          className="cursor-pointer"
          onClick={handleHomeClick}
        />
        <img src={redStroke} alt="stroke" />
        <img src={previous} alt="previous" onClick={handlePreviousTabClick} className="cursor-pointer"/>
        <img src={redStroke} alt="stroke" />
        <div className="subheader-tabs">
          {tabList.map((tab) => (
            <h3
              key={tab}
              onClick={() => handleTabClick(tab)}
              className={activeTab === tab.toLowerCase() ? "active-tab" : ""}
            >
              {tab}
            </h3>
          ))}
        </div>
      </div>
      <h2 className="subheader-page-title">{pageTitle}</h2>
    </div>
  );
}

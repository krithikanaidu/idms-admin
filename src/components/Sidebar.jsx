import { Link, useLocation } from "react-router-dom";
import "../styles/Sidebar.css"; // Assuming you have a CSS file for styling
import businessleadsLogo from "../assets/navbarIcons/business_leads.svg";
import salesLogo from "../assets/navbarIcons/sales.svg";
import planningLogo from "../assets/navbarIcons/planning.svg";
import purchaseLogo from "../assets/navbarIcons/purchase.svg";
import storesLogo from "../assets/navbarIcons/store.svg";
import productionLogo from "../assets/navbarIcons/production.svg";
import maintenanceLogo from "../assets/navbarIcons/maintenance.svg";
import qualityLogo from "../assets/navbarIcons/quality.svg";
import hrmLogo from "../assets/navbarIcons/hr.svg";
import settingsLogo from "../assets/navbarIcons/settings.svg";
import supportLogo from "../assets/navbarIcons/support.svg";
import dispatchLogo from "../assets/navbarIcons/dispatch.svg";
import accountsLogo from "../assets/navbarIcons/accounts.svg";
import financeLogo from "../assets/navbarIcons/finance.svg";

const navItems = [
  {
    icons: salesLogo,
    label: "Sales",
    path: "/sales",
    color: "#1a8cff",
    isImage: true,
  },
  {
    icons: businessleadsLogo,
    label: "Business Leads",
    path: "/business-leads",
    color: "#1a8cff",
    isImage: true,
  },
  {
    icons: planningLogo,
    label: "Planning",
    path: "/planning",
    color: "#1a8cff",
    isImage: true,
  },
  {
    icons: purchaseLogo,
    label: "Purchase",
    path: "/purchase",
    color: "#ff33a6",
    isImage: true,
  },
  {
    icons: storesLogo,
    label: "Stores",
    path: "/stores",
    color: "#00b386",
    isImage: true,
  },
  {
    icons: productionLogo,
    label: "Production",
    path: "/production",
    color: "#1a8cff",
    isImage: true,
  },
  {
    icons: maintenanceLogo,
    label: "Maintenance",
    path: "/maintenance",
    color: "#ff3366",
    isImage: true,
  },
  {
    icons: qualityLogo,
    label: "Quality",
    path: "/quality",
    color: "#00b386",
    isImage: true,
  },
  {
    icons: dispatchLogo,
    label: "Dispatch",
    path: "/dispatch",
    color: "#ff3366",
    isImage: true,
  },
  {
    icons: hrmLogo,
    label: "HRM",
    path: "/hrm",
    color: "#1a8cff",
    isImage: true,
  },
  {
    icons: accountsLogo,
    label: "Accounts",
    path: "/accounts",
    color: "#1a237e",
    isImage: true,
  },
  {
    icons: financeLogo,
    label: "Finance",
    path: "/finance",
    color: "#1a237e",
    isImage: true,
  },
  {
    icons: settingsLogo,
    label: "Settings",
    path: "/settings",
    color: "#ff33a6",
    isImage: true,
  },
  {
    icons: supportLogo,
    label: "Support",
    path: "/support",
    color: "#1a8cff",
    isImage: true,
  },
  {
    icons: false,
    label: "Powered by IDMS",
    path: "/support",
    color: "#ff33a6",
    isImage: false,
  },
];

export default function Sidebar() {
  const location = useLocation();

  return (
    <nav className="h-[calc(0vh-64px)] mt-[55px] w-60 bg-white border-r flex flex-col">
      <ul className="sidebar-list">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <li
              key={item.label}
              className={`sidebar-item${isActive ? " active" : ""}`}
            >
              <Link to={item.path} className="sidebar-link">
                <div
                  className="sidebar-stroke"
                  style={{ background: item.color }}
                />
                {item.isImage && (
                  <img
                    src={item.icons}
                    alt={item.label}
                    className="sidebar-icon"
                    style={{
                      filter: `drop-shadow(0 0 0 ${item.color})`,
                      color: item.color,
                    }}
                  />
                )}
                <span
                  className="sidebar-label"
                  style={{
                    color: item.color,
                    fontWeight: isActive ? 700 : 500,
                  }}
                >
                  {item.label}
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
      {/* <li className="sidebar-item powered-item p-4 border-t">
        <div className="sidebar-link">
          <div className="sidebar-stroke" style={{ background: "#ff33a6" }} />
          <span style={{ color: '#ff33a6', fontWeight: 700 }}>
            Powered By IDMS
          </span>
        </div>
      </li> */}
    </nav>
  );
}

import { useLocation } from 'react-router-dom';
import home from '../assets/icons/Icon_home.svg';
import redStroke from '../assets/icons/redstroke.svg';
import previous from '../assets/icons/icon_previous.svg';
import '../styles/Subheader.css';

const routeTitles = {
  "/business-leads": "Business Leads",
  "/sales": "Sales",
  "/planning": "Planning",
  "/purchase": "Purchase",
  "/stores": "Stores",
  "/production": "Production",
  "/maintenance": "Maintenance",
  "/quality": "Quality",
  "/hrm": "HRM",
  "/dispatch": "Dispatch",
  "/settings": "Settings",
  "/support": "Support",
};

export default function SubHeader() {
  const location = useLocation();
  const pageTitle = routeTitles[location.pathname] || "Dashboard";

  return (
    <div className="subheader-container">
      <div className="sub-header">
        <img src={home} alt="home" />
        <img src={redStroke} alt="stroke" />
        <img src={previous} alt="previous" />
        <img src={redStroke} alt="stroke" />
        <div className="subheader-tabs">
        <h3>Masters</h3>
        <h3>Transactions</h3>
        <h3>Reports</h3>

      </div>
      </div>
         <h2 className='subheader-page-title'>{pageTitle}</h2>
    </div>
  );
}

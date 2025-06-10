import { useLocation } from 'react-router-dom';
import home from '../assets/icons/Icon_home.svg';
import redStroke from '../assets/icons/redstroke.svg';
import previous from '../assets/icons/icon_previous.svg';
import '../styles/Subheader.css';

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
};

export default function SubHeader() {
  const location = useLocation();
  const pageTitle = routeTitles[location.pathname] || "Dashboard";

  return (
    <div className="subheader-container">
      <div className="sub-header">
        <img src={home} alt="home" className='cursor-pointer'/>
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

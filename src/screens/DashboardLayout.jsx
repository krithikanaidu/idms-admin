import { useLocation, useNavigate, Routes, Route } from "react-router-dom";
import Subheader from "../components/Subheader";

const DashboardLayout = ({ module, pages }) => {
  const [activeTab, setActiveTab] = useState("Home");
  const location = useLocation();
  const navigate = useNavigate();

  const handleTabClick = (tab) => {
    setActiveTab(tab)   
    navigate(`/${module}/${tab.toLowerCase()}`);
  };

  return (
    <div>
      <Subheader onTabClick={handleTabClick} />
      <Routes>
        {Object.entries(pages).map(([key, Component]) => (
          <Route key={key} path={key.toLowerCase()} element={<Component />} />
        ))}
      </Routes>
    </div>
  );
};

export default DashboardLayout;

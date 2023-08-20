import { Outlet } from "react-router-dom";
import SideBar from "./Components/SideBar";
import TopBar from "./Components/TopBar";
import "./assets/Dashboard.css";

const Dashboard = () => {
  return (
    <div>
      <TopBar />
      <div className="content-flex">
        <SideBar />
        <Outlet />
      </div>
    </div>
  );
};
export default Dashboard;

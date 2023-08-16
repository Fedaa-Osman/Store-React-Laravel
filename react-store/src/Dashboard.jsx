import { Outlet } from "react-router-dom";
import SideBar from "./Components/SideBar";
import TopBar from "./Components/TopBar";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div>
      <TopBar />
      <div className="content-flex">
        <SideBar />
        <div style={{ width: "80%" }}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};
export default Dashboard;

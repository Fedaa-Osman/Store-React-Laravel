import { Outlet } from "react-router-dom";
import SideBar from "../../Components/SideBar";
import TopBar from "../../Components/TopBar";

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

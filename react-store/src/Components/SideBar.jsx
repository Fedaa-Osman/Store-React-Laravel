import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <div className="side-bar">
      <Link to="/dashboard/users" className="item-link">
        Users
      </Link>
    </div>
  );
};

export default SideBar;

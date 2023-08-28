import { NavLink } from "react-router-dom";

const SideBar = () => {
  return (
    <div className="side-bar">
      <NavLink
        to="/dashboard/users"
        className="item-link"
        activClassName="active">
        <i className="fa-solid fa-users"></i>
        Users
      </NavLink>
      <NavLink
        to="/dashboard/user/create"
        className="item-link"
        activClassName="active">
        <i className="fa-solid fa-user-plus"></i>
        New Users
      </NavLink>
    </div>
  );
};

export default SideBar;

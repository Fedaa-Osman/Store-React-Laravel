import { Link } from "react-router-dom";
// import "../assets/Header.css";

const Header = () => {
  function handleLogOut() {
    window.localStorage.removeItem("email");
    window.location.pathname = "/";
  }
  return (
    <nav className="nav-bar">
      <div className="nav-left">
        <ul>
          <li>Home</li>
          <li>About</li>
        </ul>
      </div>
      <div className="nav-right">
        {!window.localStorage.getItem("email") ? (
          <>
            <Link to="/register" className="btn">
              Register
            </Link>
            <Link to="/login" className="btn">
              Log In
            </Link>
          </>
        ) : (
          <div className="btn" onClick={handleLogOut}>
            Log Out
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;

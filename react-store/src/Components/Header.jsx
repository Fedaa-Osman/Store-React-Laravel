import { Link } from "react-router-dom";
import "./Header.css";

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
            <Link
              to="/register"
              style={{ textAlign: "center" }}
              className="register-nav">
              Register
            </Link>
            <Link
              to="/login"
              style={{ textAlign: "center" }}
              className="register-nav">
              Log In
            </Link>
          </>
        ) : (
          <div className="register-nav" onClick={handleLogOut}>
            Log Out
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;

import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  function handleLogOut() {
    window.localStorage.removeItem("email");
    window.location.pathname = "/";
  }
  return (
    <nav>
      <div>
        <h6>Home</h6>
        <h6>About</h6>
      </div>
      <div>
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

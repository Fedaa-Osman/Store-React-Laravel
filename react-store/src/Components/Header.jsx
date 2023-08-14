import "./Header.css";

const Header = () => {
  return (
    <nav>
      <div>
        <h6>Home</h6>
        <h6>About</h6>
      </div>
      <div>
        <div style={{ textAlign: "center" }} className="register-nav">
          Register
        </div>
        <div style={{ textAlign: "center" }} className="register-nav">
          Log In
        </div>
      </div>
    </nav>
  );
};

export default Header;

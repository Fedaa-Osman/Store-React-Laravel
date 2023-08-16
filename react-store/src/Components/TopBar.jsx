import { Link } from "react-router-dom";
const TopBar = () => {
  return (
    <div className="top-bar">
      <h1>Store</h1>
      <Link to="/" className="top-bar-btn">
        Website
      </Link>
    </div>
  );
};

export default TopBar;

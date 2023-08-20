import { Link } from "react-router-dom";
import Header from "./Components/Header";

const Home = () => {
  return (
    <div>
      <div>
        <Header />
        <h2 style={{ textAlign: "center", color: "red" }}>Home Page</h2>
        <Link to="/dashboard" className="top-bar-btn">
          Dashboard
        </Link>
      </div>
    </div>
  );
};

export default Home;

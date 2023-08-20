import { Link } from "react-router-dom";
import Header from "./Components/Header";

const Home = () => {
  return (
    <div>
      <div>
        <Header />
        <h1>Home Page</h1>
        <Link to="/dashboard" className="top-bar-btn">
          Dashboard
        </Link>
      </div>
    </div>
  );
};

export default Home;

import { Link } from "react-router-dom";
import Header from "../../Components/Header";

const Home = () => {
  return (
    <div>
      <Header />
      {/* <h2 style={{ textAlign: "center", color: "red" }}>Home Page</h2> */}
      <Link to="/dashboard" className="btn dashboard">
        Dashboard
      </Link>
    </div>
  );
};

export default Home;

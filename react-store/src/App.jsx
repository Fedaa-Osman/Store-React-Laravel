import { Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import SignUp from "./SignUp";
import Login from "./Login";

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/register" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
};

export default App;

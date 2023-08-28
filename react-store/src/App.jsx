import { Route, Routes } from "react-router-dom";
import SignUp from "./Pages/Website/Auth/SignUp";
import Login from "./Pages/Website/Auth/Login";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Home from "./Pages/Website/Home";
import Users from "./Pages/Dashboard/Users/Users";
import UpdateUser from "./Pages/Dashboard/UpdateUser";
import CreateUser from "./Pages/Dashboard/Users/CreateUser";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="users" element={<Users />} />
          <Route path="users/:id" element={<UpdateUser />} />
          <Route path="user/create" element={<CreateUser />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;

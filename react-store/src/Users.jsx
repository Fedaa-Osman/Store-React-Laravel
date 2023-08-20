import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/user/show")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  const showUsers = users.map((item, index) => (
    <tr key={index}>
      <td>{index + 1}</td>
      <td>{item.name}</td>
      <td>{item.email}</td>
      <td>
        <Link to={`${item.id}`}>
          <i className="fa-solid fa-user-pen"></i>
        </Link>
        <i
          onClick={() => deleteUser(item.id)}
          className="fa-solid fa-user-slash"></i>
      </td>
    </tr>
  ));

  async function deleteUser(id) {
    await axios.delete(`http://127.0.0.1:8000/api/user/delete/${id}`);
    setUsers(users.filter((user) => user.id !== id));
  }

  return (
    <div className="p-of-users-table">
      <div className="users-table">
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>{showUsers}</tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;

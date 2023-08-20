import { useEffect, useState } from "react";
import axios from "axios";

const UsersTest = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/user/show")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, [users]);

  const showUsers = users.map((item, index) => (
    <tr key={index}>
      <td>{index + 1}</td>
      <td>{item.name}</td>
      <td>{item.email}</td>
      <td onClick={() => delUser(item.id)}>del</td>
    </tr>
  ));
  function delUser(id) {
    axios.delete(`http://127.0.0.1:8000/api/user/delete/${id}`);
  }

  return (
    <div className="users-table" style={{ padding: "20px" }}>
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
  );
};

export default UsersTest;

import { useEffect, useState } from "react";

const Users = () => {
  const [users, setUsers] = useState([]);
  //
  const showUsers = users.map((item, index) => (
    <tr key={index}>
      <td>{index + 1}</td>
      <td>{item.name}</td>
      <td>{item.email}</td>
      <td>
        <i
          className="fa-solid fa-user-pen"
          style={{
            color: "blue",
            fontSize: "20px",
            marginRight: "30px",
            cursor: "pointer",
          }}></i>
        <i
          className="fa-solid fa-user-slash"
          style={{ color: "red", fontSize: "20px", cursor: "pointer" }}></i>
      </td>
    </tr>
    //   <i class="fa-solid fa-user-pen"></i>
  ));
  //
  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/user/show")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);
  //

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

export default Users;

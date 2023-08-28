import { useEffect, useState } from "react";
import Forms from "../../Components/Forms/Forms";

const UpdateUser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const id = window.location.pathname.split("/").slice(-1);

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/user/showbyid/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setName(data[0].name);
        setEmail(data[0].email);
      });
  }, []);

  return (
    <>
      <div className="update">
        <h1>Update User</h1>
        <div className="parent">
          <Forms
            button="Update"
            name={name}
            email={email}
            endPoint={`user/update/${id}`}
            nav="dashboard/users"
            hasLocal={false}
            buttonStyle={true}
          />
        </div>
      </div>
    </>
  );
};

export default UpdateUser;

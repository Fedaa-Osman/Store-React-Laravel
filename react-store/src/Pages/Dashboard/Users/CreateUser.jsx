import Forms from "../../../Components/Forms/Forms";

const CreateUser = () => {
  return (
    <div className="parent">
      <Forms
        endPoint="user/create"
        nav="dashboard/users"
        buttonStyle={true}
        button="Create User"
      />
    </div>
  );
};

export default CreateUser;

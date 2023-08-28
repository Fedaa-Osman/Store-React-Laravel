import Forms from "../../../Components/Forms/Forms";
import Header from "../../../Components/Header";

const SignUp = () => {
  return (
    <div>
      <Header />
      <div className="parent">
        <Forms
          button="Register"
          endPoint="register"
          nav=""
          haLocal={true}
          registerStyle={true}
        />
      </div>
    </div>
  );
};

export default SignUp;

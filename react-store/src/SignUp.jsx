import "./SignUp.css";

const SignUp = () => {
  return (
    <div className="parent">
      <div className="register">
        <form action="">
          <label htmlFor="name"> Name : </label>
          <input id="name" type="text" placeholder="Name..." />
          <label htmlFor="email"> Email : </label>
          <input id="email" type="email" placeholder="Email..." />
          <label htmlFor="pass"> Password : </label>
          <input id="pass" type="password" placeholder="Password..." />
          <label htmlFor="rpass"> Repeat Password : </label>
          <input id="rpass" type="password" placeholder="Repeat Password..." />
          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;

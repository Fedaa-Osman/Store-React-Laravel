import { useState } from "react";
import "./SignUp.css";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordR, setPasswordR] = useState("");
  const [accept, setAccept] = useState(false);
  function submit(e) {
    e.preventDefault();
    setAccept(true);
  }
  return (
    <div className="parent">
      <div className="register">
        <form onSubmit={submit}>
          <label htmlFor="name"> Name : </label>
          <input
            id="name"
            type="text"
            placeholder="Name..."
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {name === "" && accept && (
            <p className="error">Username Is Required</p>
          )}
          <label htmlFor="email"> Email : </label>
          <input
            id="email"
            type="email"
            placeholder="Email..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="pass"> Password : </label>
          <input
            id="pass"
            type="password"
            placeholder="Password..."
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {password.length < 5 && accept && (
            <p className="error">Password Must Be More Than 5 Characters</p>
          )}
          <label htmlFor="rpass"> Repeat Password : </label>
          <input
            id="rpass"
            type="password"
            placeholder="Repeat Password..."
            value={passwordR}
            onChange={(e) => setPasswordR(e.target.value)}
          />
          {passwordR !== password && accept && (
            <p className="error">Password Does Not Match</p>
          )}
          <div style={{ textAlign: "center" }}>
            <button type="submit">Register</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;

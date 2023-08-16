import { useState } from "react";
import axios from "axios";
import "./SignUp.css";
import Header from "./Components/Header";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordR, setPasswordR] = useState("");
  const [accept, setAccept] = useState(false);
  const [err, setErr] = useState("");
  // const [flag, setFlag] = useState(false);
  async function submit(e) {
    let flag = false;
    e.preventDefault();
    setAccept(true);
    if (name === " " || password.length < 9 || passwordR !== password) {
      flag = false;
    } else flag = true;
    try {
      if (flag) {
        // eslint-disable-next-line no-unused-vars
        let res = await axios.post("http://127.0.0.1:8000/api/register", {
          name: name,
          email: email,
          password: password,
          password_confirmation: passwordR,
        });
        if (res.status === 200) {
          window.localStorage.setItem("email", email);
          window.location.pathname = "/";
        }
        // .then((resp) => console.log(resp.status));
      }
    } catch (error) {
      console.log(error.response.data.message);
      console.log(error.response.data);
      setErr(error.response.data.message);
    }
    console.log(flag);
  }
  return (
    <div>
      <Header />
      <div className="parent">
        <div className="sign-up">
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
            {accept && err === "The email has already been taken." && (
              <p className="error">Email Is Already Taken ...</p>
            )}
            <label htmlFor="pass"> Password : </label>
            <input
              id="pass"
              type="password"
              placeholder="Password..."
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {password.length < 8 && accept && (
              <p className="error">
                Password Must Be Equal Or More Than 8 Characters
              </p>
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
    </div>
  );
};

export default SignUp;

// The name field is required.
// The email field is required.
// The email has already been taken.

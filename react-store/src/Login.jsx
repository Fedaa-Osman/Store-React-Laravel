import { useState } from "react";
import axios from "axios";
import "./Login.css";
import Header from "./Components/Header";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [accept, setAccept] = useState(false);
  const [err, setErr] = useState("");
  // const [flag, setFlag] = useState(false);
  async function submit(e) {
    let flag = false;
    e.preventDefault();
    setAccept(true);
    if (password.length < 9) {
      flag = false;
    } else flag = true;
    try {
      if (flag) {
        // eslint-disable-next-line no-unused-vars
        let res = await axios.post("http://127.0.0.1:8000/api/login", {
          email: email,
          password: password,
        });
        if (res.status === 200) {
          window.localStorage.setItem("email", email);
          window.location.pathname = "/";
        }
        // .then((resp) => console.log(resp.status));
      }
    } catch (error) {
      // console.log(error.response.data.message);
      // console.log(error.response.data);
      setErr(error.response.data.message);
    }
    console.log(flag);
  }
  return (
    <div>
      <Header />
      <div className="parent">
        <div className="log-in">
          <form onSubmit={submit}>
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
            <div style={{ textAlign: "center" }}>
              <button type="submit">Log In</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;

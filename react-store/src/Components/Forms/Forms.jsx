/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import axios from "axios";

const Forms = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordR, setPasswordR] = useState("");
  const [accept, setAccept] = useState(false);
  const [err, setErr] = useState("");

  const registerStyle = {
    height: "500px",
    width: "400px",
    boxShadow: " 0px 2px 15px rgb(0 0 0 / 10%)",
    padding: "30px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    marginTop: "70px",
    color: "red",
  };

  const buttonStyle = {
    width: "100%",
  };

  useEffect(() => {
    setName(props.name);
    setEmail(props.email);
  }, [props.name, props.email]);

  async function submit(e) {
    let flag = false;
    e.preventDefault();
    setAccept(true);
    if (name === " " || password.length < 8 || passwordR !== password) {
      flag = false;
    } else flag = true;
    try {
      if (flag) {
        // eslint-disable-next-line no-unused-vars
        let res = await axios.post(
          `http://127.0.0.1:8000/api/${props.endPoint}`,
          {
            name: name,
            email: email,
            password: password,
            password_confirmation: passwordR,
          }
        );
        if (res.status === 200) {
          props.hasLocal && window.localStorage.setItem("email", email);
          window.location.pathname = `/${props.nav}`;
        }
      }
    } catch (error) {
      console.log(error.response.data.message);
      console.log(error.response.data);
      setErr(error.response.data.message);
    }
  }

  return (
    <div className="parent">
      <form onSubmit={submit} style={props.registerStyle && registerStyle}>
        <label htmlFor="name"> Name : </label>
        <input
          id="name"
          type="text"
          placeholder="Name..."
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {name === "" && accept && <p className="error">Username Is Required</p>}
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
          <button
            className="btn"
            type="submit"
            style={props.buttonStyle && buttonStyle}>
            {props.button}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Forms;

// The name field is required.
// The email field is required.
// The email has already been taken.

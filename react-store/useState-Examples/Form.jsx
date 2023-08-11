import { useState } from "react";

const App = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  console.log(firstName);
  return (
    <div>
      <form action="">
        <label htmlFor="1">First Name : </label>
        <input
          id="1"
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <br />
        <br />
        <br />
        <label htmlFor="2">Last Name : </label>
        <input
          id="2"
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <br />
        <br />
        <br />
        <label htmlFor="3">Email : </label>
        <input
          id="3"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <br />
        <br />
        <button type="submit">Submit</button>
        <br />
      </form>
    </div>
  );
};

export default App;

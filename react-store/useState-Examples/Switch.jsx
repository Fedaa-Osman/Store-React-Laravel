// import { useState } from "react";

// const App = () => {
//   const [value, setValue] = useState(true);
//   function Toggle() {
//     setValue((v) => !v);
//   }
//   return (
//     <div>
//       <div style={{ fontSize: "50px" }}>{value ? "Majd" : "Hatem"}</div>
//       <button onClick={Toggle}>Click</button>
//     </div>
//   );
// };

// export default App;

// import { useState } from "react";

// const App = () => {
//   const [name, setName] = useState("Hello");
//   function Toggle() {
//     setName(name === "Hello" ? "Hi" : "Hello");
//   }
//   return (
//     <div onClick={Toggle} style={{ fontSize: "50px", textAlign: "center" }}>
//       {name}
//     </div>
//   );
// };

// export default App;

import { useState } from "react";

const App = () => {
  const [name, setName] = useState("Hello");
  function Toggle() {
    setName((v) => !v);
  }
  return (
    <div onClick={Toggle} style={{ fontSize: "50px", textAlign: "center" }}>
      {name ? "Hello" : "Hiiiii"}
    </div>
  );
};

export default App;

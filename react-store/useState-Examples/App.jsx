import { useEffect, useState } from "react";
import Name from "./Components/Name";
const App = () => {
  const [sum, setSum] = useState([]);
  const dataShow = sum.map((item, index) => <Name name={item} key={index} />);
  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => setSum(data.data.memes.map((item) => item.name)));
  }, []);
  return <div>{dataShow}</div>;
};

export default App;

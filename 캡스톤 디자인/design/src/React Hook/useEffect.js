import { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  const sayHello = () => console.log("hello");
  const [button01, setButton01] = useState(0);
  const [button02, setButton02] = useState(0);
  useEffect(sayHello, []);
  return (
    <div className="App">
      <h1>Hello</h1>
      <h2>Start editing to see some magic happen!</h2>
      <button onClick={() => setButton01(button01 + 1)}>{button01}</button>
      <button onClick={() => setButton02(button02 + 1)}>{button02}</button>
    </div>
  );
}

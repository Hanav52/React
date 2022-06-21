import { useState } from "react";
import "./styles.css";

export default function App() {
  const [item, setitem] = useState(1);
  const incrementItem = () => setitem(item + 1);
  const decrementItem = () => setitem(item - 1);
  return (
    <div className="App">
      <h1>Hello {item}</h1>
      <h2>Start editing to see some magic happen!</h2>
      <button onClick={incrementItem}>increment</button>
      <button onClick={decrementItem}>decrements</button>
    </div>
  );
}

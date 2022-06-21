import { useEffect, useState } from "react";
import "./styles.css";

const useClick = (onClick) => {
  // eslint-disable-next-line no-undef
  const element = useRef();
  useEffect(() => {
    if (element.current) {
      element.current.addEventListener("click", onClick);
    }
  });
  return element;
};

export default function App() {
  const sayHello = () => console.log("say hello");
  const title = useClick(sayHello);
  return (
    <div className="App">
      <h1 ref={title}>Hello</h1>
    </div>
  );
}

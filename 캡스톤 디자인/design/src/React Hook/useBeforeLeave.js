import { useEffect } from "react";

const useBeforeLeave = (onBefore) => {

    useEffect(() => {
        document.addEventListener("mouseLeave", handle);
        return () => document.removeEventListener("mouseleave", handle);
      }, []);
  if (typeof onBefore !== "function") {
    return;
  }
  const handle = (event) => {
    const { clientY } = event;
    if (clientY <= 0) {
      onBefore();
    }
  };
  
};

export default function App() {
  const begForLife = () => console.log("pls dont leave");
  useBeforeLeave(begForLife);
  return (
    <div className="App">
      <h1>hello</h1>
    </div>
  );
}

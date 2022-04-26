import {useState, useEffect} from "react";

function Hello() {
  useEffect(() => {
    console.log("hi :)");
    return () => console.log("destroyed :(")
  }, []);
  return <h1>hello</h1>
}

function App() {
  const [showing, setShowing] = useEffect(false);
  const onClick = () => {
    setShowing((prev) => !prev);
  }
  return (
    <div>
      {showing ? <Hello/> : null}
      <button onClick={onClick}>{showing ? "hide" : "Show"}</button>
    </div>
  );
}
export default App;

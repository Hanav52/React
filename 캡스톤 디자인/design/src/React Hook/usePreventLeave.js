import "./styles.css";

const usePreventLeave = () => {
  const listener = (event) => {
    event.preventDefault();
    //크롬 새로고침 할떄 다시 알림창이 뜨게 해준다.
    event.returnValue = "";
  };
  // 창을 닫을 떄 한번 더 물어본다.
  const enablePrevent = () => {
    window.addEventListener("beforeunload");
  };
  // 물어보지 않는다.
  const disablePrevent = () =>
    window.removeEventListener("beforeunload", listener);
  return { enablePrevent, disablePrevent };
};

export default function App() {
  const { enablePrevent, disablePrevent } = usePreventLeave();
  return (
    <div className="App">
      <button onClick={enablePrevent}>protect</button>
      <button onClick={disablePrevent}>unprotect</button>
    </div>
  );
}

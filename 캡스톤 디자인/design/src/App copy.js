import {useState, useEffect} from "react";


function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);
  useEffect ( () => {
    console.log("I run only once.")
  }, []);
  useEffect(() => {
      console.log("I run when 'keyword' changes.");
  }, [keyword]);
  useEffect(() => {
      console.log("I run when 'counter' changes.");
  }, [counter]);
  useEffect(() => {
    console.log("I run when counter&keyword changes.");
  }, [keyword, counter]);
  return (
    <div>
      <input value={keyword} onChange={onChange} type="text" placeholder="search here"/>
      <h1>{counter}</h1>
      <button onClick={onClick}>click me </button>
    </div>
  );
}
/*useEffect
- 두 개의 argument를 가지는 함수
- 첫 번째 argument는 우리가 딱 한번만 실행하고 싶은 코드
- 두 번째는 [] 배열을 넣어줌
-> useEffect가 컴포넌트의 첫 번째 렌더 시점에 iRunOnlyOnce 함수 호출
그리고 상태를 변화시키면 iRunOnlyOnce는 호출되지 않음
즉, 한번만 렌더링 됨
단순화 하여 useEffect(() => {
console.log("CALL THE API")
},[]); 써도 됨
state를 변경할때는 함수가 다시 시작된다.*/
export default App;

import { useEffect, useState } from "react";
import "./styles.css";

// useTitle의 intialTitle의 값이 Loading..이 된다.
const useTitle = (initialTitle) => {
  // title은 Loading... 이다.
  const [title, setTitle] = useState(initialTitle);
  const updateTitle = () => {
    const htmlTitle = document.querySelector("title");
    htmlTitle.innerText = title;
  };
  useEffect(updateTitle, [title]);
  return setTitle;
};

export default function App() {
  // titleUpdater는 useTitle을 이용하여 Loading... 이라는 제목을 가진다.
  const titleUpdater = useTitle("Loading...");
  // setTimeout을 이용하여 titleUpdater의 값을 5초 뒤에 바꾼다.
  setTimeout(() => titleUpdater("home"), 5000);
  return (
    <div className="App">
      <h1>Hello</h1>
    </div>
  );
}

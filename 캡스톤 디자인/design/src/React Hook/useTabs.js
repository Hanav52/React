import React, { useState } from "react";
import ReactDOM from "react-dom";

// content 배열을 만들어 둔다.
const content = [
  {
    tab: "Section 1",
    content: "저는 첫번째 섹션입니다."
  },
  {
    tab: "Section 2",
    content: "저는 두번째 섹션입니다."
  }
];
// useTabs를 이용한다. useTabs(movie, setMoive) 같은거다
//initialTab, allTabs 두개의 매개변수를 갖는다.
//initialTab에는 초기에 노출할 값, allTabs에는 모든 tab의 정보를 준다.
const useTabs = (initialTab, allTabs) => {

    const [currentIndex, setCurrentIndex] = useState(initialTab);
    // allTabs가 배열이 아닐때 리턴한다.
    if (!allTabs || !Array.isArray(allTabs)) {
        // useTabs를 사용할 때 두번째 매개변수를 주지 않거나, 두번째 매개변수가 매열이 아니라면 return(에러 페이지 뜨지 않게)
      return;
    }
    // currentItem은 allTabs에다가 currentIndex의 값을 넣는다.
    // changeItem은 값이 바뀔 떄 setCurrentIndex의 값을 바꾼다.
    return {
      currentItem: allTabs[currentIndex], //allTabs의 인덱스 값으로 찾은 현재 탭의 정보
      changeItem: setCurrentIndex // 활성화 된 tab
    };
  };

export default function App() {
    // return된 currentItem과 changeItem을 선언 useTabs를 통해 0번쨰 content를 보여준다.
  const { currentItem, changeItem } = useTabs(0, content);
  return (
    <div className="App">
      {content.map((section, index) => (
        <button onClick={() => changeItem(index)}>{section.tab}</button>
      ))}
      <div>{currentItem.content}</div>
    </div>
  );
}

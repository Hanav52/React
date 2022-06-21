const backToTop = document.getElementById('backtotop');

function checkScroll() {
    /*
      웹페이지가 수직으로 얼마나 스크롤되었는지를 확인하는 값(픽셀 단위로 반환)
      https://developer.mozilla.org/ko/docs/Web/API/Window/pageYOffset
    */
    let pageYOffset = window.pageYOffset;

    if (pageYOffset !== 0) {
        backToTop.classList.add('show');
    } else {
        backToTop.classList.remove('show');
    }

}

function moveBackToTop() {
    if (window.pageYOffset > 0) {
        /*
        smooth 하게 스크롤하기
        https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollTo
        */
       window.scrollTo({top: 0, behavior: "smooth"})
    }
}

window.addEventListener('scroll', checkScroll);
backToTop.addEventListener('click', moveBackToTop);

//
const transformPrev = () => {
    
}
const slidePrevList = document.getElementsByClassName('slide-prev');

for (let i = 0; i< slidePrevList.length; i++) {
    // ul 태그 선택
    let classList = slidePrevList[i].parentElement.parentElement.nextElementSibling;
    let ilList = classList.getElementsByTagName('li');

    // 카드가 ul 태그 너비보다 넘치면, 왼쪽(prev) 버튼을 활성화하고, 오른쪽(next)는 현재 맨 첫카드 위치이므로 비활성화
    if(classList.clientWidth < (ilList.length * 260)) {
        slidePrevList[i].classList.add('slide-prev-hover');
        slidePrevList[i].addEventListener('click', transformPrev);
    } else {
        /* 태그 삭제시, 부모 요소에서 removechild를 통해 삭제해야한다.
            따라서 1. 먼저 부모 요소를 찾아서,
                   2. 부모 요소의 자식 요소로 있는 prev와 next요소를 삭제한다.
                   */
        const arrowContainer = slidePrevList[i].parentElement;
        arrowContainer.removeChild(slidePrevList[i].nextElementSibling);
        arrowContainer.removeChild(slidePrevList[i]);
    }
}
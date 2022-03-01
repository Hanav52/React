// 기본문법
function 함수이름(함수인자) {
    함수실행코드
}
// 예제
function FunCoding(name) {
    console.log(`hi, ${name} !`);
}
FunCoding('fun-coding');
// return 타입
function funcoding(name) {
    return 'hi!' + name;
}
console.log(funcoding('dave'));

// arrow function
// function 키워드 생략 가능
// 함수인자가 하나뿐이면, 괄호 생략가능
// 함수 코드가 한 라인이라면, 코드 블록 기호(중괄호) 및 return 키워드 생략 가능
let func = (item1, item2) => console.log(func(1,2));
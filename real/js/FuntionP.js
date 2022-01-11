// 기본 문법
function FunCoding1(name1) {
    console.log(name1);
}
FunCoding1('dave');

// return 타입
function FunCoding(name) {
   return 'hi' + name; 
}

console.log(FunCoding('dave'));

//let func = () => expression 
//let func = function(함수인자) {
//    return expression;
//};

let func = (name) => console.log('hi ' + name);
func('dave');

let func1 = () => console.log('hi');
func();

let func2 = (item1, item2) => item1 * item2;
console.log(func2(1,2));
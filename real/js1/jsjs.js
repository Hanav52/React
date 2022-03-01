// let a = 1;
// let b = 2;
// [a,b] = [b,a];
// console.log(a,b);

// let c = a;
// a=b;
// b=c;
// console.log(a,b);

function getData() {
    return [1,2,3];
}

let [a,b,c] = getData();
console.log(a,b,c);

let data = 'dave lee, fun-coding,coding';

let[name,brand, hobby] = data.split(',');
console.log(name, brand);


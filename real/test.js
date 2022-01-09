const count = 17;
const size = 17.1;
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);

const char ='c';
const b = 'bdfsdf';
const greeting = 'hello' + b;
console.log(`value: ${greeting}, type: ${typeof greeting}`);

const symbol1 = Symbol('id');

let text = 'hello';
console.log(`value: ${text}, type: ${typeof text}`);
text = 1;
console.log(`value: ${text}, type: ${typeof text}`);
text = '8' / '2';
console.log(`value: ${text}, type: ${typeof text}`);

const ellie = { name : 'ellie', age:20};
ellie.age = 21;
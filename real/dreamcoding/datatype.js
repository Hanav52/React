let gloabalName = 'globalname';

{
let name = 'ellie';
console.log(name);
name = 'hello';
console.log(name);
}
console.log(gloabalName);


const a = 1;
const b = 2;
const count = 17;
const size = 17.1;
console.log(`${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);

const infinity = 1/0;
const negativeinfinity = -1/0;
const nan = 'not a number'/2;
console.log(infinity);
console.log(negativeinfinity);
console.log(nan);

let text = 'hello';
console.log(`value: ${text}, type: ${typeof text}`);
text = 1;
console.log(`value: ${text}, type: ${typeof text}`);
text = '7' + 5;
console.log(`value: ${text}, type: ${typeof text}`);
text = '8' /2;
console.log(`value: ${text}, type: ${typeof text}`);


const ellie = { name : 'ellie', age:20 };
ellie.age = 21;
console.log(`앨리의 나이 : ${ellie.age}`);
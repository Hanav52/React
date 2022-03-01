// 1. String concatenation
console.log('my'+ ' cat');
console.log('1' + 2);
console.log(`string literals: 1 + 2 = ${1 + 2}`);    

// 2. variable, read/write
let gloabalName = 'globalname';

{
let name = 'ellie';
console.log(name);
name = 'hello';
console.log(name);
}
console.log(gloabalName);

// 3. Increment and decrement operators
let counter = 2;
const preIncrement = ++counter;
console.log(`preIncrement: ${preIncrement}, counter : ${counter}`);
const postIncrement = counter++;

// 4. assignment operators
let x = 3;
let y = 6;
x += y;
x -= y;
x *= y;
x /= y;

//5. comparison operators

//6. logical operators
const calue1 = false;
const value2 = 4<2;

// || (or)
console.log(`or: ${calue1 || value2 || check()}`);

function check() {
    for (let i = 0; i < 10; i++) {
        console.log('sdfsdf');
    }
    return true;
}

//7. equality
const stringFive = '5';
const numberFive = 5;
console.log(stringFive == numberFive);
console.log(stringFive != numberFive);
console.log(stringFive === numberFive);
console.log(stringFive !== numberFive);

//8 ternary operator
console.log(name === 'ellie' ? 'yes' : 'no');

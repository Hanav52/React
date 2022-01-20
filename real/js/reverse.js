const data1 = [1, 2, 3, 4, 5, 6];
data1.reverse();
console.log(data1);

let myArray = [1, 2, 'dave' , 100];
myArray.slice(0,1);
console.log(myArray.slice(0,2));

let myArray1 = [1, 2, 'dave', 100];
myArray1.forEach(item => {
    console.log(item)
})

const data2 = data1.map(item => item * 2);
console.log(data2);

console.log(myArray.indexOf('dave'))


let even = data1.filter(itme => itme % 2 === 0);
console.log(even, typeof even);
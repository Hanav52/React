// const data = [1,2,3];

// console.log(data);
// console.log(...data);
// console.log(data[0], data[1], data[2]);

function func(a,b,c,d) {
    console.log(b,c);
}

const data = [1,2,3,4];
func(...data);

const data1 = [1,2,3];
const data2 = [0, ...data1, 4, 5];

console.log(data2);
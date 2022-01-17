for(let i = 0; i<5; i++) {
    console.log(i);
}
console.log('end');

const data = ['dave', 30, true];
for(let i = 0; i< data.length; i++) {
    console.log(typeof data[i]);
}

for(let item of data) {
    console.log(item);
}
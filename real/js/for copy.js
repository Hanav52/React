const data = {
    name: 'dave',
    age: 20,
    brand: 'fun-coding',
    get_message: () => 'hello! you can do it'
}

// console.log(Object.entries(data));
// console.log(Object.keys(data));
// console.log(Object.values(data));

for(let property in data) {
    console.log(property, data[property]);
}
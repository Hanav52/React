'use strict';

// 1. class declarations
class person {
    constructor(name, age) {
        this.name = name;
        this.age = age;

    }

    speak() {
        console.log(`${this.name}: hello!`)
    }
}

const ellie = new person('ellie', 20);
console.log(ellie.name);
console.log(ellie.age);
ellie.speak();
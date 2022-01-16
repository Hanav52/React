class Animal {
    constructor (name) {
        this.name = name;
    }

    get_message() {
        return 'hello';
    }
}

class User extends Animal {
    constructor (name, age) {
     super(name);
     this.age = age;
    }
    get_message() {
     return 'hello world';
    }
}
const dave = new User('dave',30);
console.log(dave.name, dave.age, dave.get_message());
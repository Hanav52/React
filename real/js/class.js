class user1 {
    constructor(name , age) {
        this.name = name;
        this.age = age;
    }

    get_message() {
        return 'hello!';
    }
}

const dave = new user1('dave', 30);
console.log(typeof dave, dave.name, dave.age, dave.get_message());
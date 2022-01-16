const user = {
    age: 10,
    name: 'dave',

    get get_age() {
        return this.age;
    },
    set set_age(value) {
        this.age = value;
    }
};

console.log(user.get_age);
user.set_age = 20;
console.log(user.get_age);
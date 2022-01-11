const emptyObject = {};

emptyObject.name = "dave";
emptyObject.age = 24;
emptyObject.get_data = function() {
    return 1 + 2;
};

console.log(emptyObject.age, emptyObject.get_data());

const user = {
    age: 20,
    name: "dave",
    get_data: function() {
        return 1 * 2;
    }
};

console.log(typeof user, user);
console.log(user.age);
console.log(user.name);
console.log(user.get_data());

const user1 = {
    age: 10,
    name: "lee",
    details: {
        hobby: "game",
        major: "coding",
        get_details: function(item) {
            return item * 2;
        }
    }
};

console.log(user1.age, user1.name);
console.log(user1.details.hobby, user1.details.major, user1.details.get_details(2));
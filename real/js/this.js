const user = {
    age: 10,
    name: 'dave',
    details: {
        hobby: 'coding',
        major: 'japanese',
        get_hobby: function() {
            return this.hobby;
        }
    }
};
console.log(user.details.get_hobby())

const user1 = {
    age: 10,
    name: 'dave',
    details:{
        hobby: 'coding',
        major: 'japanese',
        get_hobby: () => 'hobby'
    }
};
console.log(user1.details.get_hobby())
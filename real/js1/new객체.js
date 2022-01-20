let data = {
    name: 'dave',
    age: 20
};

let { age, name } = data; // 동일한 프로퍼티명을 써줘야, 해당 프로퍼티에 맞는 값이 대입됨
console.log(name, age);

// 프로퍼티명과 다른 변수명을 사용하고자 할 경우, 대입할 프로퍼티명: 다른 변수명의 형태로 써줘야 함
let { name: myname, age: myage } = data;
console.log(myname, myage);

// 꼭 객체의 모든 프로퍼티를 가져올 필요는 없고, 객체의 프로퍼티 중 가져오고 싶은 데이터만 가져올 수 있음
let { name: myname2 } = data;
console.log(myname2);

// const로 선언시 못 바꿈

let data1 = [1,2,3];

const [ , ,item3] = data1;

console.log(item3);
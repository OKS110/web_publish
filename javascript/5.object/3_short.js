// 변수를 객체의 value로 사용하는 경우, property 생략 가능

let name = '홍길동';
let age = 20;

const person = {
    name, age //value만
    // property(key)와 value 이름이 같을 때 생략 가능
}
console.log(person); //{ name: '홍길동', age: 20 }

let x = 0, y = 0;

const obj = {
    x, y
}
console.log(obj);

let fname = 'apple', emoji = '🍎', color = 'Red';

const fruits = {
    fname, // fname: fname,
    emoji, //emoji: emoji,
    color //color: color,
}
console.log(fruits);

// 사원들의 정보를 입력받아서, 객체로 반환하는 함수를 정의
// 사원정보 - 사번(empno), 이름(ename), 나이(age)
const createObj = (empno, ename, age) => {
    return {empno, ename, age}; // 객체로 반환하기 위해 중괄호로 감쌈
}

console.log(createObj("1234", "홍길동", 20)); //{ empno: '1234', ename: '홍길동', age: 20 }
console.log(createObj("7854", "안철수", 30)); //{ empno: '7854', ename: '안철수', age: 30 }
let emp1 = createObj("1234", "홍길동", 20);
let emp2 = createObj("7854", "안철수", 30);

/*
[
    { empno: '1234', ename: '홍길동', age: 20 },
    { empno: '7854', ename: '안철수', age: 30 },
    ...
]
*/
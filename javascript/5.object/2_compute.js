// person 객체를 CRUD로 관리하는 함수를 정의
// C(Create), R(Read), U(Update), D(Delete)
// setValue(), getValue(), updateValue(), deleteValue()

//파라미터로 key값에 넣을 때는 []표기 안에!! - .은 안 됨(리액트는 가능)


const person = {
    name: "홍길동", //원래 기본형은 'key': 'value';
    age: 20,
    job: '개발자',
}
const fruits = {
    name: "사과",
    emoji: '🍎',
}

const setValue = (obj, newKey, newValue) => obj[newKey] = newValue; //setValue 화살표 함수
const getValue = (obj, key) =>  obj[key]; //getValue 화살표 함수
const updateValue = (obj, key, newValue) => obj[key] = newValue; //updateValue 화살표 함수
const deleteValue = (obj, key) => delete obj[key]; //deleteValue 화살표 함수

//원래 기본형은 "key": "value"; 이므로 함수에 파라미터로 변수를 줄 때(외부에서 전달 시) ""필요
setValue(person, "address", '서울시');
setValue(fruits, "address", '경북');
setValue(fruits, "color", 'Red');

console.log(person); //{ name: '홍길동', age: 20, job: '개발자', address: '서울시' }
console.log(fruits); //{ name: '사과', emoji: '🍎', address: '경북', color: 'Red' }

console.log(getValue(person, 'name')); //홍길동
console.log(getValue(fruits, 'color')); //Red

updateValue(person, 'name', '안철수');
updateValue(fruits, 'color', 'Green');
console.log(person); //{ name: '안철수', age: 20, job: '개발자', address: '서울시' }
console.log(fruits); //{ name: '사과', emoji: '🍎', address: '경북', color: 'Green' }

deleteValue(person, 'age');
deleteValue(fruits, 'name');
console.log(person); //{ name: '안철수', job: '개발자', address: '서울시' }
console.log(fruits); //{ emoji: '🍎', address: '경북', color: 'Green' }
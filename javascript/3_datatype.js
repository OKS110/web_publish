/**
 * 
 * Primitive 데이터 타입
 * - 정수형(Integer) : 100, 1, 47...
 * - 실수형(Float, Double) : 0.1, 3.141592...
 * - 문자형(Character, String) : '', ""
 * - 불린형(Boolean) : true, false
 * 
 * Reference 데이터 타입
 * - 객체형(Object) : 배열([]), JSON({}) ...
 */

// 정수형 변수
let number = 100;
console.log(number); //100

// 실수형 변수
let fnumber = 10.123;
console.log(fnumber); //10.123

// 불린형 변수
let flag = true;
console.log(flag); //true
console.log(typeof(flag)); //boolean
flag = !true; //!는 not
console.log(flag); //false

// 객체형 변수
let nameList = ['안철수', '윤석열', '문재인', '박정희', '김대중'];
console.log(nameList); //['안철수', '윤석열', '문재인', '박정희', '김대중']

// primitive, reference 데이터 타입 초기화
let address = undefined; // primitive
console.log(address); //undefined

let addressList = null; // reference
console.log(addressList); //null


// 데이터 타입 비교 : typeof
let x = 10;
let xx = 10;
let y = '10';
let obj = {
    name:'안유진'
};
console.log(x, typeof(x));
console.log(y, typeof(y));
console.log(x == y); //true - 값만 비교
console.log(x === y); //false - 데이터 타입까지 비교
console.log(xx, typeof(xx));
console.log(x === xx); //true

console.log(obj, typeof obj);
console.log(obj.name); // 안유진
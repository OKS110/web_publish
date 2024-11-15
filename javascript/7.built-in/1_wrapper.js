// 기본(원시) 데이터타입(Primitive DataType) - number, string, boolean ...
// 기본 데이터타입을 클래스로 생성해 놓은 객체들을 wrapper 클래스라고 함.


// Number Class
let a = "123";

if(typeof a === 'string') a = parseInt(a);
if(a = 123) console.log(a); // 123

if(Number('123') === 123) console.log(`a => ${a}`); // a => 123

let aa = new Number(100);
console.log(Number.isNaN(aa)); //false

let maxValue = Number.MAX_VALUE;
let minValue = Number.MIN_VALUE;

console.log(maxValue); //1.7976931348623157e+308
console.log(minValue); //5e-324

let x = 100;
let y = new Number(100);
console.log(typeof x); //number
console.log(typeof y); //object
console.log(x === y); // false
console.log(x === y.valueOf()); // true  valueOf - 객체의 값을 찾는다.

// String Class + 템플릿 리터럴(``)
let str = 'hello!';
let str2 = new String('hello!');

console.log(typeof str); //string
console.log(typeof str2); //object
console.log(str ===str2); //false
console.log(str === str2.valueOf()); //true

// Boolean Class
let flag = true;
let flag2 = new Boolean(true);

console.log(typeof flag); //boolean
console.log(typeof flag2); //object
console.log(flag === flag2); //false
console.log(flag === flag2.valueOf()); //true
// 비교 연산자 : <, >, <=, >=, !=, ==, ===
// 실행 결과 타입 : boolean
// 제어문, if, while 문에서 사용!!!

/*
if(조건식 : 3 > 2){
    조건식이 참일 때 true
} else{
    조건식이 거짓일 때 false
}
*/
console.log("=======================================================================");

console.log(3>2); // t
console.log(3<2); // f
console.log(3>=2); // t
console.log(3<=2); // f
console.log(3==2); // f
console.log(3===3); // t
console.log(3 == "A"); // f  3 == 67
console.log("=======================================================================");

let obj1 = {
    name: '홍길동',
};
let obj2 = {
    name: '홍길동',
};
let obj3 = obj1;
console.log(obj1); //{ name: '홍길동' }
console.log(obj2); //{ name: '홍길동' }
console.log(obj1 == obj2); // false
console.log(obj1 === obj2); // false
console.log(typeof obj1 === typeof obj2); // true
console.log("=======================================================================");


console.log(obj1 == obj3); // true
console.log(obj1 === obj3); // true
console.log(typeof obj1 === typeof obj3); // true
console.log("=======================================================================");


console.log(obj1.name == obj2.name); // true
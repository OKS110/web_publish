// Math 클래스 - 정의된 모든 변수, 상수, 함수 값은 static으로 선언
// Math.변수, Math.상수, Math.함수명

let num1 = 123.856;

console.log(num1); //123.456
console.log(`Math.abs(num1) = ${Math.abs(num1)}`); // 절대값 Math.abs(num1) = 123.856
console.log(`Math.floor(num1) = ${Math.floor(num1)}`); // 소수점 절삭 Math.abs(num1) = 123
console.log(`Math.trunc(num1) = ${Math.trunc(num1)}`); // 소수점 절삭 Math.abs(num1) = 123
console.log(`Math.round(num1) = ${Math.round(num1)}`); // 반올림 Math.round(num1) = 124
console.log(`Math.max(1,2,3,4,5) = ${Math.max(1,2,3,4,5)}`); // 최대값 - Math.max(1,2,3,4,5) = 5
console.log(`Math.min(1,2,3,4,5) = ${Math.min(1,2,3,4,5)}`); // 최소값 - Math.min(1,2,3,4,5) = 1

// 자릿수별 절삭
let num2 = 12345.385;
console.log(Number(num2).toPrecision(3)); //1.23e+4; e+4는 10의 4승

// 0~1 사이의 숫자를 랜덤하게 반환
console.log(`Math.random(1,2,3,4,5) = ${Math.random()}`); // 0.01741451312498743

// 1~100 사이의 숫자를 랜덤하게 출력
let rnum = Math.floor(Math.random() * 10 + 1);
console.log(rnum);



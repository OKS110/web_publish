// 
// 변수 선언 : var, let, const
// 형식 : (var, let, const) 변수명 = 데이터;

// name 이라는 변수를 선언하고 홍길동 이름으로 초기화합니다.
// age 변수를 선언하고, 20으로 초기화

let name = "홍길동";
let age = 20;
const address = "서울시";

// 백종원으로 바꿔주세요.
name = "백종원";
// let age = 40; 오류
// age = "공유";
age = 30;

// address = "부산시";
// const 로 선언한 변수는 값 변경 불가
// address, name, age 변수의 값을 콘솔에 출력
console.log(address);

console.log(name);
console.log(typeof age);
console.log(age);
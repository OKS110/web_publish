// 
// 변수 선언 : var, let, const
// 형식 : (var, let, const) 변수명 = 데이터;

// name 이라는 변수를 선언하고 홍길동 이름으로 초기화합니다.
// age 변수를 선언하고, 20으로 초기화
// address 변수를 선언하고 서울시로 초기화합니다.

let name = "홍길동";
let age = 20;
const address = "서울시";

// name을 백종원으로 바꿔주세요.
name = "백종원";
// age를 30으로 바꿔주세요.
age = 30;
// let age = 40; 오류 - 같은 이름의 변수를 한 번 더 선언 불가
// age = "공유"; - 가능. 타입이 string으로 변함


// address = "부산시"; - 불가능
// const 로 선언한 변수는 값 변경 불가 - 상수

// address, name, age 변수의 값을 콘솔에 출력
console.log(address);

console.log(name);
console.log(typeof age);
console.log(age);
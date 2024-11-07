//한 줄 주석

/* 여러 줄 주석*/

/*
// 변수명 선언 규칙
- 라틴어(0~9, a~z, A~Z)
- 특수문자($, _) 사용가능
- camel case : ex) camelCase
- snake case : ex) snake_case

//주의사항
- 숫자로 시작 X
- 예약어(키워드) 사용 불가
- ($, _)를 제외한 특수문자 사용 불가
- 이모지 사용 불가


*/
console.log("hi");

// camelCase
let myName = "Eric";
let myAge = 28;

console.log(myName, myAge);

// snake_case
let audio_name = "삼성";
let audio_color = "Red";
console.log(audio_name);
console.log(audio_color);

// 저의 이름은 Eric이고, 나이는 28입니다.
let str1 = "저의 이름은 " + myName + "이고, 나이는 " + myAge + "입니다."


// 템플릿 리터럴을 사용하는 것을 권장
let str2 = `저의 이름은 ${myName}이고, 나이는 ${myAge}입니다.`

console.log(str1);
console.log(str2);

// 상수 선언 :: 변수, 상수는 프로그램의 상단에 위치
// 상수 선언 시 모두 대문자로, SNAKE_CASE로 선언하면 good!
const START = 1;
const CONT = 2;
const FINISH = 0;
const AUDIO_DEVICE = 3;

// 제어문 - 조건문 : switch(조건) ~ case;
/**
 *  switch(숫자, 문자){
 *      case 숫자 문자리터럴 : 
 *          실행문;
 *          break;
 *      ...
 *      default: 
 *          실행문;
 *  }
 * 
 * case문은 break문을 만나기 전까지 계속 실행된다.
 * 
 */


// 임의의 숫자를 입력받아
// 짝수이면 빨간 사과,
// 홀수이면 초록사과를 출력

let number = 200;
let result1;
switch(number % 2){
    case 0:
        result1 = '🍎';
        break;
    case 1:
        result1 = '🍏';
        break;
    default:
        result1 = "홀수 또는 짝수로 입력해주세요.";
}
console.log(result1);


// 0:월요일 ~ 6:일요일
let useage = "0:월요일 ~ 6:일요일";
let day = 0;
let result2;
switch(day){
    case 0:
        result2 = '월요일';
        break;
    case 1:
        result2 = '화요일';
        break;
    case 2:
        result2 = '수요일';
        break;
    case 3:
        result2 = '목요일';
        break;
    case 4:
        result2 = '금요일';
        break;
    case 5:
        result2 = '토요일';
        break;
    case 6:
        result2 = '일요일';
        break;
    default:
        console.log(`사용법 : ${useage}`);
}
if(result2 != undefined){
    console.log(`선택한 요일은 [${result2}]입니다.`);
}


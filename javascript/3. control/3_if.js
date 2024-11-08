// 임의의 숫자를 입력받아
// 짝수이면 빨간 사과,
// 홀수이면 초록사과를 출력

let num = 13; //홀수
num = 200; //짝수
let result;
if(num % 2 === 0){ //짝수일 때
    // console.log('🍎');
    result = '🍎';
}else{ //홀수일 때
    // console.log('🍏');
    result = '🍏';
}
console.log(`실행 결과 == ${result}`);

// if문에서 0은 false, 1은 true
if(num % 2){ // 200 % 2 == 0이므로 false로 작용 - else로 넘어감. 
    //홀수일 때
    result = '🍏';
}else{ // 짝수일 때
    result = '🍎';
}
console.log(`실행 결과 == ${result}`);

let choice;
!(num % 2)? choice = '🍎': choice = '🍏';
console.log(`삼항연산자 실행 결과1 == ${choice}`);

let t = !(num % 2)? '🍎': '🍏';
console.log(`삼항연산자 실행 결과2 == ${t}`);


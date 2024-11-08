// 제어문 - 반복문 : for, while

// for: 정확한 반복 횟수를 알고 있을 때 <--> Array
// for(초기값(선언문); 조건식; 증감식){
//      실행문 - 조건식이 true인 경우 실행;
// }
// 1. 초기값을 선언한다. --> 초기값 변수는 for문 환경 안에서만
// 2. 선언한 변수는 조건식을 통해 비교한다. --> boolean 타입의 결과
// 3. 2번 결과가 true일 때, 실행문 실행한다.
// 4. 실행문이 종료되면, 증감식을 실행한다.
// (2) ~ (4)번 반복해서 작업 실행
// 5. 조건식이 false가 되면 for 루프를 빠져나온다.

// 숫자 1 ~ 5까지 반복해서 출력해주세요.
for(let i = 0; i < 5; i++){
    console.log(i + 1); // 1 2 3 4 5
}
console.log("=======================================================================");


// 숫자 배열을 출력해 주세요.
let numberList1 = [1, 2, 3, 4, 5];

for(let i = 0; i < numberList1.length; i++){
    console.log(numberList1[i]); // 1 2 3 4 5
}

console.log("=======================================================================");

// 이모지를 출력해주세요.
let numberList2 = ['🍕', '🍔', '🍟'];

// 배열의 크기 구하는 형식 : 배열객체.length
for(let i = 0; i < numberList2.length; i++){
    console.log(numberList2[i]); // 🍕 🍔 🍟
}

console.log("=======================================================================");

// 과일 리스트 출력
let fruitList = ['apple', 'orange', 'lemon'];
let emojiList = ['🍎', '🍊', '🍋'];
let length = fruitList.length;
for(let i = 0; i < length; i++){
    console.log(fruitList[i]); // apple orange lemon

    // lemon만 출력
    let fruit = fruitList[i];
    let emoji = emojiList[i];
    if(fruit === 'lemon'){
        console.log(`${emoji}이 출력됩니다.`);
    }
}

// while : 종료하는 시점을 정확하게 알고 있을 때 <--> true, false 값을 통해 체크

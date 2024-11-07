// 제어문 - 조건문 : if, while, do~while




// if(조건식: 비교연산자 포함){조건식이 참인 경우 실행;}
// if(조건식){ 조건식이 참인 경우;} else{ 조건식이 거짓인 경우;}
// if(조건식1){조건식1이 참일 때} else if(조건식2){조건식2가 참일 때} ...
// else {어떤 조건도 만족하지 않을 때}

/*
예시
if(조건식 : 3 > 2){
    조건식이 참일 때 true
} else{
    조건식이 거짓일 때 false
}
*/
console.log('===========================================');

// 입력되는 과일명이 apple인 경우에만 출력
// orange인 경우에는 오렌지 이모지 출력
// apple이나 orange가 아닌 경우에는 else문 출력
let fruit = "apple";
// fruit = 'orange';
if(fruit === "apple"){
   console.log('🍎');
}else if(fruit === 'orange'){
    console.log('🍊');
}else{
    console.log('fruit');
}
console.log('===========================================');

// 위의 조건식을 삼항 연산자로 작성
// 삼항 연산자 : (조건식) ? true 일 때 : false 일 때;
let t = fruit === 'apple'? '🍎' : 'false';
console.log(t); // 🍎


console.log('===========================================');

// 요구사항 : 점심메뉴에 피자와 햄버거가 있다. 
// 메뉴를 선택하면 해당 이모지가 출력되는 코드를 작성해보자.

// 점심메뉴 : 피자 - 🍕, 햄버거 - 🍔
let menu = 'pizza'; //피자 선택
let lunch = menu === "pizza" ? '🍕': '🍔';
console.log(lunch);

// 학생명이 홍길동, 홍길순, 김영희 인지 체크하여
// 해당하는 경우 이름을 출력하고,
// 해당하지 않는 경우 '해당 학생 없음'으로 출력
// 출력포맷 : 실행결과 ==> 

let studentName = '홍길순';
let result;

if(studentName === "홍길동"){
    // console.log(`실행결과 ==> ${studentName}`);
    result = studentName;
}else if(studentName === "홍길순"){
    // console.log(`실행결과 ==> ${studentName}`);
    result = studentName;
}else{
    console.log("해당 학생 없음");
}
console.log(`실행결과 ==> ${result}`);

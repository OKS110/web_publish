// 함수의 실행결과 반환 키워드 :: return
// return 문은 함수에서 결괏값을 반환할 때 사용한다.

function add(a, b){
    // a = parseInt(a);
    // console.log(parseInt(a) + parseInt(b));
    return parseInt(a) + parseInt(b);
}

let result = add(1, 2);
console.log(`result = ${result}`);

// 이름, 나이를 매개변수로 입력하여, 객체를 생성한 후
// 반환하는 함수를 정의해주세요.


function createObject(name, age){
    // 객체 생성
    let obj = { //함수 블록 내에서 선언된 변수 obj는 함수 밖에서 호출될 수 없다.
        name: name, //obj.name
        age: age, //obj.age
    };
    return obj; //obj의 주소값 반환
} //함수가 선언된 위치에 상관없이 호출된다.

let resultObj = createObject('홍길동', 30);

console.log(resultObj);
console.log(resultObj.name);
console.log(resultObj.age);

// 두 수를 입력받아 곱한 값을 출력하는 함수를 작성
// 두 수는 0보다 커야 함
console.clear();
function multi(a, b){
    let c = 0;
    if(a > 0 && b > 0){
        c = a * b;
    }else{
        c = 'a와 b는 0보다 커야 합니다.';
    }
    return c;
}

let resultMulti = multi(2, 3);
console.log(resultMulti);


// xxxx.js 파일은
// {
//     //전역변수(Global variable)
//     let a = undefined;
//     let obj = null;
//     const START_COUNT = 0;

//     function aa{
//         //기능을 구현하는 작업 진행
//         // 변수 선언 시 반드시 초기화
//         // 지역변수, 로컬(Local variable)
//         // let result = 0;
//     }
// } 이런 구조이다.
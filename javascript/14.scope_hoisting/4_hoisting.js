
// 함수호출
hoist1(); //호이스팅 1 
//hoist2(); //ReferenceError

// 호이스팅(Hoisting) : 코드 실행 전 메모리에 객체를 선언하고 할당하는 작업
function hoist1(){ //함수 선언은 호이스팅 이루어짐.
    console.log(`호이스팅 1`);
}

const hoist2 = () => { //함수 표현식은 호이스팅 X - 선언 후 함수 호출!
    console.log(`호이스팅 2`);
}

hoist2(); //호이스팅 2
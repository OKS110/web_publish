// 일반함수, 함수표현식(익명함수), 화살표(Arrow) 함수
// 일반함수 : function 함수명(파라미터, ...){
//      실행문;
//      }

// 함수 표현식 : let 함수명 = function (파라미터, ...){
//      실행문;
//      }

// 화살표 함수 : let 함수명 = (파라미터) => {실행문; } 

// 일반함수 정의 시 let, const선언 불가
function add(){
    return 1 + 2;
}

// 일반함수 표현식
let add2 = function(){
    return 1 + 2;
}

// 화살표 함수 표현식
let add3  = () => {
    return 1 + 2;
}
// let add3 = () => 1 + 2;
let add4 = (a, b) => a + b;
let add5 = (a, b, c) => {
    if(a > 0 && b > 0 && c > 0){
        console.log(a + b + c);
    }else{
        console.log(`a, b, c는 0보다 커야 함`);
    }
}

console.log(add()); //3
console.log(add2()); //3
console.log(add3()); //3
console.log(add4(10, 20)); //30
add5(1, 2, 3);
// 함수의 값 전달 인자
// parameter, arguments, 매개변수

// function add(){
//     return 100 + 200; //고정된 값
// }
function add(a, b){
    return a + b;
}

// Spread operator(전개 구문)
function add2(...numbers){ //파라미터 개수에 연연하지 않는다.
    return numbers;
}


// 함수 호출
let sum = add(1,3);
let sum2 = add2(1,2,3,4,5,6,7,8,9,10);

console.log(sum);
console.log(sum2); //배열 형식으로 출력됨.
console.log(`${sum2}`); //string 형식으로 출력됨.


function add3(a, b, ...datas){
    console.log(a);
    console.log(b);
    console.log(datas);
    //a, b는 primitive값
    // datas는 객체
}
add3(1, 2, 3, 4, 5, 6, 7);// 1, 2, [3, 4, 5, 6, 7]
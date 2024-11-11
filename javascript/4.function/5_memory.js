// function은 데이터타입 ?? object

function add(a, b){
    console.log(a + b);
}


let sum = add;
add(1, 3);
sum(1, 2);
// sum 과 add는 같은 주소를 참조하고 있다.

console.log(add(1, 2)); // 오류 발생 - console.log() 함수는 반환 값을 갖고 있지 않다.
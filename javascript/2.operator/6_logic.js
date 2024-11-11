// 논리 연산자 : &&(and), ||(or), !(not)

/*  and 연산식
    (논리식1) && (논리식2) = 결과값
        true        true  = true
        true        false  = false
        false        true  = false
        false        false  = false

*/


/*   or 연산식
    (논리식1) || (논리식2) = 결과값
        true        true  = true
        true        false  = true
        false        true  = true
        false        false  = false
*/

let a = 1;
let b = 2;

console.log((a<b) && (b>a)); // true && true = true
console.log((a<b) && (b<a)); // true && false = false
console.log((a===b) && (b>a)); // false && true = false
console.log((a>b) && (b<a)); // false && false = false



console.log((a<b) || (b>a)); // true || true = true
console.log((a<b) || (b<a)); // true || false = true
console.log((a===b) || (b>a)); // false || true = true
console.log((a>b) || (b<a)); // false || false = false


// 임의의 숫자를 입력 받아, 1 ~ 9 범위에 속하면 출력

let number1 = 11;
if(number1 < 10 && number1 > 0){
    //true          false            --> false 
    //false         true            --> false   ::shortcut
    // shortcut 연산을 위해 &&식에는 앞쪽에 fasle 값이 앞에 오도록 하는 것이 좋다.

    console.log(`number는 사용 가능한 숫자${number1} 입니다.`);
}else{
    console.log('number를 다시 입력해주세요.');

}


// 임의의 숫자를 입력받아, 0보다 크면 출력
let number2 = 11;
if(number2 > 0 || number2 < 10){
    //true          false            --> true   ::shortcut
    //false         true            --> true   
    // shortcut 연산을 위해 ||식에는 앞쪽에 true 값이 앞에 오도록 하는 것이 좋다.

    console.log(`number는 사용 가능한 숫자${number2} 입니다.`);
}else{
    console.log('number를 다시 입력해주세요.');

}
/*
    함수 정의 ::
    function 함수명(파라미터(=매개변수)){
        실행로직;
    }
    함수 호출 ::
    함수명(파라미터 형식 일치);

*/

// 내장(Built-in) 함수 : 자주 사용하는 기능을 함수로 구현하여 엔진에서 제공함
/*
    - parseInt(문자열); 문자열을 숫자로 변환하는 함수
    - parseFloat(); 문자형 데이터를 실수형 데이터로 변경
    - string(); 문자형 데이터로 변경
    - number(); 숫자형 데이터로 변경
    - boolean(); 논리형 데이터로 변경
*/

// 빌트인 함수 parseInt(), number() 호출
let a = '100';
console.log(a, typeof a); //100 string
console.log(a + 100);
console.log(parseInt(a), typeof parseInt(a)); //100 number
console.log(Number(a) + 100);


// 두 개의 숫자를 입력 받아, 합계를 출력하는 로직 작성

//함수 정의
function add(a, b){ // var a = 호출 시 입력되는 값,
    let result = Number(a) + Number(b);
    return console.log(result);
}

//두 숫자의 차를 구하되, 결과는 음수가 출력되지 않도록 함
// a가 b보다 큰 경우 결과값 출력
function min(a, b){
    let result;
    a = parseInt(a);
    b = parseInt(b);
    if(a >= b){
        result = a - b;
    }else if(a < b){
        result = 'a가 b보다 작습니다.';
    }
    return console.log(result);
}

//함수 호출 위치에 결과값 출력
add(10, 2);
min(100,10);

add('10', '2');
min('100', '10');
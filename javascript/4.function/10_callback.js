// 콜백함수는 함수 호출 시 파라미터 인자로 제공되는 함수 형식을 의미함
// 함수 안에서 호출되는 함수 - 비동기 처리 방식 promise에서 많이 쓰임

const job = (a, callback) => {
    callback(a);
}
const job2 = (a, b, callback) => {
    callback(a, b);
}

const print = (a) => console.log(a); //func

const printSum = (a, b) => { //func
    console.log(a + b);
}

job(100, print);
job2(100, 200, printSum);

// setTimeout 함수 호출
console.clear();
setTimeout(()=>{
// ()=>{}는 한 번만 사용하고 끝나기 때문에 별도의 변수 지정이 필요 없음.
    console.log(`setTimeout 실행!!`);
}, 1000);

// setTimeout(()=>console.log(`setTimeout 실행!!`), 1000);
setTimeout((second)=>console.log(`setTimeout ${second}초 후 실행!!`), 1000, 1);
// 1이라는 파라미터가 second로 들어가서 실행된다.


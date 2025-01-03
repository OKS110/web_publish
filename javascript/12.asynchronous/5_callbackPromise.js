// 비동기식 처리 함수를 순차적으로 호출해서 실행하고자 할 때.

function step1(init){
    let result = init + 1;
    return Promise.resolve(result);
}
function step2(init){
    let result = init + 2;
    // return Promise.reject('error');
    return Promise.resolve(result);
}
function step3(init){
    let result = init + 3;
    return Promise.resolve(result);
}

step1(0)
    .then((result1) => {
        console.log(result1);
        return step2(result1); 
    })
    .then((result2)=>{
        console.log(result2);
        return step3(result2);
    })
    .then((result3) => {
        console.log(`result3 => ${result3}`);
    })
    .catch((error) => console.log(error));
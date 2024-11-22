// 빌트인 클래스인 Promise를 통해 비동기식 처리

let promise1 = new Promise((resolve, reject) => {
    // 실행한 비동기식 로직
    setTimeout(() => {
        resolve('success');
        reject('fail');
    }, 1000);
});

promise1
.then((result) => {console.log(`3초 경과!!`);
})//시간 경과 후 callback queue에 들어가는 실행함수 정의
.catch((error) => {console.log('error');
}); //실패한 경우


const getPromise = (seconds) => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('완료');
    }, seconds * 1000);
});

getPromise(1)
.then((res) =>{
    console.log(res);
    return getPromise(3);
}).then((res) => {
    console.log(res);
    return getPromise(4);
}).then((res) => {
    console.log(res);
    return getPromise(4);
});


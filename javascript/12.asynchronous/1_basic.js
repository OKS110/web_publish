function a(){
    c(); //return address(복귀 주소)
    console.log(`a function!!`);
}
function b(){
    setTimeout(() => {
        console.log(`2초 후 setTimeout함수 실행!!d function!`);
    }, 2000);
    console.log(`b function!!`);
}
function c(){
    b();
    console.log(`c function!!`);
}

a();
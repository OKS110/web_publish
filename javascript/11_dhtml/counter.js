
// counter 증가/감소
function counter(flag){
    let number = document.querySelector('#number').innerHTML;

    if(flag === 'increment'){
        document.querySelector('#number').innerHTML = ++number;
    }else{
        if(number > 0){
            document.querySelector('#number').innerHTML = --number;
            // number = --number; number 변수에는 반영됐지만, DOM에는 반영되지 않아서 위 문장처럼 직접 대입해야 함.
        }
    }
}

function increment(){
    let number = document.querySelector('#number').innerHTML;
    document.querySelector('#number').innerHTML = ++number;
    // document.querySelector('#number').innerHTML = number++; number 값을 먼저 대입 한 후 증가하기 때문에 값이 변하지 않는다.
}
function decrement(){
    let number = document.querySelector('#number').innerHTML;
    if(number > 0){
        document.querySelector('#number').innerHTML = --number;
    }
}
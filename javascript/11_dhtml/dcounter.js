// 자바스크립트 호출 시 HTML의 body를 DOM에 먼저 로딩 후 실행하도록 하는 함수들
// window.onload(), document.ready(), DOMContentLoad()

window.addEventListener('DOMContentLoaded', function(){
    initForm();
});


function initForm(){
    let output = `
    <h1>DHTML - Counter </h1>
    <div class="container">
        <div id="number">0</div>
        <button type="button" class="button" data-operation = "increment">increment</button>
        <button type="button" class="button" data-operation = "decrement">decrement</button>
    </div>
    `;

    // counter 폼 출력
    document.querySelector('#content').innerHTML = output;

    // DHTML로 생성된 버튼 이벤트 처리
    let buttons = document.querySelectorAll('.button');
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            let flag = button.dataset.operation;
            let number = document.querySelector('#number').innerHTML;

            if(flag === 'increment'){
                document.querySelector('#number').innerHTML = ++number;
            }else{
                if(number > 0){
                    document.querySelector('#number').innerHTML = --number;
                    // number = --number; number 변수에는 반영됐지만, DOM에는 반영되지 않아서 위 문장처럼 직접 대입해야 함.
                }
            }
            
        });
    });
}

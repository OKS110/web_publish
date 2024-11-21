import sum, { sub, mul, div } from './commons.js';
// dafault가 붙은 함수는 {}안에 들어가지 않아도 된다.
initForm();

function initForm(){ //계산기 폼을 생성하는 함수

    let output = `
        <h1>DHTML - Calculator</h1>
        <ul>
            <li>
                <input type="text" id="number1" placeholder="첫번째 숫자">
                <input type="text" id="number2" placeholder="두번째 숫자">
            </li>
            <li>
                <button type="button" class="button" data-operation="sum">+</button>
                <button type="button" class="button" data-operation="sub">-</button>
                <button type="button" class="button" data-operation="mul">x</button>
                <button type="button" class="button" data-operation="div">/</button>
            </li>
            <li>
                <h3>Result : <span></span></h3>
            </li>
        </ul>
        `;

        // 화면 출력
        document.querySelector('#content').innerHTML = output; 
} //initform - end


// 버튼 이벤트 처리
let number1 = document.querySelector('#number1');
let number2 = document.querySelector('#number2');
let buttons = document.querySelectorAll('.button');


buttons.forEach((x)=> {
    
    x.addEventListener('click', function(){
        let result = 0;
        let operation = this.dataset.operation;

        switch(operation){
            case 'sum':
                // result = Number(number1.value) + Number(number2.value);
                result = sum(number1.value, number2.value);
                break;
            case 'sub':
                // result = Number(number1.value) - Number(number2.value);
                result = sub(number1.value, number2.value);
                break;
            case 'mul':
                // result = Number(number1.value) * Number(number2.value);
                result = mul(number1.value, number2.value);
                break;
            case 'div':
                // result = Number(number1.value) / Number(number2.value);
                result = div(number1.value, number2.value);
                break;
        }
        console.log(result);
        document.querySelector('span').innerHTML = result;
    });
});


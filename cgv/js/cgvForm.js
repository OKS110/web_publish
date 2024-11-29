
/**
 * 로그인 폼 체크
 */

function loginFormCheck(){
    const id = document.querySelector("#id");
    const pw = document.querySelector("#pw");
    const msgId = document.querySelector('#error-msg-id');
    const msgPw = document.querySelector('#error-msg-pw');
    if(id.value !== `` && pw.value !== ``){
        alert('입력 완료');
    }else if(id.value === ``){
        msgId.style.fontSize = '10px';
        msgId.style.color = 'red';
        msgId.style.textAlign = 'center';
        msgId.textContent = `아이디를 입력해주세요.`;
        id.focus();
    }else if(pw.value === ``){
        msgPw.style.fontSize = '10px';
        msgPw.style.color = 'red';
        msgPw.style.textAlign = 'center';
        msgPw.textContent = `비밀번호를 입력해주세요.`;
        pw.focus();
    }
}

/**
 * 로그인 - 아이디, 패스워드 실시간 체크
 */
function handleChange(event){
    const msgId = document.querySelector('#error-msg-id');
    const msgPw = document.querySelector('#error-msg-pw');

    if(event.target.id === 'id'){
        (event.target.value.trim().length !== 0) ?  msgId.style.color = 'green': msgId.style.color = 'red'; //length가 없게 되면 ' '도 문자로 인식함.
    }else{
        (event.target.value.trim().length !== 0) ?  msgPw.style.color = 'green': msgPw.style.color = 'red';
    }   
}

/**
 * 회원가입 폼 체크
 */
function joinFormCheck(){ //가입하기 버튼을 눌렀을 때
    const id = document.querySelector('#id');
    const pw = document.querySelector('#pw');
    const cpw = document.querySelector('#cpw');
    const name = document.querySelector('#name');
    const phone = document.querySelector('#phone');
    const eMail = document.querySelector('#email');
    const eMailDomain = document.querySelector('#emaildomain');
    const idCheckResult = document.querySelector('#idCheckResult');


    const idMsg = document.querySelector('#error-msg-id');
    const pwMsg = document.querySelector('#error-msg-pw');
    const cpwMsg = document.querySelector('#error-msg-cpw');
    const nameMsg = document.querySelector('#error-msg-name');
    const phoneMsg = document.querySelector('#error-msg-phone');
    const eMailMsg = document.querySelector('#error-msg-email');

    if(id.value === ''){
        idMsg.style.color = 'red';
        id.focus();
    }else if(pw.value === ''){
        pwMsg.style.color = 'red';
        pw.focus();
    }else if(cpw.value === ''){
        cpwMsg.style.color = 'red';
        cpw.focus();
    }else if(name.value === ''){
        nameMsg.style.color = 'red';
        name.focus();
    }else if(phone.value === ''){
        phoneMsg.style.color = 'red';
        phone.focus();
    }else if(eMail.value === ''){
        eMailMsg.style.color = 'red';
        eMail.focus();
    }else if(eMailDomain.value === 'default'){
        eMailDomain.style.outlineColor = 'red';
        eMailDomain.focus();
    }else if(idCheckResult.value === 'default'){
        alert('아이디 중복체크를 진행해주세요');
    }
    else{
        alert('가입 성공!!!');
    }
}
// 아이디 중복 체크
function idCheck(event){
    
    const did = 'test'; //기존에 있던 아이디
    const id = document.querySelector('#id');
    const idMsg = document.querySelector('#error-msg-id');
    

    if(id.value === ''){
        idMsg.style.color = 'red';
        id.focus();

    }else{
        if(did === id.value.trim()){
            alert('이미 사용 중인 아이디입니다. 다시 입력해주세요.');
            id.focus();
        }else{
            alert('사용이 가능한 아이디입니다.');
            document.querySelector("#idCheckResult").value = "success";
            console.log(document.querySelector("#idCheckResult").value);
            event.target.style.backgroundColor = "gray";
        }
    }
}
// 비밀번호 확인
function pwCheck(){
    const pw = document.querySelector('#pw');
    const cpw = document.querySelector('#cpw');

    const pwMsg = document.querySelector('#error-msg-pw');
    const cpwMsg = document.querySelector('#error-msg-cpw');

    if(pw.value === ''){
        pwMsg.style.color = 'red';
        pw.focus();
    }else if(cpw.value === ''){
        cpwMsg.style.color = 'red';
        cpw.focus();
    }
    else{
        if(pw.value === cpw.value){
            alert('패스워드가 동일합니다.');
        }else{
            alert('패스워드가 다릅니다. 다시 입력해주세요.');
            pw.value = '';
            cpw.value = '';
            pwMsg.style.color = 'red';
            cpwMsg.style.color = 'red';
            pw.focus();
        }
    }
}


function handleChangeJoin(event){ //폼에 입력되는 값을 실시간으로 확인하는 함수
    const idMsg = document.querySelector('#error-msg-id');
    const pwMsg = document.querySelector('#error-msg-pw');
    const cpwMsg = document.querySelector('#error-msg-cpw');
    const nameMsg = document.querySelector('#error-msg-name');
    const phoneMsg = document.querySelector('#error-msg-phone');
    const eMailMsg = document.querySelector('#error-msg-email');
    const eMailDomain = document.querySelector('#emaildomain');

    switch(event.target.id){
        case 'id':
        (event.target.value.trim().length !== 0) ? idMsg.style.color = 'green': idMsg.style.color = '#797878';
        break;

        case 'pw':
        (event.target.value.trim().length !== 0) ? pwMsg.style.color = 'green': pwMsg.style.color = '#797878';
        break;

        case 'cpw':
        (event.target.value.trim().length !== 0) ? cpwMsg.style.color = 'green': cpwMsg.style.color = '#797878';
        break;

        case 'name':
        (event.target.value.trim().length !== 0) ? nameMsg.style.color = 'green': nameMsg.style.color = '#797878';
        break;

        case 'phone':
        (event.target.value.trim().length !== 0) ? phoneMsg.style.color = 'green': phoneMsg.style.color = '#797878';
        break;

        case 'email':
        (event.target.value.trim().length !== 0) ? eMailMsg.style.color = 'green': eMailMsg.style.color = '#797878';
        break;

        case 'emaildomain':
        (event.target.value.trim() !== 'default') ? eMailDomain.style.outlineColor = 'green': eMailMsg.style.outlineColor = 'red';
        break;
    }
}


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
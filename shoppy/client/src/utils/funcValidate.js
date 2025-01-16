
// =============================Login==================================================

// validate 함수
    export function validateLogin({idRef, pwdRef}) {
        if(idRef.current.value === ''){
            alert('아이디를 입력해주세요');
            idRef.current.focus();
            return false;
        }else if(pwdRef.current.value === ''){
            alert('패스워드를 입력해주세요');
            pwdRef.current.focus();
            return false;
        }
        return true;
    };

// ==================================Login end=======================================================



// ========================SignUp================================================

//validate
export const validateSignup = (refs, msgRefs) => {
    const refsEntries = Object.entries(refs); //{idRef:xxxx, ...}
    const msgRefsEntries = Object.entries(msgRefs);

    console.log(refsEntries); //['idRef', {...주소}]...
    console.log(msgRefsEntries);

    // map, forEach - x
    //refEntries 배열객체와 msgRefEntries 배열 객체의 인덱스를 동일하게 체크한다!!
    for(let i = 0; i < refsEntries.length; i++){
        const item = refsEntries[i];
        const msgItem = msgRefsEntries[i];
        const name = item[0];
        const ref = item[1]; // 데이터 입력폼 객체 주소
        const msgName = msgItem[0];
        const msgRef = msgItem[1]; // 데이터 입력폼의 메세지 객체 주소

        if(name !== 'emailDomainRef'){ // ''
            if(ref.current.value === ''){
                msgRef.current.style.setProperty('color', 'red');
                ref.current.focus();
                return false;
            }
        }else{ // default
            if(ref.current.value === 'default'){
                alert('이메일 주소를 선택하세요');
                ref.current.focus();
                return false;
            }
        }   
    }
    return true;

    //  let result = true;

    // if(refs.idRef.current.value === '') {
    //     alert('아이디를 입력해주세요');
    //     refs.idRef.current.focus();
    //     result = false;
    // }else if(refs.pwdRef.current.value === ''){
    //     alert('비밀번호를 입력해주세요');
    //     refs.pwdRef.current.focus();
    //     result = false;
    // }else if(refs.cpwdRef.current.value !== refs.pwdRef.current.value){
    //     alert('비밀번호가 다릅니다.');
    //     refs.cpwdRef.current.focus();
    //     result = false;
    // }else if(refs.nameRef.current.value === ''){
    //     alert('이름를 입력해주세요');
    //     refs.nameRef.current.focus();
    //     result = false;
    // }else if(refs.phoneRef.current.value === '' || isNaN(refs.phoneRef.current.value)){
    //     alert('전화번호를 입력해주세요 / 전화번호는 숫자만 입력 가능합니다');
    //     refs.phoneRef.current.focus();
    //     result = false;
    // }else if(refs.emailnameRef.current.value === ''){
    //     alert('이메일을 입력해주세요');
    //     refs.emailnameRef.current.focus();
    //     result = false;
    // }else if(refs.emailDomainRef.current.value === 'default'){
    //     alert('이메일도메인을 선택해주세요');
    //     refs.emailDomainRef.current.focus();
    //     result = false;
    // }
    // return result;
};
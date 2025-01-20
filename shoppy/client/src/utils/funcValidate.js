

export const validateLogin = ({idRef, pwdRef}) => {
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
}


export const validateSignup = (refs, msgRefs, errorMsg, setErrorMsg, namesStr) => {
    const refsEntries = Object.entries(refs.current);
    const msgRefsEntries = Object.entries(msgRefs.current);
    // console.log(refsEntries.length);
    // console.log(msgRefsEntries.length);
    
    for(let i = 0; i < refsEntries.length; i++){
        const item = refsEntries[i];
        const name = item[0];
        const ref = item[1];
        
        const newName = name.replace('Ref', '');

        let msgItem, msgRef, msgName = null;       

        if(i < refsEntries.length - 2){
            msgItem = msgRefsEntries[i];
            msgName = msgItem[0];
            msgRef = msgItem[1];
        }


            if(name !== 'emaildomainRef'){
                if(ref.current.value === ''){
                    setErrorMsg({...errorMsg, [newName] : `${namesStr[i]}를 입력해주세요.`});
                    // setErrorMsg({...errorMsg, [newName] : `${newName}를 입력해주세요.`});
                    msgRef.current.style.setProperty('color', 'red');
                    ref.current.focus();
                    return false;
                }
                console.log(errorMsg);
                
            }else if(name === 'emaildomainRef'){
                if(ref.current.value === 'default'){
                    alert('이메일 도메인을 선택해주세요');
                    ref.current.focus();
                    return false;
                }
            
            }

        }
    return true;
        
    }

    // signup : 아이디 중복체크

    export const handleDuplicateIdCheck = (idRef, pwdRef, idMsgRef, idCheckResultRef, setIdCheckResult) => {
        if(idRef.current.value === ''){
            // idMsgRef.current["idMsgRef"].current.style.setProperty("color", 'blue');
            alert('아이디 입력해주세요');
            idRef.current.focus();
            return false;
        }else{
            const did = 'test';
            if(idRef.current.value === did){
                alert('중복된 아이디입니다.');
                idRef.current.value = '';
                return false;
            }else{
                alert('사용가능');
                // idCheckResultRef.current.value = 'complete';
                setIdCheckResult("complete");
                pwdRef.current.focus();
                return false;
            }
            
        }
    };

    // signup : 비밀번호 & 비밀번호 확인 체크
    export const handlePasswordCheck = (pwdRef, cpwdRef, nameRef) => {
            // const pwdMsgRef = msgRefs.current["pwdMsgRef"];
            // const cpwdMsgRef = msgRefs.current["cpwdMsgRef"];
    
            if(pwdRef.current.value === ""){
                // pwdMsgRef.current.style.setProperty('color', 'red');
                console.log("비밀번호를 입력해주세요");
                pwdRef.current.focus();
                return false;
            }else if(cpwdRef.current.value === ""){
                // cpwdMsgRef.current.style.setProperty('color', 'red');
                console.log("비밀번호를 확인해주세요");
                pwdRef.current.focus();
                return false;
            }else{
                if(pwdRef.current.value === cpwdRef.current.value){
                    console.log("비밀번호 일치");
                    nameRef.current.focus();
                    return false;
                }else{
                    console.log("비밀번호 불일치");
                    pwdRef.current.value = "";
                    cpwdRef.current.value = "";
                    pwdRef.current.focus();
                    return false;
                }
            }
        };
    
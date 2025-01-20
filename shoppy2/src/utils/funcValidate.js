

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

    for(let i = 0; i < refsEntries.length; i++){
        const item = refsEntries[i];
        const name = item[0];
        const ref = item[1];
        
        const newName = item[0].replace('Ref', '');

        let msgItem, msgName = null;
        let msgRef = null;
        if(i<refsEntries.length - 2){
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

    export const handleDuplicateId = (idRef, pwdRef, setDuplicateId) => {
        const did = 'test';
        console.log(idRef.current.value);
        if(idRef.current.value === ''){
            console.log("아이디를 입력하세요");
            idRef.current.focus();
            return false;
        }else{
            if(idRef.current.value === did){
                console.log("아이디가 중복됨.");
                idRef.current.value = '';
                idRef.current.focus();
                return false;
            }else{
                console.log("success.");
                setDuplicateId('complete');
                pwdRef.current.focus();
                return false;
            }
        }

        
    };

    export const handlePasswordCheck = (pwdRef, cpwdRef, nameRef) => {
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

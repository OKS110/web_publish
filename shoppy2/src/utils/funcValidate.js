

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


export const validateSignup = (refs, msgRefs, errorMsg, setErrorMsg) => {
    const refsEntries = Object.entries(refs.current);
    const msgRefsEntries = Object.entries(msgRefs.current);

    for(let i = 0; i < refsEntries.length; i++){
        const item = refsEntries[i];
        const name = item[0];
        const ref = item[1];
        
        const newName = item[0].replace('Ref', '');

        

        const msgItem = msgRefsEntries[i];
        const msgRef = msgItem[1];

            if(name !== 'emailDomainRef'){
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
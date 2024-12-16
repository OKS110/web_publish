// CGV Login Form 유효성 체크 함수

export const validate = (param) => {
    let result = true;
    if(param.refs.idRef.current.value === ""){
        param.setErrorMsg({...param.errorMsg, ["id"]:"아이디를 입력해주세요."});
        param.refs.idRef.current.focus();
        result = false;
    }else if(param.refs.pwRef.current.value === ""){
        param.setErrorMsg({...param.errorMsg, ["pw"]:"비밀번호를 입력해주세요."});
        param.refs.pwRef.current.focus();
        result = false;
    }
    return result;
};


// Login2 컴포넌트 유효성 체크 함수

export const validateLogin2 = (param) => {
    if(param.idRef.current.value === ''){
        param.setErrorMsg({...param.errorMsg, ["id"]: "아이디를 입력해주세요."});
        param.idRef.current.focus();
        return false;
    }else if(param.pwRef.current.value === ''){
        param.setErrorMsg({...param.errorMsg, ["pw"]: "비밀번호를 입력해주세요."});
        param.pwRef.current.focus();
        return false;

    }
    return true;
};

// UserInfo 컴포넌트의 유효성 체크 함수
export const validateForm = (refs) => {
    let result = true;
    if(refs.nameRef.current.value === ''){
        alert('name입력');
        result = false;
    }else if(refs.addressRef.current.value === ''){
        alert('address입력');
        result = false;
        
    }else if(refs.ageRef.current.value === ''){
        alert('age입력');
        result = false;
    }
    return result;
}


// Signup 컴포넌트의 유효성체크 함수
export const validateSignup = (refs, errors, setErrors) =>{
    let checkResult = true;
    if(refs.idRef.current.value === ''){
        setErrors({...errors, ["id"]: "아이디를 입력해주세요."});
        refs.idRef.current.focus();
        checkResult = false;
    }else if(refs.pwdRef.current.value === ''){
        setErrors({...errors, ["pwd"]: "비밀번호를 입력해주세요."});
        refs.pwdRef.current.focus();
        checkResult = false;
    }else if(refs.cpwdRef.current.value === ''){
        setErrors({...errors, ["cpwd"]: "비밀번호를 입력해주세요."});
        refs.cpwdRef.current.focus();
        checkResult = false;
    }else if(refs.nameRef.current.value === ''){
        setErrors({...errors, ["name"]: "이름을 입력해주세요."});
        refs.nameRef.current.focus();
        checkResult = false;
    }else if(refs.phoneRef.current.value === ''){
        setErrors({...errors, ["phone"]: "전화번호를 입력해주세요."});
        refs.phoneRef.current.focus();
        checkResult = false;
    }else if(refs.emailNameRef.current.value === ''){
        setErrors({...errors, ["emailName"]: "이메일을 입력해주세요."});
        refs.emailNameRef.current.focus();
        checkResult = false;
    }else if(refs.emailDomainRef.current.value === 'default'){
        refs.emailDomainRef.current.focus();
        checkResult = false;
    }
    
    return checkResult;
}
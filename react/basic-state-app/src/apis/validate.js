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





export const validateSignup2 = (refs, errors, setErrors) => {
    // const refValues = Object.values(refs);
    // const refKeys = Object.keys(refs);
    const refEntries = Object.entries(refs); //[키:값] 형태로 [] 안에 넣어준다.
    // console.log(refValues);
    // console.log(refKeys);
    console.log(refEntries);
    const msgs = {
        "idRef":'아이디',
        "pwdRef":'패스워드',
        "nameRef":'이름',
        "phone1Ref":'전화번호1',
        "phone2Ref":'전화번호2',
        "phone3Ref":'전화번호3',
        "addressRef":'주소',
        "yearRef":'년도',
        "monthRef":'월자',
        "dayRef":'일자',
        "jobRef":'직업',
        "genderRef":'성별',
        "emailRef":'이메일',
        "introduceRef":'자기소개'
    };

// 배열.map() or 배열.forEach() 함수는 배열객체를 순회하는 것이 목적이므로 if 체크 후 focus가 적용되지 않음.!!!
    for(const item of refEntries){ // 예시 ) item = ["idRef": "current:input  value:""]

        const name = item[0];
        const ref = item[1];
        const newKey = name.replace('Ref', '');

        // 성별(라디오 버튼) 유효성 검사
        if (name === "genderRef") {
            const genderChecked = document.querySelector('input[name="gender"]:checked');
            if (!genderChecked) {
                setErrors({ ...errors, [newKey]: `${msgs[name]}을 선택해주세요.` });
                ref.current.focus();
                return false;
            } else {
                setErrors({ ...errors, [newKey]: "" });
            }
        }

        //공통 유효성 검사
        if(ref.current.value === ''){
            setErrors({...errors, [newKey]: `${msgs[name]}을 입력해주세요.`}); //키가 문자열이거나 유효하지 않은 식별자인 경우에는 []로 값을 찾는다. 
            ref.current.focus();
            return false;
        }else if(ref.current.value === 'default'){ //직업
            setErrors({...errors, [newKey]: `${msgs[name]}을 입력해주세요.`});
            ref.current.focus();
            return false;
        }
    }
    
    return true;
};

export const errorChange = (name, value, errors, setErrors) => {
    const names = [
        {
            "name": "id",
            "msg": "아이디를 입력하세요."
        },
        {
            "name": "pwd",
            "msg": "비밀번호를 입력하세요."
        },
        {
            "name": "name",
            "msg": "이름을 입력하세요."
        },
        {
            "name": "phone1",
            "msg": "전화번호1을 입력하세요."
        },
        {
            "name": "phone2",
            "msg": "전화번호2를 입력하세요."
        },
        {
            "name": "phone3",
            "msg": "전화번호3을 입력하세요."
        },
        {
            "name": "address",
            "msg": "주소를 입력하세요."
        },
        {
            "name": "year",
            "msg": "년도를 입력하세요."
        },
        {
            "name": "month",
            "msg": "월자를 입력하세요."
        },
        {
            "name": "day",
            "msg": "일자를 입력하세요."
        },
        {
            "name": "job",
            "msg": "직업를 입력하세요."
        },
        {
            "name": "gender",
            "msg": "성별를 입력하세요."
        },
        {
            "name": "email",
            "msg": "이메일을 입력하세요."
        },
        {
            "name": "introduce",
            "msg": "자기소개를 입력하세요."
        }
    ];

    names.map((item) => {
        return (item.name === name)? 
            ((value !== '') ? setErrors({...errors, [item.name] : ""}): setErrors({...errors, [item.name] : item.msg})): '';
    })
    

};
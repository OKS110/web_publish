// Signup 에러 체크 함수

export const errorCheckSignup = (name, value, errors, setErrors) =>{

    const names = [
        { 
            'name':'id',
            'msg':'아이디를 입력해주세요.'
        },
        { 
            'name':'pwd',
            'msg':'비밀번호를 입력해주세요.'
        },
        { 
            'name':'cpwd',
            'msg':'비밀번호를 확인해주세요.'
        },
        { 
            'name':'name',
            'msg':'이름을 입력해주세요.'
        },
        { 
            'name':'phone',
            'msg':'전화번호를 입력해주세요.'
        },
        { 
            'name':'emailName',
            'msg':'이메일을 입력해주세요.'
        }
    ];
    names.map((item) => {
        return (item.name === name) ? ((value !== '')? setErrors({...errors, [item.name]: ''}) :setErrors({...errors, [item.name]: item.msg})): '';
    });

    // if(name === 'id'){
    //     (value !== '')? setErrors({...errors, ["id"]: ""}) :setErrors({...errors, ["id"]: "아이디를 입력해주세요."});
    // }else if(name === "pwd"){
    //     (value !== '')? setErrors({...errors, ["pwd"]: ""}) :setErrors({...errors, ["pwd"]: "비밀번호를 입력해주세요."});
    // }else if(name === "cpwd"){
    //     (value !== '')? setErrors({...errors, ["cpwd"]: ""}) :setErrors({...errors, ["cpwd"]: "비밀번호를 확인해주세요."});
    // }else if(name === "name"){
    //     (value !== '')? setErrors({...errors, ["name"]: ""}) :setErrors({...errors, ["name"]: "이름을 입력해주세요."});
    // }else if(name === "phone"){
    //     (value !== '')? setErrors({...errors, ["phone"]: ""}) :setErrors({...errors, ["phone"]: "전화번호를 입력해주세요."});
    // }else if(name === "emailName"){
    //     (value !== '')? setErrors({...errors, ["emailName"]: ""}) :setErrors({...errors, ["emailName"]: "이메일을 입력해주세요."});
    // }
};
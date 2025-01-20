import React, { useRef, useState } from 'react';
import { validateSignup } from '../utils/funcValidate.js';
import '../styles/signup.css';

export default function Signup() {
    
    const names = ['id', 'pwd', 'cpwd', 'name', 'phone', 'emailname'];
    const namesStr = ['아이디', '비밀번호', '비밀번호 확인', '이름', '전화번호', '이메일'];
    const placeholderStr = ['아이디(6~2자이내)', '비밀번호 입력(문자,숫자,특수문자 포함 6~12자)',
         '비밀번호 재입력', '이름을 입력해주세요', '휴대폰 번호 입력("-" 포함)', '이메일 주소'];

    // const labels = {
    //     "id" : "아이디",
    //     "pwd" : "비밀번호",
    //     "cpwd" : "비밀번호 확인",
    //     "name" : "이름",
    //     "phone" : "전화번호",
    //     "emailname" : "이메일"
    // };
    const labels = names.reduce((acc, cur, idx) => {
        acc[cur] = namesStr[idx];
        return acc;
    }, {});

    const placeholders = names.reduce((acc, cur, idx) => {
        acc[cur] = placeholderStr[idx];
        return acc;
    }, {});

    // let initForm = {};
    // names.forEach((name) => {
    //     initForm = {...initForm, [name]:''}
    // });
    // console.log("init", initForm);
    
    const initForm = (initArray) =>{
        const init = initArray.reduce((acc, key) => {
            acc[key] = '';
            return acc;
        }, {}); // {}는 반환되는 타입
        return init;
    };

    // const [form, setForm] = useState(initForm);
    const [form, setForm] = useState(initForm(names));

    const refs = useRef(
        names.reduce((acc, cur) => {
            acc[cur.concat("Ref")] = React.createRef(); //useRef(null) Hook은 콜백함수에서 바로 호출 X
            return acc;
    }, {})
    );
    refs.current.emaildomainRef = React.createRef();
    console.log('refs', refs);
    



    const msgRefs = useRef(names.reduce((acc, cur) => {
            acc[cur.concat("MsgRef")] = React.createRef();
            return acc;
        }, {})
    );
    console.log('refs', refs);
    


//change
    const handleChangeForm = (event) => {
        const {name, value} = event.target;
        setForm({...form, [name]:value});
        console.log(name, value);
        
        // if(name === "id"){
        //     refs.idRef.current.value === ''? setErrorMsg({...errorMsg, "id" : '아이디를 입력해주세요.'}) : setErrorMsg({...errorMsg, "id":''});
        // }else if(name === 'pwd'){
        //     refs.pwdRef.current.value === ''? setErrorMsg({...errorMsg, "pwd" : '비밀번호를 입력해주세요.'}) : setErrorMsg({...errorMsg, "pwd":''});
        // }
    };

//submit
    const handleSubmitSignup = (e) => {
        e.preventDefault();
        if(validateSignup(refs, msgRefs)){
            console.log(form);
        }
    };



    return (
        <div className="content">
            <h1 className="center-title">SIGINUP</h1>
            <form className="signup-form" onSubmit={handleSubmitSignup}>
                <ul>
                    {
                        names && names.map((item) => (
                            <li>
                            <label for="" ><b>{labels[item]}</b></label>
                            <span id="error-msg-id" ref={msgRefs.current[item.concat("MsgRef")]}>{labels[item]}를(을) 입력해주세요</span>
                            
                            <div>
                                {
                                 item === 'emailname' ? ( 
                                    <>
                                        <input type="text" 
                                            name={item}
                                            id = {item}
                                            ref={refs.current[item.concat("Ref")]}
                                            placeholder= {placeholders[item]}
                                            onChange={handleChangeForm} />
                                        <span>@</span>          
                                        <select name="emaildomain" 
                                            id="emaildomain" 
                                            ref={refs.current['emaildomainRef']}
                                            onChange={handleChangeForm} >
                                            <option value="default">선택</option>
                                            <option value="naver.com">naver.com</option>
                                            <option value="gmail.com">gmail.com</option>
                                            <option value="daum.net">daum.net</option>
                                        </select>
                                    </>
                                    ) : (
                                        <>
                                            <input type={(item === "pwd" || item === "cpwd") ? "password" : "text"} 
                                                name={item}
                                                id={item}
                                                ref={refs.current[item.concat("Ref")]} //ref.idRef
                                                placeholder = {placeholders[item]}
                                                onChange={handleChangeForm}/>
                                                {
                                                    item === 'id' &&
                                                    <>
                                                        <button type="button" onClick={handleDuplicateIdCheck}>중복확인</button>
                                                        <input type="hidden" id="idCheckResult" value="default" />
                                                    </>      
                                                }
                                           
                                        </>
                                        )
                                    
                                }
                                
                               
                            </div>
                        </li>  
                        ))
                    } {/** end of map */}
                    
                    {/* <li>
                        <label for="" ><b>아이디</b></label>
                        <span id="error-msg-id" ref={msgRefs.msgIdRef}>아이디를 입력해주세요</span>
                        <div>
                            <input type="text" 
                                    name="id"
                                    id="id"
                                    ref={refs.idRef}
                                    placeholder = "아이디 입력(6~20자)" 
                                    onChange={handleChangeForm}/>
                            <button type="button" >중복확인</button>
                            <input type="hidden" id="idCheckResult" value="default" />
                        </div>
                    </li>
                    <li>
                        <label for=""><b>비밀번호</b></label>
                        <span id="error-msg-pwd" ref={msgRefs.msgPwdRef}>비밀번호를 입력해주세요</span>
                        <div>
                            <input type="password" 
                                    name="pwd"
                                    id="pwd"
                                    ref={refs.pwdRef}
                                    placeholder="비밀번호 입력(문자,숫자,특수문자 포함 6~12자)"
                                    onChange={handleChangeForm} />
                        </div>
                    </li>
                    <li>
                        <label for=""><b>비밀번호 확인</b></label>
                        <span id="error-msg-cpwd" ref={msgRefs.msgCpwdRef}>비밀번호 확인을 입력해주세요</span>
                        <div>
                            <input type="password" 
                                    name="cpwd"
                                    id="cpwd"
                                    ref={refs.cpwdRef}
                                    placeholder="비밀번호 재입력"
                                    onChange={handleChangeForm} />
                        </div>
                    </li>
                    <li>
                        <label for=""><b>이름</b></label>
                        <span id="error-msg-name" ref={msgRefs.msgNameRef}>이름을 입력해주세요</span>
                        <div>
                            <input type="text" 
                                    name="name"
                                    id="name"
                                    ref={refs.nameRef}
                                    placeholder="이름을 입력해주세요" 
                                    onChange={handleChangeForm}/>
                        </div>
                    </li>
                    <li>
                        <label for=""><b>휴대폰번호</b></label>
                        <span id="error-msg-phone" ref={msgRefs.msgPhoneRef}>전화번호를 입력해주세요('-'포함)</span>
                        <div>
                            <input type="text" 
                                    name="phone"
                                    id="phone"
                                    ref={refs.phoneRef}
                                    placeholder="휴대폰 번호 입력('-' 포함)" 
                                    onChange={handleChangeForm}/>
                        </div>
                    </li>
                    <li>
                        <label for=""><b>이메일 주소</b></label>
                        <span id="error-msg-emailname" ref={msgRefs.msgEmailnameRef}>이메일을 입력해주세요</span>
                        <div>
                            <input type="text" 
                                    name="emailname"
                                    id = "emailname"
                                    ref={refs.emailnameRef}
                                    placeholder="이메일 주소"
                                    onChange={handleChangeForm} />
                            <span>@</span>       
                            <select name="emaildomain" 
                                    id="emaildomain" 
                                    ref={refs.emailDomainRef}
                                    onChange={handleChangeForm} >
                                <option value="default">선택</option>
                                <option value="naver.com">naver.com</option>
                                <option value="gmail.com">gmail.com</option>
                                <option value="daum.net">daum.net</option>
                            </select>
                        </div>
                    </li> */}
                    <li>
                        <button type="submit">가입하기</button>
                        <button type="reset">가입취소</button>
                    </li>
                </ul>
            </form>
        </div>
    );
}



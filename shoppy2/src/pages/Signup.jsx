import React from 'react';
import { useState, useRef } from 'react';
import '../styles/signup.css';
import { validateSignup } from '../utils/funcValidate.js';

export default function Signup() {

   
    const names = ['id', 'pwd', 'cpwd', 'name', 'phone', 'emailname', 'emaildomain'];

    const initForm = (initArray) => {
        const init = initArray.reduce((acc, key) => {
            acc[key] = '';
            return acc;
        }, {})
        return init;
    };
    const [formData, setFormData] = useState(initForm(names));
    const [errorMsg, setErrorMsg] = useState(initForm(names));

        const refs ={
            "idRef" : useRef(null),
            "pwdRef" : useRef(null),
            "cpwdRef" : useRef(null),
            "nameRef" : useRef(null),
            "phoneRef" : useRef(null),
            "emailnameRef" : useRef(null),
            "emailDomainRef": useRef(null)
        };
        const msgRefs ={
            "msgIdRef" : useRef(null),
            "msgPwdRef" : useRef(null),
            "msgCpwdRef" : useRef(null),
            "msgNameRef" : useRef(null),
            "msgPhoneRef" : useRef(null),
            "msgEmailnameRef" : useRef(null),
            "msgEmailDomainRef": useRef(null)
        };
    
    

    const handleChangeSignup = (event) => {
        const {name, value} = event.target;
        setFormData({...formData, [name]:value});
        console.log(name, value);
        
    };

    const handleSubmitSignup = (e) => {
        e.preventDefault();
        
        if(validateSignup(refs, msgRefs, errorMsg, setErrorMsg)){
            console.log(formData);

        }
            
    };



    return (
        <div className="content">
            <h1 className="center-title">SIGINUP</h1>
            <form onSubmit={handleSubmitSignup} className="signup-form">
                <ul>
                    <li>
                        <label for="" ><b>아이디</b></label>
                        <span id="error-msg-id" ref={msgRefs.msgIdRef}>{errorMsg.id}</span>
                        <div>
                            <input type="text" 
                                    name="id"
                                    id="id"
                                    ref={refs.idRef}
                                    placeholder = "아이디 입력(6~20자)"
                                    onChange={handleChangeSignup} />
                            <button type="button" >중복확인</button>
                            <input type="hidden" id="idCheckResult" value="default" />
                        </div>
                    </li>
                    <li>
                        <label for=""><b>비밀번호</b></label>
                        <span id="error-msg-pwd" ref={msgRefs.msgPwdRef}>{errorMsg.pwd}</span>
                        <div>
                            <input type="password" 
                                    name="pwd"
                                    id="pwd"
                                    ref={refs.pwdRef}
                                    onChange={handleChangeSignup}
                                    placeholder="비밀번호 입력(문자,숫자,특수문자 포함 6~12자)" />
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
                                    onChange={handleChangeSignup}
                                    placeholder="비밀번호 재입력" />
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
                                    onChange={handleChangeSignup}
                                    placeholder="이름을 입력해주세요" />
                        </div>
                    </li>
                    <li>
                        <label for=""><b>휴대폰번호</b></label>
                        <span id="error-msg-phone" ref={msgRefs.msgPhoneRef}>휴대폰번호를 입력해주세요('-' 포함)</span>
                        <div>
                            <input type="text" 
                                    name="phone"
                                    id="phone"
                                    ref={refs.phoneRef}
                                    onChange={handleChangeSignup}
                                    placeholder="휴대폰 번호 입력('-' 포함)" />
                        </div>
                    </li>
                    <li>
                        <label for=""><b>이메일 주소</b></label>
                        <span id="error-msg-emailname" ref={msgRefs.msgEmailnameRef}>이메일 주소를 입력해주세요</span>
                        <div>
                            <input type="text" 
                                    name="emailname"
                                    id = "emailname"
                                    ref={refs.emailnameRef}
                                    onChange={handleChangeSignup}
                                    placeholder="이메일 주소" />
                            <span>@</span>       
                            <select name="emaildomain" 
                                    id="emaildomain" 
                                    ref={refs.emailDomainRef}
                                    onChange={handleChangeSignup}
                                     >
                                <option value="default">선택</option>
                                <option value="naver.com">naver.com</option>
                                <option value="gmail.com">gmail.com</option>
                                <option value="daum.net">daum.net</option>
                            </select>
                        </div>
                    </li>
                    <li>
                        <button type="submit">가입하기</button>
                        <button type="reset">가입취소</button>
                    </li>
                </ul>
            </form>
        </div>
    );

}
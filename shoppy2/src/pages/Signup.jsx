import React from 'react';
import { useState, useRef } from 'react';
import '../styles/signup.css';
import { validateSignup, handleDuplicateIdCheck, handlePasswordCheck } from '../utils/funcValidate.js';
import { initSignup, useInitSignupRefs } from '../utils/funcInitialize.js';
export default function Signup() {
    const {names, initForm, labels, placeholders, namesStr}= initSignup();
    const { refs, msgRefs} = useInitSignupRefs(names);
    // const names = ['id', 'pwd', 'cpwd', 'name', 'phone', 'emailname'];
    // const namesStr = ['아이디', '비밀번호', '비밀번호 확인', '이름', '전화번호', '이메일'];
    // const placeholderStr = ['아이디(6~2자이내)', '비밀번호 입력(문자,숫자,특수문자 포함 6~12자)',
    //     '비밀번호 재입력', '이름을 입력해주세요', '휴대폰 번호 입력("-" 포함)', '이메일 주소'];

    // const initForm = (initArray) => {
    //     const init = initArray.reduce((acc, key) => {
    //         acc[key] = '';
    //         return acc;
    //     }, {})
    //     return init;
    // };
    const [formData, setFormData] = useState(initForm);
    const [errorMsg, setErrorMsg] = useState(initForm);

    // const refs = useRef(names.reduce((acc, cur) => { //useRef로 감쌌기 때문에 호출 시에 .current로 껍질을 벗겨야 한다. 잘 모른다면 log를 찍어보자.
    //         acc[cur.concat("Ref")] = React.createRef();
    //         return acc;
    //     }, {})
    // );
    // refs.current.emaildomain = React.createRef();
    // console.log(refs); //{current: {…}}
    
    // const msgRefs = useRef(names.reduce((acc, cur) => {
    //         acc[cur.concat("MsgRef")] = React.createRef();
    //         return acc;
    //     }, {})
    // );
    // const labels = names.reduce((acc, cur, idx) => { 
    //     acc[cur] = namesStr[idx];
    //     return acc;
    // }, {});

    // const placeholders = names.reduce((acc, cur, idx) => { 
    //     acc[cur] = placeholderStr[idx];
    //     return acc;
    // }, {});

    
    

    const handleChangeSignup = (event) => {
        const {name, value} = event.target;
        setFormData({...formData, [name]:value});
        console.log(name, value);
        
    };

    const handleSubmitSignup = (e) => {
        e.preventDefault();
        
        if(validateSignup(refs, msgRefs, errorMsg, setErrorMsg, namesStr)){
            console.log(formData);
            
        }
        console.log(refs);
            
    };

    
    return (
        <div className="content">
            <h1 className="center-title">SIGINUP</h1>
            <form onSubmit={handleSubmitSignup} className="signup-form">
                <ul>

                    {
                        names && names.map((item) => (
                        <li>
                            <label for="" ><b>{labels[item]}</b></label>
                            <span id="error-msg-id" ref={msgRefs.current[item.concat("MsgRef")]}>{errorMsg[item]}</span>
                            {
                                (item !== "emailname") ? 
                                <div>
                                    <input  type = {(item === 'pwd' || item === "cpwd") ? "password" : "text"} 
                                            name={item}
                                            id={item}
                                            ref={refs.current[item.concat("Ref")]}
                                            placeholder = {placeholders[item]}
                                            onBlur={(item === 'cpwd' ? () => handlePasswordCheck(refs.current["pwdRef"], refs.current["cpwdRef"], refs.current["nameRef"]) 
                                                : null)}
                                            onChange={handleChangeSignup}
                                             />
                                    {item === "id" && 
                                        <>
                                            <button type="button" onClick={() =>  
                                            handleDuplicateIdCheck(
                                                refs.current["idRef"],
                                                refs.current["pwdRef"],
                                                msgRefs.current["idMsgRef"]
                                            )
                                            }>중복확인</button>
                                            <input type="hidden" id="idCheckResult" value="default" />
                                        </>
                                    }
                                    
                                </div>:
                                <div>
                                    <input type="text" 
                                            name={item}
                                            id = {item}
                                            ref={refs.current[item.concat("Ref")]}
                                            onChange={handleChangeSignup}
                                            placeholder={placeholders[item]} />

                                    <span>@</span>       

                                    <select name="emaildomain" 
                                            id="emaildomain" 
                                            ref={refs.current["emaildomainRef"]}
                                            onChange={handleChangeSignup}
                                            >
                                        <option value="default">선택</option>
                                        <option value="naver.com">naver.com</option>
                                        <option value="gmail.com">gmail.com</option>
                                        <option value="daum.net">daum.net</option>
                                    </select>
                                </div>
                                
                            }
                            
                        </li>
                        ))
                    }
                    {/* <li>
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
                        <span id="error-msg-cpwd" ref={msgRefs.msgCpwdRef}>{errorMsg.cpwd}</span>
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
                        <span id="error-msg-name" ref={msgRefs.msgNameRef}>{errorMsg.name}</span>
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
                        <span id="error-msg-phone" ref={msgRefs.msgPhoneRef}>{errorMsg.phone}('-' 포함)</span>
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
                        <span id="error-msg-emailname" ref={msgRefs.msgEmailnameRef}>{errorMsg.emailname}</span>
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
import React from 'react';
import { useState, useRef } from 'react';
import '../styles/signup.css';
import { validateSignup, handleDuplicateId, handlePasswordCheck } from '../utils/funcValidate.js';
import { initSignup, useInitSignupRefs } from '../utils/funcInitialize.js';
export default function Signup() {
    const {names, initForm, labels, placeholders, namesStr}= initSignup();
    const { refs, msgRefs} = useInitSignupRefs(names);

    const [formData, setFormData] = useState(initForm);
    const [errorMsg, setErrorMsg] = useState(initForm);
    const [duplicateId, setDuplicateId] = useState('default');

    const handleChangeSignup = (event) => {
        const {name, value} = event.target;
        setFormData({...formData, [name]:value});
        console.log(name, value);
        
    };

    const handleSubmitSignup = (e) => {
        e.preventDefault();
        
        if(validateSignup(refs, msgRefs, errorMsg, setErrorMsg, namesStr)){
            if(duplicateId === 'complete'){
                console.log(formData);

            }else{
                alert('중복 확인을 진행해 주세요');
                refs.current["idRef"].current.focus();
                return false;
            }
            
        }
            
    };

    console.log(refs);
    

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
                                    <input type={item === "pwd"|| item === "cpwd" ? 'password': 'text'}
                                            name={item}
                                            id={item}
                                            ref={refs.current[item.concat("Ref")]}
                                            placeholder = {placeholders[item]}
                                            onBlur={(item === 'cpwd'? () => handlePasswordCheck(
                                                refs.current["pwdRef"], refs.current["cpwdRef"], refs.current["nameRef"]
                                            ):null)}
                                            onChange={handleChangeSignup} />
                                    {item === "id" && 
                                        <>
                                            <button type="button" onClick={() => handleDuplicateId(refs.current["idRef"], refs.current["pwdRef"]
                                                ,setDuplicateId //파라미터 개수와 순서를 맞추자.
                                            )
                                                                                        
                                            }>중복확인</button>
                                            <input type="hidden" id="idCheckResult" value={duplicateId} />
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
                    <li>
                        <button type="submit">가입하기</button>
                        <button type="reset">가입취소</button>
                    </li>
                </ul>
            </form>
        </div>
    );

}
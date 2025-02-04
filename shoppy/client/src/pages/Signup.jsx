import React from 'react';
import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/signup.css';
import { validateSignup, handleDuplicateIdCheck, handlePasswordCheck } from '../utils/funcValidate.js';
import { initSignup, useInitSignupRefs } from '../utils/funcInitialize.js';
import axios from 'axios';
export default function Signup() {
    const navigate = useNavigate();
    const {names, initForm, labels, placeholders, namesStr}= initSignup();
    const { refs, msgRefs} = useInitSignupRefs(names);
    
    const [formData, setFormData] = useState(initForm);
    const [errorMsg, setErrorMsg] = useState(initForm);
    console.log('refs----->', refs);
    const [idCheckResult, setIdCheckResult] = useState('default');
    


    const handleChangeSignup = (event) => {
        const {name, value} = event.target;
        setFormData({...formData, [name]:value});
        console.log(name, value);
        setIdCheckResult('default');//아이디를 재입력하는 경우에 중복확인 체크버튼 초기화
    };

    const handleSubmitSignup = (e) => {
        e.preventDefault();
        // console.log(refs.current["idCheckResultRef"].current.value);
        
        if(validateSignup(refs, msgRefs, errorMsg, setErrorMsg, namesStr)){
            // if(idCheckResult === 'default'){}
            if(refs.current["idCheckResultRef"].current.value === 'default'){
                alert('중복 확인을 진행해 주세요');
                return false;
            }else{
                console.log('submit --->', formData);
                //  서버 --> DB 테이블에 insert
                // GET : URL 통해 호출 및 데이터 전달 => 패킷의 Header => req.params, 보안에 취약함, 작은데이터에 용이
                // POST : URL 주소로 경로 호출, 데이터 전달 => 패킷의 BODY => req.body, 보안에 강함. 큰 데이터에 용이
                // axios.post('경로', {전송할 객체})
                //         .then()
                //         .catch(error => console.log(error));

                axios.post('http://localhost:9000/member/signup', formData) //formData는 컨트롤러로 전송되어야 한다.
                        .then(res => {
                            if(res.data.result_rows === 1){
                                alert('회원가입에 성공하셨습니다.');
                                // window.location.href = '/login';

                                setTimeout(() => {
                                    navigate('/login');
                                }, 3000); //3초 후에 로그인 페이지로 이동
                                

                            }else{
                                alert('회원가입 실패');
                            }
                        })
                        .catch(error => {
                            alert('회원가입 실패');
                            console.log(error);
                        });                              
            }
            
        }
            
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
                                                msgRefs.current["idMsgRef"],
                                                refs.current["idCheckResultRef"],
                                                setIdCheckResult
                                            )
                                            }>중복확인</button>
                                            <input type="hidden" id="idCheckResult" value={idCheckResult} ref={refs.current["idCheckResultRef"]}/>
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
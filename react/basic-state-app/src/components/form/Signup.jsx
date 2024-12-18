import './commons.css';
import './cgv.css';
import { useRef, useState } from 'react';
import { validateSignup, handleIdCheck, handlePasswordCheck } from '../../apis/validate';
import { errorCheckSignup } from '../../apis/errorCheck.js';
import { initFormName } from '../../apis/initial.js';

export default function Signup() {
    const testId = 'test';
    const idMsgRef = useRef(null); //span태그에 들어가는 문자열
    const refs = {
        idRef: useRef(null),
        pwdRef: useRef(null),
        cpwdRef:useRef(null),
        nameRef: useRef(null),
        phoneRef: useRef(null),
        emailNameRef: useRef(null),
        emailDomainRef: useRef(null)
    };

    const names = ["id","pwd","cpwd","name","phone","emailName","emailDomain"];

    const [formData,setFormData] = useState(initFormName(names));
    const [errors, setErrors] = useState(initFormName(names));

    const handleChangeSignup = (event) => {
        const {name, value} = event.target;
        setFormData({...formData, [name]:value});
        idMsgRef.current.style.setProperty('color', 'red');
        errorCheckSignup(name, value, errors, setErrors);

    };
    const handleSubmitSignup = (e) => {
        // 폼이 입력이 종료된 후 submit 함수
        e.preventDefault();
        if(validateSignup(refs, errors, setErrors)){
            console.log(formData);
        }
    };

    

    
    

    return (

<div className="content">
            <div className="center-layout join-form">
                <h1 className="center-title">회원가입</h1>
                <form onSubmit={handleSubmitSignup}>
                    <ul>
                        <li>
                            <label for="id"><b>아이디</b></label> <span id="error-msg-id" ref={idMsgRef}>{errors.id}</span>
                            <div>
                                <input type="text" name="id" id="id" value={formData.id} ref={refs.idRef} onChange={handleChangeSignup} placeholder="아이디 입력(6~20자)"/>
                                <button type="button" onClick={() => {
                                    const param = {
                                        'refs': refs,
                                        'errorCheckSignup': errorCheckSignup,
                                        'errors':errors,
                                        'setErrors':setErrors,
                                        'testId':testId,
                                        'idMsgRef':idMsgRef
                                    }
                                    handleIdCheck(param) 
                                }}>중복확인</button>
                                <input type="hidden" id="idCheckResult" value="default"/>
                            </div>
                        </li>

                        <li>
                            <label for="pw"><b>비밀번호</b></label> <span id="error-msg-pw">{errors.pwd}</span>
                            <div> 
                                <input type="password" name="pwd" id="pw" value={formData.pwd} ref={refs.pwdRef} onChange={handleChangeSignup}
                                placeholder="비밀번호 입력(문자, 숫자, 특수문자 포함 8~20자)" /> 
                            </div>
                        </li>

                        <li>
                            <label for="pw_c"><b>비밀번호확인</b></label> <span id="error-msg-cpw">{errors.cpwd}</span>
                            <div>
                                
                                <input type="password" name="cpwd" id="cpw" 
                                onBlur={() => {
                                    const param = {
                                            'refs': refs,
                                            'setErrors': setErrors,
                                            'errors': errors,
                                            'setFormData':setFormData,
                                            'formData': formData
                                        }
                                handlePasswordCheck(param)}}
                                value={formData.cpwd} ref={refs.cpwdRef} onChange={handleChangeSignup} placeholder="비밀번호 재입력" />
                            </div>
                        </li>

                        <li>
                            <label for="name">이름</label>
                            <span id="error-msg-name">{errors.name}</span>
                            <div>
                                <input type="text" name="name"
                                id="name" value={formData.name} ref={refs.nameRef} onChange={handleChangeSignup}
                                placeholder="이름을 입력해주세요" />
                            </div>
                        </li>

                         <li>
                            <label for="phone">전화번호</label>
                            <span id="error-msg-phone">{errors.phone}</span>
                            <div>
                                <input type="text" name="phone" 
                                id="phone" value={formData.phone} ref={refs.phoneRef} onChange={handleChangeSignup}
                                placeholder="휴대폰 번호 입력('-'제외 11자리 입력)" />
                            </div>
                        </li>

                        <li>
                            <label for="email">이메일 주소</label>
                            <span id="error-msg-email">{errors.emailName}</span>

                            <div>
                                
                                 <input type="text" 
                                    id="email"
                                    value={formData.emailName} ref={refs.emailNameRef} onChange={handleChangeSignup}
                                 placeholder="이메일 주소" name="emailName" />

                                 <span>@</span>
                                 <select name="emailDomain" id="emaildomain"
                                    value={formData.emailDomain} ref={refs.emailDomainRef} onChange={handleChangeSignup}
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
        </div>
    );
};
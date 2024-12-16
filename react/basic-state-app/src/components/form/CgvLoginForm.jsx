import './cgv.css';
import './commons.css';
import { useState, useRef } from 'react';
import { validate } from '../../apis/validate.js';

export default function CgvLoginForm() {
    // const idRef = useRef(null);
    // const pwRef = useRef(null);
    const refs = {
        idRef: useRef(null), //refs.idRef
        pwRef: useRef(null)
    };

    const initFormData = {'id':"", 'pw': ""};
    const [formData, setFormData] = useState(initFormData);
    const [errorMsg, setErrorMsg] = useState({'id' : '', "pw": ''});
    const handleChangeForm = (event) => {
        const {name, value} = event.target;
        setFormData({...formData, [name]: value});
        if(name === 'id'){
            (value === '')?
                setErrorMsg({...errorMsg, "id":"아이디를 입력해주세요."}): setErrorMsg({...errorMsg, "id": ""});
        }else if(name === "pw"){
            (value === '')?
                setErrorMsg({...errorMsg, "pw":"비밀번호를 입력해주세요."}): setErrorMsg({...errorMsg, "pw": ""});
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const param = {
            // "idRef" : idRef,
            // "pwRef": pwRef, 
            "refs":refs,
            "errorMsg": errorMsg,
            "setErrorMsg": setErrorMsg
        };
        if(validate(param)){

            console.log(formData);

        }
    };

return (
    <div>
         <div className="center-layout login-form">
                <h1 className="center-title">로그인</h1>
                <form onSubmit={handleSubmit}>
                    <ul>
                        <li>
                            <p>
                                아이디 비밀번호를 입력하신 후, 로그인 버튼을 클릭해 주세요.
                            </p>
                        </li>
                        <li>
                            <div className="input-wrap">
                                <i className="fa-regular fa-user"></i>
                                <span>|</span>
                                <label for=""></label>
                                <input type="text" name="id" id="id"
                                // oninput="handleChange(event)" 
                                ref={refs.idRef}
                                onChange={handleChangeForm}
                                className="handle"
                                placeholder="아이디를 입력해주세요" />
                            </div>
                            <div id="error-msg-id" style={{color:'red', fontSize:'0.8rem'}}>{errorMsg.id}</div>
                           
                        </li>

                        <li>
                            <div className="input-wrap">
                                <i className="fa-solid fa-lock"></i>
                                <span>|</span>
                                <label for=""></label>
                                <input type="password" name="pw" id="pw" 
                                // oninput="handleChange(event)" 
                                ref={refs.pwRef}
                                onChange={handleChangeForm}
                                className="handle"
                                placeholder="비밀번호를 입력해주세요"/>

                            </div>
                            <div id="error-msg-pw" style={{color:'red', fontSize:'0.8rem'}}>{errorMsg.pw}</div>
                            
                        </li>
                        <li>
                            <button type="submit" className="btn-main-color" >로그인</button>
                        </li>
                        <li>
                            <div>
                                <input type="checkbox" name="status"/>
                                <label for="">아이디저장</label>
                            </div>
                            <div>
                                <a href="#">아이디 찾기<span>&gt;</span></a>
                                <a href="#">비밀번호 찾기<span>&gt;</span></a>
                            </div>
                        </li>

                        <li>
                            <button>
                                네이버 로그인
                            </button>
                        </li>
                    </ul>
                    <div>
                        <a href="#"><img src="https://adimg.cgv.co.kr//images/202206/loginplus/350x300.png" alt="외부사이트"/></a>
                        
                    </div>
                </form>
            </div>
    </div>
    );
};
import { useRef, useState } from "react";
import { validateLogin2 } from "../../apis/validate";

export default function Login2() {
    const idRef = useRef(null);
    const pwRef = useRef(null);


    const [form, setForm] = useState({"id": "", "pw": ""});
    const [errorMsg, setErrorMsg] = useState({"id": "", "pw": ""});
    const handleChange = (event) => {
        const {name, value} = event.target;
        setForm({...form, [name]:value});

        if(name === 'id'){
            (value === '')?
            setErrorMsg({...errorMsg, ["id"]: "아이디를 입력해주세요."}):
            setErrorMsg({...errorMsg, ["id"]: ""});
        }else if(name === 'pw'){
            (value === '')?
            setErrorMsg({...errorMsg, ["pw"]: "비밀번호를 입력해주세요."}):
            setErrorMsg({...errorMsg, ["pw"]: ""});
        }

    };

    // const validate = () => {
    //     if(idRef.current.value === ''){
    //         setErrorMsg({...errorMsg, ["id"]: "아이디를 입력해주세요."});
    //         idRef.current.focus();
    //         return false;
    //     }else if(pwRef.current.value === ''){
    //         setErrorMsg({...errorMsg, ["pw"]: "비밀번호를 입력해주세요."});
    //         pwRef.current.focus();
    //         return false;

    //     }
    //     return true;
    // };
    const handleSubmit = (event) => {
        event.preventDefault();
        const param ={
            "idRef": idRef,
            "pwRef": pwRef,
            "errorMsg": errorMsg,
            "setErrorMsg": setErrorMsg
        };

        if(validateLogin2(param)){
            console.log(form);
        }  
    };

    return (
    <form onSubmit={handleSubmit}>
        <ul>
            <li>
                <label htmlFor="">아이디</label>
                <input type="text" 
                    name="id"
                    value={form.id}
                    ref={idRef}
                    onChange={handleChange}/>
                    <span style={{color: "red"}}>{errorMsg.id}</span>
            </li>
            <li>
                <label htmlFor="">패스워드</label>
                <input type="text" 
                    name="pw"
                    value={form.pw}
                    ref={pwRef}
                    onChange={handleChange}/>
                    <span style={{color: "red"}}>{errorMsg.pw}</span>
            </li>
            <li>
                <button type="submit">로그인</button>
            </li>
        </ul>
    </form>
    );
};
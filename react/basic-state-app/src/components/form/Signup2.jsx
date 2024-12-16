import { useRef, useState } from "react";

export default function Signup2() {

    const refs ={
        idRef : useRef(null),
        pwdRef : useRef(null),
        cpwdRef : useRef(null),
        phoneRef : useRef(null),
        addressRef : useRef(null)
    };


    const init = {
        "id":"",
        "pwd":"",
        "cpwd":"",
        "phone":"",
        "address":"",
    }
    const initErrors = {
        "id":"",
        "pwd":"",
        "cpwd":"",
        "phone":"",
        "address":"",
    }
    const errorMsg = [
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
            'name':'address',
            'msg':'주소를 입력해주세요.'
        }
];
    const [form, setForm] = useState(init);
    const [errors, setErrors] = useState(initErrors);
    


    const handleChange = (e) => {
        console.log(e.target);
        const {name, value} = e.target;
        setForm({...form, [name]:value});

        {errorMsg.map((item) => {
                return (item.name === name)? ((value !== '')? setErrors({...errors, [item.name]: ''}): setErrors({...errors, [item.name]: item.msg})):'';
            }
        )}
    };

    const validate = () => {
        if(refs.idRef.current.value === ''){
            setErrors({...errors, "id":"아이디를 입력하세요."});
            refs.idRef.current.focus();
            return false;
        }else if(refs.pwdRef.current.value === ''){
            setErrors({...errors, "pwd":"비밀번호를 입력하세요."});
            refs.pwdRef.current.focus();
            return false;
        }else if(refs.cpwdRef.current.value === ''){
            setErrors({...errors, "cpwd":"비밀번호를 입력하세요."});
            refs.cpwdRef.current.focus();
            return false;
        }else if(refs.phoneRef.current.value === ''){
            setErrors({...errors, "phone":"전화번호를 입력하세요."});
            refs.phoneRef.current.focus();
            return false;
        }else if(refs.addressRef.current.value === ''){
            setErrors({...errors, "address":"주소를 입력하세요."});
            refs.addressRef.current.focus();
            return false;
        }
        return true;
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if(validate()){
            console.log(form);
        }
    }; 

    return (
    <div>
        <form onSubmit={handleSubmit}>
            <ul>
                <li>
                    <label htmlFor="">아이디</label>
                    <input type="text" name="id" value= {form.id} onChange={handleChange} ref={refs.idRef}/>
                    <span>{errors.id}</span>
                </li>
                <li>
                    <label htmlFor="">비밀번호</label>
                    <input type="password" name="pwd" value= {form.pwd} onChange={handleChange} ref={refs.pwdRef}/>
                    <span>{errors.pwd}</span>
                </li>
                <li>
                    <label htmlFor="">비밀번호 확인</label>
                    <input type="password" name="cpwd" value= {form.cpwd} onChange={handleChange} ref={refs.cpwdRef}/>
                    <span>{errors.cpwd}</span>
                </li>
                <li>
                    <label htmlFor="">전화번호</label>
                    <input type="text" name="phone" value= {form.phone} onChange={handleChange} ref={refs.phoneRef}/>
                    <span>{errors.phone}</span>
                </li>
                <li>
                    <label htmlFor="">주소</label>
                    <input type="text" name="address" value= {form.address} onChange={handleChange} ref={refs.addressRef}/>
                    <span>{errors.address}</span>
                </li>
                <li>
                    <button type="submit">로그인</button>
                </li>
            </ul>
        </form>
    </div>
    );
};
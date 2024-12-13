import { useState, useRef } from "react";

export default function UserInfo() {
    const nameRef = useRef(null);
    const addressRef = useRef(null);
    const ageRef = useRef(null);
    const info = {"name":"", "address":"", "age": ""}; 
    const [userInfo, setUserInfo] = useState(info);

    const handleChange = (e) => { //onChange로 인해 입력하는 값이 변함에 따라 이벤트 발생
        //이벤트의 target은 type, name, value와 같은 input 태그 안의 속성들을 전달해줌.
        const {name, value} = e.target; //e.target에서 name, value 값을 추출(구조분해할당)
        setUserInfo({...userInfo, [name]: value}); //userInfo 객체를 복사한 후에 입력한 input 태그의 name속성과 value 속성의 값들을 넣어주고
                                                //userInfo에 넣어줌 - [] : 오브젝트 객체의 필드'값'을 변수로 입력하는 경우에는 []로 감싼 후 적용
    };

    const validateForm = () => {
        let result = true;
        if(nameRef.current.value === ''){
            alert('name입력');
            result = false;
        }else if(addressRef.current.value === ''){
            alert('address입력');
            result = false;
            
        }else if(ageRef.current.value === ''){
            alert('age입력');
            result = false;
        }

        return result;
    }
    const handleSubmit = (e) => {
        e.preventDefault();

        if(validateForm()){
            console.log(userInfo);
        }
        
    };
    return (
    <div>
        <h1>UserInfo</h1>
        <form onSubmit={handleSubmit}>
            <ul>
                <li>
                    <label>Name</label>
                    <input type="text" name="name" value={userInfo.name} ref ={nameRef} onChange={handleChange}/>
                </li>
                <li>
                    <label>Address</label>
                    <input type="text" name="address" value={userInfo.address} ref ={addressRef} onChange={handleChange}/>
                </li>
                <li>
                    <label>Age</label>
                    <input type="text" name="age" value={userInfo.age} ref ={ageRef} onChange={handleChange}/>
                </li>
                <li>
                    <button type="submit"> Send </button>
                </li>
            </ul>
        </form>
    </div>
    );
};
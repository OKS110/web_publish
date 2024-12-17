import { useRef, useState } from "react";
import { validateSignup2, errorChange } from "../../apis/validate.js";
import { initFormName } from "../../apis/initial.js";
export default function Signup2() {
    //배열 + reduce() 함수
    const name = ["id","pwd","name","phone1","phone2","phone3","address","year","month","day" ,"job","gender","email", "introduce"];

    const refs = {
        idRef : useRef(null),
        pwdRef : useRef(null),
        nameRef : useRef(null),
        phone1Ref : useRef(null),
        phone2Ref : useRef(null),
        phone3Ref : useRef(null),
        addressRef : useRef(null),
        yearRef : useRef(null),
        monthRef : useRef(null),
        dayRef : useRef(null),
        jobRef : useRef(null),
        genderRef : useRef(null),
        emailRef : useRef(null),
        introduceRef : useRef(null)
    };
    const [formData, setFormData] = useState(initFormName(name));
    const [errors, setErrors] = useState(initFormName(name));
    
    const handleSubmit = (event) => {
        event.preventDefault();
        if(validateSignup2(refs, errors, setErrors)){
            console.log(formData);
        }
        
    };

    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormData({...formData, [name]:value});
        errorChange(name, value, errors, setErrors);
        
    };


    return (
    <form onSubmit={handleSubmit}>
        <ul>
            <li>
                <label htmlFor="">아이디 : </label>
                <input type="text" name="id" value={formData.id} onChange={handleChange} ref={refs.idRef}/>
                <span>{errors.id}</span>
            </li>
            <li>
                <label htmlFor="">비밀번호 : </label>
                <input type="text" name="pwd" value={formData.pwd} onChange={handleChange} ref={refs.pwdRef}/>
                <span>{errors.pwd}</span>
            </li>
            <li>
                <label htmlFor="">이름 : </label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} ref={refs.nameRef}/>
                <span>{errors.name}</span>
            </li>
            <li>
                <label htmlFor="">전화 : </label>
                <input type="text" name="phone1" value={formData.phone1} style={{ width:"50px"}} onChange={handleChange} ref={refs.phone1Ref}/>-
                <input type="text" name="phone2" value={formData.phone2} style={{ width:"50px"}} onChange={handleChange} ref={refs.phone2Ref}/>-
                <input type="text" name="phone3" value={formData.phone3} style={{ width:"50px"}} onChange={handleChange} ref={refs.phone3Ref}/>
                <span>{errors.phone1}</span>
                <span>{errors.phone2}</span>
                <span>{errors.phone3}</span>
            </li>
            <li>
                <label htmlFor="">주소 : </label>
                <input type="text" name="address" value={formData.address} onChange={handleChange} ref={refs.addressRef}/>
                <span>{errors.address}</span>
            </li>
            <li>
                <label htmlFor="">생일 : </label>
                <input type="text" name="year" value={formData.year} style={{ width:"50px"}} onChange={handleChange} ref={refs.yearRef}/>/
                <input type="text" name="month" value={formData.month} style={{ width:"50px"}} onChange={handleChange}ref={refs.monthRef}/>/
                <input type="text" name="day" value={formData.day} style={{ width:"50px"}} onChange={handleChange} ref={refs.dayRef}/>
                <span>{errors.year}</span>
                <span>{errors.month}</span>
                <span>{errors.day}</span>

            </li>
            <li>
                <label htmlFor="">직업 : </label>
                <select name="job" value={formData.job} id="job" onChange={handleChange} ref={refs.jobRef}>
                    <option value="default">선택</option>
                    <option value="back">백엔드</option>
                    <option value="front">프론트엔드</option>
                    <option value="system">시스템관리자</option>
                </select>
                <span>{errors.job}</span>
            </li>
            <li>
                <label htmlFor="">성별 : </label>
                <input type="radio" name="gender" value="m" onChange={handleChange} ref={refs.genderRef} />남
                <input type="radio" name="gender" value="w" onChange={handleChange} ref={refs.genderRef}/>여
                <span>{errors.gender}</span>
            </li>
            <li>
                <label htmlFor="">이메일 : </label>
                <input type="text" name="email" value={formData.email} onChange={handleChange} ref={refs.emailRef}/>
                <span>{errors.email}</span>
            </li>
            <li>
                <label htmlFor="">자기소개 : </label>
                <textarea rows="10" cols="30" name="introduce" value={formData.introduce} id="introduce" onChange={handleChange} ref={refs.introduceRef}></textarea>
                <span>{errors.introduce}</span>
            </li>
            <li>
                <button type="submit">회원가입</button>
                <button type="reset">취소</button>
            </li>

        </ul>
    </form>
    );
};
import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import ImageUpload from "../components/ImageUpload.jsx";
import axios from "axios";


export default function NewProduct() {
    const navigate = useNavigate();
    const productNameRef = useRef(null);
    const [fname, setFname] = useState({});
    const [preview, setPreview] = useState("");
    let [formData, setFormData] = useState({});


    const getFileName = (fileNames) => {
        console.log(`fileNames ==> `, fileNames);
        setFname(fileNames);
        setPreview(`http://localhost:9000/${fileNames.uploadFileName}`);
        
    }
    // 폼 입력 시 값을 formData에 추가하는 이벤트 처리
    const handleChange = (e) => {
        const {name, value} = e.target;
        // console.log(name, value);
        setFormData({...formData, [name]:value});
        
        
    };


    //  등록 이벤트 처리
    const handleSubmit = (e) => {
        e.preventDefault();
        if(productNameRef.current.value === ''){
            alert('상품명을 입력해주세요.');
            productNameRef.current.focus();
            return false;
        }else{
            // 서버 연동
            formData = {...formData,
                 "uploadFile":fname.uploadFileName,
                 "sourceFile": fname.sourceFileName
                }
            console.log("formData ==> ", formData);
            
            axios
                .post('http://localhost:9000/product/new', formData)
                .then(res => {
                    if(res.data.result_rows === 1){
                        alert('상품이 등록되었습니다.');
                        navigate('/all');
                    }else{
                        alert('상품 등록 실패!!');
                    }
                    // console.log("res.data ==> ", res.data);
                    
                })
                .catch(error => {
                    alert('상품 등록 실패!!');
                    console.log(error)
                })
        }
        
    }
return (
    <div>
        <h1>상품등록</h1>
        <form onSubmit={handleSubmit}>
            <ul>
                <li>
                    <label>상품명</label>
                    <input type="text" 
                        name="productName" 
                        ref = {productNameRef}
                        onChange={handleChange}/>
                </li>
                <li>
                    <label>가격</label>
                    <input type="text" name="price" onChange={handleChange}/>
                </li>
                <li>
                    <label>상품정보</label>
                    <input type="text" name="description" onChange={handleChange}/>
                </li>
                <li>
                    <label>파일 업로드</label>
                    <ImageUpload getFileName = {getFileName}/>
                    {preview && <img src={preview} alt="preview image" style={{width:"300px"}}/>}
                </li>
                <li>
                    <input type="hidden" name="upload" value={fname.uploadFileName}/>
                    <input type="hidden" name="source" value={fname.sourceFileName}/>
                </li>
                <li>
                    <button type="submit">등록</button>
                    <button type="reset">취소</button>
                </li>
            </ul>
        </form>
    </div>
    );
};
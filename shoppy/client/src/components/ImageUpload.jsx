
import React, {useState} from 'react';
import axios from 'axios';
import {Form} from 'react-bootstrap';

export default function ImageUpload({getFileName}) {
    const [oldFile, setOldFile] = useState("");
    const formData = new FormData();

    const handleFileUpload = (e) => {
        formData.append("file", e.target.files[0]); //"file" - controller의 single값과 맞춰야 함. append - 데이터 추가(새로운 파일 b.jpg) 
                        //key, value
        formData.append("oldFile", oldFile); //이전 파일 z.jpg
        // 서버 전송
        axios.post("http://localhost:9000/uploads", formData, {
            headers : {"Content-Type":"multipart/form-data"}, //파일과 문자 등 데이터 추가 시
        })
            .then(res => {
                console.log("res ==> ", res.data);
                getFileName(res.data);
                setOldFile(res.data.oldFile);
            })
            .catch(error => console.log(error));
    };
    console.log("oldFile ==> ", oldFile);
    
return (
    <div>
        <Form.Control 
            type='file'
            
            onChange={(e) => {handleFileUpload(e)}}
        />
    </div>
    );
};
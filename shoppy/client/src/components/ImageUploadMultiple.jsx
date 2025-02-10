import React, {useState} from "react";
import Form from 'react-bootstrap/Form';
import axios from "axios";
export default function ImageUploadMultiple({getFileName}) {
    const [oldFile, setOldFile] = useState([]);

    const handleFileUploadMultiple = (e) => {
        const formData = new FormData();
        const files = e.target.files;
        // console.log('files ==> ',files);

        // if(files.length < 6){
            // formData에 append - file 개별로 append 되어야 함!!!
            for(const file of files){
                formData.append("files", file);
            }
            formData.append("oldFile", oldFile);

        
            // for(let i = 0; i<files.length; i++) formData.append("files", files[i]);
            // files.forEach((file) => { 얘는 안 됨. iterable 호출로 인해 사용불가 / [...files].forEach는 가능함. 
            // 배열을 순회하기 때문에 iterable 객체는 순회 불가
            //     formData.append("files", file);
            // })
            // for(const [key, value] of formData) console.log(key, value);
            


            // 서버 전송
            // 파일업로드 제한 없이 사용자가 선택한 갯수 만큼 전송 ==> ?maxFiles=${files.length}
            axios.post(`http://localhost:9000/uploads/multiple?maxFiles=${files.length}`, formData,{
                headers: {"Content-Type":"multipart/form-data"},
            })
                .then(res =>{
                    getFileName(res.data); //NewProduct 컴포넌트로 전송
                    setOldFile(res.data.oldFile);
                })
                .catch(error => console.log(error));
        // }else{
        //     alert('파일 업로드는 최대 5까지 가능합니다.');
        // }
}

return (
    <div>
        <Form.Control 
            type="file"
            onChange={(e) => handleFileUploadMultiple(e)}
            multiple/>
    </div>
    );
};
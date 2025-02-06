import axios from 'axios';
import {Form} from 'react-bootstrap';

export default function ImageUpload({getFileName}) {

    const formData = new FormData();

    const handleFileUpload = (e) => {
        formData.append("file", e.target.files[0]); //"file" - controller의 single값과 맞춰야 함. append - 데이터 추가
                        //key, value

        // 서버 전송
        axios.post("http://localhost:9000/uploads", formData)
            .then(res => {
                console.log("res ==> ", res.data);
                getFileName(res.data);
            })
            .catch(error => console.log(error));
    };
return (
    <div>
        <Form.Control 
            type='file'
            
            onChange={(e) => {handleFileUpload(e)}}
        />
    </div>
    );
};
import multer from "multer";
import fs from 'fs';
import path from 'path';
// multer 라이브러리로 파일을 업로드 폴더에 저장
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'upload_files/') // 여기에 저장
    },
    filename: function (req, file, cb) { //저장 방식을 정의
        const uniqueSuffix  =Date.now() + '-' + Math.round(Math.random() * 1e9);
        // 똑같은 파일을 업로드해도 다른 파일명으로 저장할 수 있게 해줌.
        
    //   cb(null, file.fieldname + '-' + Date.now())
        cb(null, uniqueSuffix + "-" + file.originalname);        //ex) 20251254-111111111-a.jpg
    }
  })
  
//   multer({ storage: storage }) → 위에서 정의한 storage 설정을 적용
//   single('file') → 단일 파일만 업로드 가능
//   "file" → 프론트엔드에서 보내는 FormData.append("file", file)의 키값과 일치해야 함

// 파일 업로드 실행 함수
export const fileUploadMultiple = (req, res) => {
    const maxFiles = parseInt(req.query.maxFiles); //URL을 타고 온 이름은 문자이기 때문에 parseInt로 변경해줘야 함.
    const upload = multer({ storage: storage }).array('files', maxFiles);
    upload(req, res, (err) => {
        if(err){
            console.log(err);
        }else{
            // console.log('업로드파일리스트 ==> ', req.files);
            // console.log("업로드 삭제파일(oldFile) ==> ", req.body.oldFile);
            const deleteFiles = req.body.oldFile;
            // console.log(deleteFiles.length);
            const oldFileArray = deleteFiles.split(","); //문자열을 ,을 기준으로 배열로 만들어줌.
            console.log(oldFileArray);
            
            
            // console.log(req.file); // 전달된 파일 --> multer 이용한 파일 업로드
            // console.log('oldFile => ', req.body.oldFile); //전달된 문자

            // 이전 파일 존재 시 삭제 로직

            // const oldFile = req.body.oldFile;
            for(const oldFile of oldFileArray){
                if(oldFile){
                    // oldFile 존재 시 업로드 폴더에서 삭제
                    const oldFilePath = path.join('upload_files/', oldFile);
                    if(fs.existsSync(oldFilePath)){
                        try{
                            fs.unlinkSync(oldFilePath);
                            console.log("이전 파일 삭제 완료:", oldFilePath);
                        }catch(error){
                            console.log("이전 파일 삭제 실패", error);
                        }
                    }
                }
            }

            
            // res 객체를 이용한 전송객체 생성 <-> uploadController의 res 객체명과 동일하게 정의!
            let uploadFileName = [];
            let sourceFileName = [];
            let oldFile = [];
            // req.files 배열의 파일 정보를 가져와서 위의 배열에 추가.
            for(const file of req.files){
                uploadFileName.push(file.path);
                sourceFileName.push(file.originalname);
                oldFile.push(file.filename);
            }
            res.json({
                "uploadFileName": uploadFileName, //서버에 저장된 파일 경로
                "sourceFileName": sourceFileName, //사용자가 올린 원본 파일명
                "oldFile": oldFile
            });
            
            // 사용자가 선택한 원래 파일명
            res.end();
        }  
    });
};
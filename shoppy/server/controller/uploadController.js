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
  
  const upload = multer({ storage: storage }).single('file');
//   multer({ storage: storage }) → 위에서 정의한 storage 설정을 적용
//   single('file') → 단일 파일만 업로드 가능
//   "file" → 프론트엔드에서 보내는 FormData.append("file", file)의 키값과 일치해야 함

export const fileUpload = (req, res) => {
    // console.log는 서버에서 터미널로 갖다가 다시 서버로 와야하므로 속도저하에 원인이 됨. 개발이 끝나면 지워주자.
    upload(req, res, (err) => {
        if(err){
            console.log(err);
        }else{
            console.log(req.file); // 전달된 파일 --> multer 이용한 파일 업로드
            console.log('oldFile => ', req.body.oldFile); //전달된 문자
            const oldFile = req.body.oldFile;
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
            
            
            res.json({
                "uploadFileName": res.req.file.path, //서버에 저장된 파일 경로
                "sourceFileName": req.file.originalname, //사용자가 올린 원본 파일명
                "oldFile": res.req.file.filename
            });
            
            // 사용자가 선택한 원래 파일명
            res.end();
        }  
    });
};
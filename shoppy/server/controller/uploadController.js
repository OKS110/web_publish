import multer from "multer";

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
    upload(req, res, (err) => {
        if(err){
            console.log(err);
        }else{
            res.json({
                "uploadFileName": res.req.file.path, //서버에 저장된 파일 경로
                "sourceFileName": req.file.originalname //사용자가 올린 원본 파일명
            })
            
            // 사용자가 선택한 원래 파일명
            res.end();
        }  
    });
};
import express from 'express';
// import mainRouter from './router/mainRouter.js';
// import helloRouter from './router/helloRouter.js';
// import employeeRouter from './router/employeeRouter.js';
import cors from 'cors';
import memberRouter from './router/memberRouter.js';
import uploadRouter from './router/uploadRouter.js';
import productRouter from './router/productRouter.js'
import cartRouter from './router/cartRouter.js'
import path from 'path';

// 서버 생성 및 포트 지정
const server = express();
const port = 9000;

// 서버의 공통적인 작업
server.use(express.json());
server.use(express.urlencoded());
server.use(cors());

// 업로드 파일 호출 경로 추가 - 이미지 호출
server.use('/upload_files', express.static(path.join('upload_files'))) //저장 폴더 연결
             //url 파일 경로                            //폴더 명

// 서버의 요청 처리를 위한 미들웨어 정의
// 로그인과 signup은 하나의 테이블에 두 개의 작업으로 나눠진다.
server.use('/member', memberRouter);

// 업로드 - repository는 필요 없다.
server.use('/uploads', uploadRouter);
server.use('/product', productRouter);

server.use('/cart', cartRouter);

server.listen(port, () => {
    console.log(`server port ===>> ${port}`);        
});

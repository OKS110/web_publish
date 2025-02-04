import express from 'express';
// import mainRouter from './router/mainRouter.js';
// import helloRouter from './router/helloRouter.js';
// import employeeRouter from './router/employeeRouter.js';
import cors from 'cors';
import memberRouter from './router/memberRouter.js';
// 서버 생성 및 포트 지정
const server = express();
const port = 9000;

// 서버의 공통적인 작업
server.use(express.json());
server.use(express.urlencoded());
server.use(cors());

// 서버의 요청 처리를 위한 미들웨어 정의
// 로그인과 signup은 하나의 테이블에 두 개의 작업으로 나눠진다.
server.use('/member', memberRouter);



server.listen(port, () => {
    console.log(`server port ===>> ${port}`);        
});

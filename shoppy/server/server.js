import express from 'express';
import mainRouter from './router/mainRouter.js';
import helloRouter from './router/helloRouter.js';
import employeeRouter from './router/employeeRouter.js';
import cors from 'cors';
// 서버 생성 및 포트 지정
const server = express();
const port = 9000;

// 서버의 공통적인 작업
server.use(express.json());
server.use(express.urlencoded());
server.use(cors());

// 서버의 요청 처리를 위한 미들웨어 정의
server.use('/', mainRouter);
server.use('/hello', helloRouter);
server.use('/employee', employeeRouter);

// // / => Hello~ NodeJs~!
// server.get('/',(req, res) => {
    
//     res.send('<h1>Hello~ NodeJs~!</h1>');
//     // res.send('<h1>Hello2~ NodeJs~!</h1>'); 나타나지 않는다. -> send() 함수는 한 번만 사용(전송) 가능.(맨 처음)
//     res.end();
// });
// //  /hello => Welcome to Hello~
// server.get('/hello', (req, res) => {
//     res.send('Welcome to Hello~');
//     res.end();
// });


server.listen(port, () => {
    console.log(`server port ===>> ${port}`);        
});

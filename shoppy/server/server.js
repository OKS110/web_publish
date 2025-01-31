// const express = require('express'); //NodeJs에서 모듈 가져오기
// package.json파일에 "type":"module", 형식으로 수정하면 import 형식 사용 가능
import express from 'express';
import helloRouter from './router/helloRouter.js'
import productRouter from './router/productRouter.js';
//서버 접근 시 확장자 필수

const server = express(); // 익스프레스 서버 생성
const port = 9000;

// 익스프레스 서버의 요청/응답 처리하는 '미들 웨어'
// 요청/응답 메소드 : GET, POST, PUT, DELETE, USE
// MVC 패턴을 적용하여 작업을 분리시킴
// --> 역할에 맞추어 작업을 분리하는 용도
// --> M(Model), V(View), C(Controller)
// --> M(Repository), V(Router), C(Controller)

server.use('/hello', helloRouter); // hello로 시작하는 주소는 모두 helloRouter로 매핑

// server.get('/hello', helloRouter);
// server.get('/hello/:id', helloRouter);

server.use('/product', productRouter);
// server.get('/product/all', productRouter);
// server.get('/product/:pname', productRouter);

// server.get('/hello', (req, res) => {
//     console.log("HELLO~ NodeJs~!!!");
//     res.send('<h1>반갑습니다. 클라이언트</h1>');
// });

server.listen(port, () => {
    console.log(`서버 대기중 ----> ${port}`);
    // 익스프레스 서버 대기상태 : 포트 설정 및 메시지 출력
});

// package.json에 "type":"commonjs"가 되어있으면 오류가 발생한다. -> module로 바꿔주자.
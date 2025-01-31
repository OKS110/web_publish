import express from 'express';
// import { getHello, getHelloParam } from '../controller/helloController.js'; ==> *로 표현 가능 (아랫줄)
import * as controller from '../controller/helloController.js';
const router = express.Router();

// router.get('라우팅 경로', 연동하는 컨트롤러 이름);
// router.get('/hello', getHello);
// router.get('/hello/:id', getHelloParam);
// 컨트롤러로 이동, 콜백함수를 넣지 않는다.

router //메소드 체이닝
    .get('/', controller.getHello)
    .get('/:id', controller.getHelloParam);

export default router;
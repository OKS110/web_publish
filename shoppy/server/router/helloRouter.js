import express from 'express';
import * as controller from '../controller/helloController.js';
const router = express.Router();

router.get('/', controller.getHello); // use로 인한 hello 생략
router.get('/test', controller.getHelloTest);

export default router;
import * as repository from '../repository/memberRepository.js';
import jwt from 'jsonwebtoken';

// 로그인
export const checkLogin = async (req, res) => {
    // console.log(req.body);
    let result = await repository.checkLogin(req.body); // result = {result_rows:1}
    if(result.result_rows === 1){
        // jwt 토큰 생성 및 result 객체에 추가 전송 : {result_rows:1, token: ~~~}
        const token = jwt.sign({"userId":req.body.id}, 'LCqwMxqje2')
                                                        // keygen 사이트 : https://randomkeygen.com/
               result = {...result, "token":token};
        console.log(result);
        
    }
    res.json(result);
    res.end();
};  

/**
 * 아이디 중복체크 : getIdCheck
 */
export const getIdCheck = async(req, res) => {
    // console.log('id ===> ', req.body);
    const result = await repository.getIdCheck(req.body);
    res.json(result);
    res.end();
};


/**
 * 회원가입 : registerMember
 */

export const registerMember = async (req, res) => {
    // console.log('req.body ==> ', req.body);
    const result = await repository.registerMember(req.body);
    res.json(result);
    res.end();
};


import {db} from './db.js';

// 아이디 중복체크 - select
export const getIdCheck = async({id}) => { 
// export const getIdCheck = async(idData) => { //idData = {id: 'test'} 객체타입
    const sql = `select count(id) as result from shoppy_member where id = ?`;
    const [result , fields] = await db.execute(sql, [id]); // values는 배열타입
    // console.log('result ===>', result[0]);
    return result[0];
};



/**
 * 회원가입 - insert
 */
export const registerMember = async(formData) => {
    // sql 생성
    const sql = `
        insert into shoppy_member(id, pwd, name, phone, emailname, emaildomain, 
                                    zipcode, address, mdate)
                            values(?, ?, ?, ?, ?, ?, ?, ?, now())
    `;
    const values = [
        formData.id,
        formData.pwd,
        formData.name,
        formData.phone,
        formData.emailname,
        formData.emaildomain,
        null,
        null
    ];
    // db 객체를 이용하여 sql 실행 후 결과 가져오기
    const [result, fields] = await db.execute(sql, values);
    console.log(result);
    // console.log(fields);
    

    // 결과값 리턴
    return {"result_rows" : result.affectedRows};
};

// 로그인 - select
export const checkLogin = async ({id, pwd}) => {// {id:'test, pwd:'1234}
    const sql = `select count(*) as result_rows from shoppy_member
	                where id = ? and pwd = ?`;
    const [result, fields] = await db.execute(sql, [id, pwd]);
    // [{result_rows : 1}]
    return result[0];
};
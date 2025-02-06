// 1. DB 연동 라이브러리 호출 - DB서버주소, user, password, port

import mysql from 'mysql2';
// 작업관리자에서 mysql84가 '실행 중'으로 되어있는지 확인

// 구글에 npm mysql2 검색
// documentation, examples
// https://sidorares.github.io/node-mysql2/docs/examples =>  Connections -> createPool
const pool = mysql.createPool({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'mysql1234',
    database: 'hrdb2019',
    
  });

  export const db = pool.promise();
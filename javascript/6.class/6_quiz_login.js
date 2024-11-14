// 로그인 체크를 위한 클래스 정의

class User{
    #id;
    #pw;
    constructor(id, pw){
        this.#id = id;
        this.#pw = pw;
    }
    get id(){
        return this.#id;
    }
    get pw(){
        return this.#pw;
    }

    set id(newId) {
        if (newId) {   
            this.#id = newId;
        } else {
            console.log("Invalid Id");
        }
    }
    set pw(newPw) {
        if (newPw) {       
            this.#pw = newPw;
        } else {
            console.log("Invalid Pw");
        }
    }
}

// 로그인버튼 클릭 시 호출하는 함수

let user = null;  //객체
const DID = 'test';
const DPASS = '1234';

function loginCheck(){
    // alert("로그인 버튼 클릭!");
    let id = document.querySelector('#id');
    let pw = document.querySelector('#pw');
    if(id.value === ''){
        alert('아이디를 입력해주세요.');
        id.focus();
    }else if(pw.value === ''){
        alert('패스워드를 입력해주세요.');
        pw.focus();
    }else{
        // id, pw => User 클래스 객체 생성과 처리작업
        user = new User(id.value, pw.value);
        console.log(user.id, user.pw);
        
        if(DID === user.id && DPASS === user.pw) alert('로그인 성공!!');
        else alert('로그인 실패!!!');
    }
}

/* 
    서버 연동 작업
*/

// const hong = new User('hong1234', '1234');
// console.log(`ID = ${hong.id} PW = ${hong.pw}`);

// hong.id = 'Eric1234';
// hong.pw = '5678';
// console.log(`ID = ${hong.id} PW = ${hong.pw}`);

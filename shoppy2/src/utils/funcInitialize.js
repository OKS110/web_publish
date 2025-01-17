import React, {useRef} from 'react';

// *************************************************************************
// Signup 컴포넌트 초기화 작업
// *************************************************************************

export function initSignup (){
        const names = ['id', 'pwd', 'cpwd', 'name', 'phone', 'emailname'];
        const namesStr = ['아이디', '비밀번호', '비밀번호 확인', '이름', '전화번호', '이메일'];
        const placeholderStr = ['아이디(6~2자이내)', '비밀번호 입력(문자,숫자,특수문자 포함 6~12자)',
            '비밀번호 재입력', '이름을 입력해주세요', '휴대폰 번호 입력("-" 포함)', '이메일 주소'];
    
        const initForm = names.reduce((acc, key) => {
                acc[key] = '';
                return acc;
            }, {})

        const labels = names.reduce((acc, cur, idx) => { 
            acc[cur] = namesStr[idx];
            return acc;
        }, {});
    
        const placeholders = names.reduce((acc, cur, idx) => { 
            acc[cur] = placeholderStr[idx];
            return acc;
        }, {});

    return {names, initForm, labels, placeholders};
};

export function useInitSignupRefs(names){ //커스텀 훅(함수 앞에 use를 붙여서 생성 - React에서 관리하게 된다.)

    const refs = useRef(names.reduce((acc, cur) => { //useRef로 감쌌기 때문에 호출 시에 .current로 껍질을 벗겨야 한다. 잘 모른다면 log를 찍어보자.
        acc[cur.concat("Ref")] = React.createRef();
        return acc;
    }, {})
    );
    refs.current.emaildomain = React.createRef();

    const msgRefs = useRef(names.reduce((acc, cur) => {
            acc[cur.concat("MsgRef")] = React.createRef();
            return acc;
        }, {})
    );
    return {refs, msgRefs};
};
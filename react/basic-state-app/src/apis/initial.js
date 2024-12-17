// Form 초기화 이름 생성
    // const refs2 = refArray.reduce(() => {}, 리턴타입);
    // acc = {"idRef": useRef(null)};
export const initFormName = (initArray) =>{
    const init = initArray.reduce((acc, key) => {
        // React 전용 useRef 함수는 custom hook 등을 활용해야 reduce 콜백함수 안에서 선언할 수 있음
        acc[key] = '';
        return acc;
    }, {});
    return init;
};
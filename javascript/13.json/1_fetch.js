// fetch(resourceURL) - 비동기식 처리 방식으로 네트워크를 통해 리소스를 가져옴
// KOBIS - 일별 박스오피스
let key = `362298addeb513676d1cf80b15a870f5`;
let target = '20241121'
let url = `http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=362298addeb513676d1cf80b15a870f5&targetDt=20241121`;

// 1. Response 객체 확인
fetch(url)
    .then(response => { //fetch 함수를 호출하서 나온 결과값은 문자열
        console.log(response);
    })  
    .catch(error => {
        console.log(error);
    });
// 2. JSON 데이터 가져오기
    
let result = await fetch(url); // JSON 객체가 문자열 데이터타입으로 가져옴
let jsonData = await result.json(); // json()를 통해 JSON 객체 타입 변환

console.log(jsonData.boxOfficeResult.boxofficeType); //일별 박스오피스
console.log(jsonData.boxOfficeResult.showRange); //20241121~20241121
console.log(jsonData.boxOfficeResult.dailyBoxOfficeList[0]);
// {
//     rnum: '1',
//     rank: '1',
//     rankInten: '0',
//     rankOldAndNew: 'OLD',
//     movieCd: '20247693',
//     movieNm: '위키드',
//     openDt: '2024-11-20',
//     salesAmt: '636010270',
//     salesShare: '36.8',
//     salesInten: '-194136160',
//     salesChange: '-23.4',
//     salesAcc: '1485026700',
//     audiCnt: '63398',
//     audiInten: '-21534',
//     audiChange: '-25.4',
//     audiAcc: '149586',
//     scrnCnt: '1655',
//     showCnt: '5143'
//   }
console.log(jsonData.boxOfficeResult.dailyBoxOfficeList[0].rank);//1
console.log(jsonData.boxOfficeResult.dailyBoxOfficeList[0].movieNm);//위키드


// await 가 없는 경우 에러 발생 - TypeError: result.json is not a function
// fetch는 비동기 즉 result 변수는 Queue로 들어가서 작업을 실행중인데
// 콜스택에서 바로 다음 줄인 jsonData변수를 처리하려고 하니 result에는 값이 없기 때문에 오류가 발생.
console.log(jsonData);

// {
//     boxOfficeResult: {
//       boxofficeType: '일별 박스오피스',
//       showRange: '20241121~20241121',
//       dailyBoxOfficeList: [
//         [Object], [Object],
//         [Object], [Object],
//         [Object], [Object],
//         [Object], [Object],
//         [Object], [Object]
//       ]
//     }
//   }
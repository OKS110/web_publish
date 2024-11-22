import { kobsBoxOffice as boxOffice } from "./kobisCommons.js";

initForm();

function initForm(){
    const output = `
        <h1>일별 박스 오피스</h1>
        <div id = 'content'>
            <label>검색일자</label>
            <select id = 'type'>
                <option value="default">선택</option>
                <option value="Daily">일별</option>
                <option value="Weekly">주간/주말</option>
            </select>
            <input type = "text" id = "searchDt" placeholder = "예) 20241122">
            <button type = "button" id = "searchBtn">Search</button>
        </div>
        <div id = "result"></div>
    `;
    document.querySelector('body').innerHTML = output;
    //기본 박스오피스 화면 출력 : 20240101
    searchBoxOffice('Daily', '20240101');


    /** Search 버튼 이벤트 추가 */
    let button = document.querySelector('#searchBtn');
    let type = document.querySelector('#type');
    let searchDt = document.querySelector('#searchDt');
    button.addEventListener('click', () => {
        if(searchDt.value != 0 && type.value != 'default'){ // 일별 || 주간/주말 박스 오피스 정보 화면 출력
            if(searchDt.value.length === 8 && !(isNaN(searchDt.value) || /\D/.test(searchDt.value))){
                //길이가 8자이고 숫자가 아닌경우와 문자인 경우를 not으로 감싸서 숫자만 들어가게 함.
                console.log('success');
            // 일별 박스오피스 정보 화면 출력
                searchBoxOffice(type.value, searchDt.value);
            }else{
                alert(`예) 20240101`);
            }
        
        }else if(type.value === 'default'){
            alert('박스 오피스 타입을 선택해 주세요.');
            type.focus();
        }else{
            alert('검색일자를 입력해주세요');
            searchDt.focus();
        }
    });

}//end of initForm




// 일별 박스오피스 정보 화면 출력
async function searchBoxOffice(type, searchDt){
    boxOffice(type, searchDt) //Promise 객체로 리턴
    .then((result) => {
        const _type = result.boxOfficeResult.boxofficeType;
        const range = result.boxOfficeResult.showRange;

        let rankList = null;
        // ktype을 체크하여 Daily, Weekly
        if(type === `Daily`){
            rankList = result.boxOfficeResult.dailyBoxOfficeList;
        }else if(type === `Weekly`){
            rankList = result.boxOfficeResult.weeklyBoxOfficeList;
        }

        
        
        let output = `
            <h3>박스오피스 타입 : ${_type}</h3>
            <h3>박스오피스 일자 : ${range}</h3>
            <table>
                <tr>
                    <th>순위</th>
                    <th>제목</th>
                    <th>개봉일</th>
                    <th>당일관객수</th>
                    <th>누적관객수</th>
                </tr>`;

                rankList.forEach((element) => {
                    output += `
                    <tr>
                    <td>${element.rank}</td>
                    <td>${element.movieNm}</td>
                    <td>${element.openDt}</td>
                    <td>${element.audiCnt}</td>
                    <td>${element.audiAcc}</td>
                </tr>
                    `;
                });

                output += `</table>`;

                // 테이블 화면 출력
                document.querySelector('#result').innerHTML = output;
    })
    .catch();

}
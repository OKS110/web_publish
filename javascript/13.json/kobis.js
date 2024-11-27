import { kobisBoxOffice as boxOffice, searchMoviePoster, kmdbMovieDetail } from "./kobisCommons.js";

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

        <div id="imageModal" class="modal">
            <div class="modal-content">
                <span id="closeModal" class="close">&times;</span>
                <img id="modalImage" src="" alt="Modal Image" style="width:100%"/>
                <div id="information"></div>
            </div>
        </div>
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
async function searchBoxOffice(type, searchDt) {
    try {
        const result = await boxOffice(type, searchDt); // 박스오피스 데이터 가져오기
        const _type = result.boxOfficeResult.boxofficeType;
        const range = result.boxOfficeResult.showRange;

        let rankList = null;

        // 타입에 따라 다른 리스트 선택
        if (type === `Daily`) {
            rankList = result.boxOfficeResult.dailyBoxOfficeList;
        } else if (type === `Weekly`) {
            rankList = result.boxOfficeResult.weeklyBoxOfficeList;
        }

        // 초기 HTML 출력
        let output = `
        <h3>박스오피스 타입 : ${_type}</h3>
        <h3>박스오피스 일자 : ${range}</h3>
        <table>
            <tr>
                <th>순위</th>
                <th>포스터</th>
                <th>제목</th>
                <th>개봉일</th>
                <th>당일관객수</th>
                <th>누적관객수</th>
            </tr>`;

        for (const element of rankList) {
            // element.openDt = element.openDt.replaceAll('-', ''); // 개봉일 포맷 수정

            try {
                // 영화 포스터 가져오기 (순차적 실행)
                const poster = await searchMoviePoster(element.movieNm, element.openDt);

                output += `
                <tr>
                    <td>${element.rank}</td>
                    <td><img src="${poster}" alt="포스터" class="poster" id="${element.movieNm},${element.openDt.replaceAll('-', '')}"></td>
                    <td>${element.movieNm}</td>
                    <td>${element.openDt}</td>
                    <td>${element.audiCnt}</td>
                    <td>${element.audiAcc}</td>
                </tr>`;
            } catch (error) {
                console.error(`Error fetching poster for ${element.movieNm}:`, error);
                output += `
                <tr>
                    <td>${element.rank}</td>
                    <td>포스터 없음</td>
                    <td>${element.movieNm}</td>
                    <td>${element.openDt}</td>
                    <td>${element.audiCnt}</td>
                    <td>${element.audiAcc}</td>
                </tr>`;
            }

            // 매번 결과 업데이트
            document.querySelector('#result').innerHTML = output;
        }

        output += `</table>`;
        document.querySelector('#result').innerHTML = output;


        // 이미지 클릭 이벤트
        let images = document.querySelectorAll(".poster");
        images.forEach((element) => {
            element.addEventListener('click', onMovieDetail) //괄호가 없을 경우 명령 수행 후 되돌아오지 않는다.
        });


    } catch (error) {
        console.error('Error fetching box office data:', error);
    }
}

/**
 * 이미지 이벤트 처리 함수
 */
function onMovieDetail(event){

    const modal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    const closeModalBtn = document.getElementById('closeModal');

    let [movieNm, openDt] = event.target.id.split(',');
    console.log(movieNm);
    console.log(openDt);
        
    kmdbMovieDetail(movieNm, openDt)
    .then((result) => {
        const imageSrc = event.target.src; //클릭한 이미지의 src 가져옴
        modalImage.src = imageSrc; //모달 창에 이미지 넣기
        modal.style.display = 'block'; //모달 창 표시


        let info = result.Data[0].Result[0];
        let output = ``;

        let title = info.title.replaceAll('!HS', '').replaceAll('!HE', ''),
        titleEng = info.titleEng.replaceAll('!HS', '').replaceAll('!HE', ''), type = info.type,
        nation = info.nation, rating = info.rating, runtime = info.runtime, company = info.company, releaseDts = info.repRlsDate,
        director = info.directors.director[0].directorNm;
        let selectedActors = info.actors.actor.slice(0, 5).map(actor => actor.actorNm).join(', ').replaceAll('!HS', '').replaceAll('!HE', '');
        let stllsArray = info.stlls.split('|').slice(0, 10);
        console.log(stllsArray);
        

        output += `
            <ul id="infoBox">
                <li>제목 : ${title}</li>
                <li>${titleEng}</li>

                <li>감독 : ${director}</li>
                <li>배우 : <p id="p">${selectedActors}</p> <button type="button" id="more_actors">더 보기</button>
                <button type="button" id="close_actors">접기</button></li>

                <li>${type}</li>
                <li>${nation}</li>
                <li>${rating}</li>
                <li>${runtime}분</li>
                <li>${company}</li>
                <li>${releaseDts}</li>
            
            </ul>
        `;
        document.querySelector('#information').innerHTML = output;
        document.querySelector("#close_actors").style.display = 'none';
        

 // 더 보기 버튼 이벤트
        document.querySelector('#more_actors')
        .addEventListener('click', function(){
              output += `</div>`;
                 document.querySelector('#p').textContent = info.actors.actor.map(actor => actor.actorNm)
                 .join(', ').replaceAll('!HS', '').replaceAll('!HE', ''); //전체 인물 뽑기

                 document.querySelector("#more_actors").style.display = 'none';
                 document.querySelector("#close_actors").style.display = 'inline-block';
            })
     // 접기 버튼 이벤트
        document.querySelector('#close_actors')
        .addEventListener('click', function(){
            document.querySelector('#p').textContent = selectedActors; //인물 5명 뽑기

            document.querySelector("#more_actors").style.display = 'inline-block';
            document.querySelector("#close_actors").style.display = 'none';
            })
        })
    .catch(error => console.log(error)
    );

    closeModalBtn.addEventListener('click', function(){
        modal.style.display = 'none'; //모달 창 닫기
    });

    window.addEventListener('click', (event) => {
        if(event.target === modal){
            modal.style.display = 'none';
        }
    });
    
}//onMovieDetail
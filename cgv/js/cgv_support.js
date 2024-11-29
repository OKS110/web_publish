window.addEventListener('DOMContentLoaded', function(event){
    createNoticeList();
});

function createNoticeList(){
    fetch("../data/notice.json")
    .then((result) => result.json()) // fetch 실행결과 => result(문자열) => json객체 변환
    .then((jsonData) => {
        showNoticeList(jsonData.list); //전체 리스트 출력
    })
    .catch(error => console.log(error));
} //createNoticeList

/**
 * 
 */
function onChangeNoticeList(code){
    // 1. list 배열에서 code를 filtering 후 새로운 배열 반환
    fetch("../data/notice.json")
    .then((result) => result.json())
    .then((jsonData) => {
        if(code === 'total'){
            createNoticeList();
        }else{
            let filterList = jsonData.list.filter((object) => object.code === code); //[{},{}]
            showNoticeList(filterList);
        }

    })
    .catch()
    // 2. 테이블 출력코드 생성
    // 3. 화면 출력
}

/**
 * 화면 출력 함수
 */
function showNoticeList(list){
    let output = `
    <thead>
        <tr>
            <th>번호</th>
            <th>구분</th>
            <th class="tit">제목</th>
            <th>등록일</th>
            <th>조회수</th>
        </tr>
    </thead>
    <tbody>
    `;
    
    //forEach => <tr>~</tr>
    list.forEach((element, i) => {
        output += `
        <tr>
            <td>${i+1}</td>
            <td>${element.type}</td>
            <td class="tit"><a href="#">${element.title}</a></td>
            <td>${element.date}</td>
            <td>${element.hits}</td>
        </tr>
        `;
        
    });



    output += `</tbody>
        <tfoot>
            <tr>
               <td colspan="5">
                <a href="#">1</a>
                <a href="#">2</a>
                <a href="#">3</a>
                <a href="#">4</a>
                <a href="#">5</a>
                <a href="#" class="next-btn">&gt;&gt;</a>
               </td>
           </tr>
        </tfoot>`;
    document.querySelector("table").innerHTML = output;
}

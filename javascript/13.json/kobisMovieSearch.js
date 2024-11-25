initForm();

function initForm(){
    let output = `
        <h1>KOBIS 영화 검색</h1>
        <div>
            <input type='text' id="search_title" placeholder = '제목을 입력해주세요'>
            <button type = 'button' id = 'search_button'>Search</button>
        </div>
        <div id="result">
        </div>
    `;

    document.querySelector('body').innerHTML = output;

    // Search 버튼 이벤트
    let button = document.querySelector('#search_button');
    let title = document.querySelector('#search_title');
    button.addEventListener('click', function(e){
        e.preventDefault();
        if(title.value.trim() !== ''){ //입력한 상태 (trim()으로 공백을 없앰)
            alert(title.value);            
            

        }else{ //입력 받지 않았을 때
            alert('영화 제목을 입력해주세요');
            title.focus();
        }
        
        
    });
}
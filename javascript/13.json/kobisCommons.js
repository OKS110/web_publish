/**
 * KOBIS 박스오피스 정보
 */
export async function kobsBoxOffice(type, searchDt){
    const key = `362298addeb513676d1cf80b15a870f5`;
    const url = `http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/search${type}BoxOfficeList.json?key=${key}&targetDt=${searchDt}`;
    
    let kobis = await fetch(url);
    let jsonData = await kobis.json();

    return jsonData;
}


/**
 * KOBIS 영화 리스트 호출 함수
 */
export async function kobsMovieList(){
    const key = `362298addeb513676d1cf80b15a870f5`;
    const url = `https://kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieList.json?key=${key}`;

    const movieList = await fetch(url);
    const jsonData = await movieList.json();
}
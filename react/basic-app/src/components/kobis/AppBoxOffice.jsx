import { useEffect, useState } from "react";

import BoxOffice from './BoxOffice.jsx'
export default function AppBoxOffice(){
    const [dailyBoxOffice, setDailyBoxOffice] = useState([]);
    const key = `1387ed83604df30a0c5d9dfdea0cba00`;
    const url = `http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=${key}&targetDt=20241203`;
    
    useEffect(() => {
        fetch(url)
        .then((result) => result.json())
        .then(jsonData => setDailyBoxOffice(jsonData.boxOfficeResult.dailyBoxOfficeList))
        .catch(error => console.log(error))
    },[]);

    return(
        <>
            <h1 style={{margin: "20px"}}>Kobis BoxOffice</h1>
                <BoxOffice 
                        rank="순위"
                        title="제목"
                        openDt="개봉일"
                        cnt="당일 관객수"
                        total="누적 관객수"
                        amt="누적 매출액"
                        type="title"
                />

           
                {dailyBoxOffice.map((boxoffice) =>
                        <BoxOffice 
                        rank={boxoffice.rank}
                        title={boxoffice.movieNm}
                        openDt={boxoffice.openDt}
                        cnt={boxoffice.audiCnt}
                        total={boxoffice.audiAcc}
                        amt={boxoffice.salesAmt}
                        type="content"
                        />
                        )}
    
                   
        </>
    );
}
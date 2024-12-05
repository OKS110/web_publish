import SpecialItem from "./SpecialItem";

export default function Special(){
    const specialList = [
        {
            "title": "SUITE CINEMA",
            "text": "#호텔 컨셉의 프리미엄관"
        },
        {
            "title": "CINE & LIVINGROOM",
            "text": "#신개념 소셜 상영관"
        },
        {
            "title": "4DX",
            "text": "#모션 시트 #오감체험"
        },
        {
            "title": "CINE de CHEF",
            "text": "#쉐프가 있는 영화관"
        },
    ]
    
    return(
        <section>
                <div className="special-top">
                    <h3>특별관</h3>
                    <div className="content-moviechart-title-right">
                        <a href="#">전체보기 &gt;</a>
                    </div>
                </div>

                
                <div className="special-bottom">
                    <div className="special-bottom-images">
                        <img src="https://img.cgv.co.kr//Front/Main/2021/1209/16390080561620.png" alt="Special1" className="special-images"></img>
                        <img src="https://img.cgv.co.kr//Front/Main/2022/0616/16553622935690.png" alt="Special2" className="special-images"></img>
                        <img src="https://img.cgv.co.kr//Front/Main/2021/1130/16382612660240.png" alt="Special3" className="special-images"></img>
                        <img src="https://img.cgv.co.kr//Front/Main/2021/1130/16382612660560.png" alt="Special4" className="special-images"></img>

                    </div>

                    <ul>
                        {specialList.map((item, index) =>
                            <li key={index} className="special-list" aria-selected="true">
                                <SpecialItem title={item.title} text={item.text}></SpecialItem>
                            </li>
                         )}
                    </ul>
                </div>
        </section>        
    );
}
import SpecialItem from "./SpecialItem";
import { useEffect, useState } from "react";
export default function Special(){
    const [specialList, setSpecialList] = useState([]);

    useEffect(() => {
        fetch("data/cgv_content.json")
        .then(data => data.json())
        .then(jsonData => setSpecialList(jsonData.specialList))
        .catch(error => console.log(error))
    }, []);
    
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
                        {specialList && specialList.map((item, index) =>
                            <li key={index} className="special-list" aria-selected="true">
                                <SpecialItem title={item.title} text={item.text}></SpecialItem>
                            </li>
                         )}
                    </ul>
                </div>
        </section>        
    );
}
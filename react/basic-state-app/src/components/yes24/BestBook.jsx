import BestBookButton from "./BestBookButton.jsx";
import { useState } from "react";
export default function BestBook(){ //qty를 이곳에서 받는다고 생각해서 오류가 발생했다.
    const list =[
        {"img" : "https://image.yes24.com/goods/13137546/L"},
        {"img" : "https://image.yes24.com/goods/108422348/L"},
        {"img" : "https://image.yes24.com/goods/103495056/L"},
    ];

    const [total, setTotal] = useState(0);

    const totalChange = (count) => {
        setTotal(total + count);
    };
    return(
        <>
        <div className="total">전체카트수량 : {total} </div>
        {list && list.map((item) => 
            <div className="wrap" style={{display:"flex"}}>
                <img src={item.img}/>
                <BestBookButton totalChange = {totalChange}></BestBookButton>
            </div>
        )}
       
        </>
    );
}
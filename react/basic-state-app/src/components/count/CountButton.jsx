import { useState } from "react";

export default function CountButton({total, totalfnc}) {

    const [num, setNum] = useState(0);


    const click = (type) => {
        if(type === "+"){
            setNum(num + 1);
            totalfnc(num, "+");
        }else if(type === "-"){
            setNum(num - 1);
            totalfnc(num, "-");
        }
    }
return (
    <div>
                <span className="num">{num}</span>
                <span>/</span>
                <span className="total-num">{total}</span>
                <button type="button" onClick={() => click("+")}>증가</button>
                <button type="button" onClick={() => click("-")}>감소</button>
    </div>
    );
};
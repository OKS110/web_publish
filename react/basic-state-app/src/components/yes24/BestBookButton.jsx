import { useState } from "react";


export default function BestBookButton({totalChange}){
    const [count, setCount] = useState(0);
    const cntChange = (type) => {
        if(count > 0 && type === "-"){
            setCount(count - 1);

        }else if(type === '+'){
            setCount(count + 1);

        }
    };
    return(
        <ul>
            <li>
                <input type="checkbox" />
                <button type="button" onClick={() => cntChange('-')}>-</button>

                <span>{count}</span>
                
                <button type="button" onClick={() => cntChange('+')}>+</button>
            </li>

            <li><button type="button" onClick={() => totalChange(count)}>카트에 넣기</button></li>
            <li><button type="button">바로구매</button></li>
            <li><button type="button">리스트에 넣기</button></li>
        </ul>
    );
}
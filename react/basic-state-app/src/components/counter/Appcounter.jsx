import Counter from "./Counter.jsx";
import './Counter.css';
import { useState } from "react";

export default function AppCounter(){
    const [totalNumber, setTotalNumber] = useState(0);

    //totalNumber 변경 => 자식 Counter 컴포넌트 이벤트가 발생했을 때
    const handleClick = (number, type) => {
        if( number < 10 && type === '+'){
            setTotalNumber(totalNumber + 1);
        }else if( number > 0 && type === '-'){
            setTotalNumber(totalNumber - 1);
        }
        
    }
    return (
        <div className="counter-container">
            <Counter total = {totalNumber} click={handleClick}></Counter>
            <Counter total = {totalNumber} click={handleClick}></Counter>
            <Counter total = {totalNumber} click={handleClick}></Counter>
        </div>
    );
}
import { useState } from "react";

export default function Counter({total, click}){
    const [number, setNumber] = useState(0); 
    // const [totalNumber, setTotalNumber] = useState(0); 
    
    
    function increment(){
            (number === 10) ? setNumber(number) : setNumber(number + 1);
            click(number, '+');

    }
    
    function decrement(){
        (number === 0) ? setNumber(number) : setNumber(number - 1);
        click(number, '-');

    }
    return(
        <div className="container">
            <div>
                <span className="number">{number} /</span>
                <span className="total-number">{total}</span>
            </div>

            <button type="button" className="button"
            onClick={increment}>increment</button>

            <button type="button" className="button"
            onClick={decrement}>decrement</button>

        </div>
    );
}